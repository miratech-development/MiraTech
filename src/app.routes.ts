import { HomeComponent } from './app/pages/home/home.component';
import { ContactUsPageComponent } from './app/pages/contact-us-page/contact-us-page.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', component: HomeComponent }, // كدة أول ما الموقع يفتح هيعرض الهوم علطول
  { path: 'home', component: HomeComponent }, // كدة لو دخلت على /home هيعرض الهوم
  { path: 'contact-us', component: ContactUsPageComponent } // كدة لو دخلت على /contact-us هيعرض صفحة الاتصال
];
