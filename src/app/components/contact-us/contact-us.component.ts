import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../models/contact-form';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule], // استدعاء CommonModule هنا
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
subjects = [
  'Website Development',
  'Mobile App Development',
  'Desktop Software Development',
  'Software Architecture Design',
  'UI/UX Design',
  'Other'
  ];
 
  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: 'Software Architecture Design',
    message: ''
  };
  contactService: ContactService = inject(ContactService);
  submitted = false;
  loading = false;
 
  onSubmit(): void {
  if (this.loading || this.form.name === '' ||
      this.form.email === '' || this.form.message === '') return;

  this.loading = true;

  this.contactService.sendMessage(this.form).subscribe({
    next: (res) => {
      console.log('Message sent successfully:', res);

      this.submitted = true;
      this.loading = false;
      this.reset();
    },

    error: (err) => {
      console.error('Failed to send message:', err);
      this.loading = false;
    }
  });
}
  reset(): void {
    this.submitted = false;
    this.form = {
      name: '',
      email: '',
      phone: '',
      subject: 'Software Architecture Design',
      message: ''
    };
  }
}
