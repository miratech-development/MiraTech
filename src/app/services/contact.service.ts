// src/app/core/services/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactForm } from '../models/contact-form';
import { environment } from '../../enviroments';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMessage(form: ContactForm): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/messages`,
      form
    );
  }
}