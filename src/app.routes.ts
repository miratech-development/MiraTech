import { HomeComponent } from './app/pages/home/home.component';
import { ContactUsPageComponent } from './app/pages/contact-us-page/contact-us-page.component';
import { Routes } from '@angular/router';
import { CardsComponent } from './app/components/cards/cards.component';
import { ProjectsComponent } from './app/pages/projects/projects.component';
import { ProjectDetailsComponent } from './app/components/project-details/project-details.component';
import { ProjectDetailsPageComponent } from './app/pages/project-details-page/project-details-page.component';
export const routes: Routes = [
  { path: '', component: HomeComponent }, // كدة أول ما الموقع يفتح هيعرض الهوم علطول
  { path: 'home', component: HomeComponent }, // كدة لو دخلت على /home هيعرض الهوم
  {path:'projects', component: ProjectsComponent}, // كدة لو دخلت على /projects هيعرض صفحة المشاريع
 {path:'projects/:id', component: ProjectDetailsPageComponent}, // كدة لو دخلت على /projects/1 أو /projects/2 هيعرض تفاصيل المشروع اللي id بتاعه 1 أو 2
  { path: 'contact-us', component: ContactUsPageComponent } // كدة لو دخلت على /contact-us هيعرض صفحة الاتصال
];
