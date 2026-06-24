import { Component } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-projects',
  imports: [ HeaderComponent,CardsComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
