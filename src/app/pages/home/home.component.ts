import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MainContentComponent } from '../../components/main-content/main-content.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainContentComponent, FooterComponent], // استدعاء المجلدات هنا
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }
