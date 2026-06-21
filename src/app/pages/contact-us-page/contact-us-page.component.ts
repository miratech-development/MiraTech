import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact-us-page',
  imports: [HeaderComponent, ContactUsComponent, FooterComponent],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css'
})
export class ContactUsPageComponent {

}
