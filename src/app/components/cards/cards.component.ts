import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
export interface Cards {
  id:number;
  name: string;
  shortDescription: string;
  logoUrl: string;
screenshotFolder: string;
screenshotCount: number;
imageExtension?: string; // Optional property to specify image extension (e.g., 'png', 'jpg')


}

@Component({
  selector: 'app-cards',
  imports: [CommonModule, RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  projects:Cards[]=[
    {
      id:1,
      name:'Organize Me', 
      shortDescription:' web application designed to centralize event planning and boost student engagement on campus',
      logoUrl:'photos/organizeMe/logo.png',
      screenshotFolder:'photos/organizeMe',
      screenshotCount: 13,
      imageExtension: 'png' // Specify the image extension for this project

    },
    {
      id:2,
      name:'LMS', 
      shortDescription:' system is designed to simplify and organize the educational process',
      logoUrl:'photos/LMS/logo.png',
      screenshotFolder:'photos/LMS/',
      screenshotCount: 28,
      imageExtension: 'jpeg' // Specify the image extension for this project
    },
    {
      id:3,
      name:'Game zone', 
      shortDescription:'is a reservation and management platform designed for gaming and entertainment spaces.',
      logoUrl:'photos/gameZone/logo.png',
      screenshotFolder:'photos/gameZone/',
      screenshotCount: 17,
      imageExtension: 'png' // Specify the image extension for this project
    },
    {
      id:4,
      name:'CafeFlow ', 
      shortDescription:' is a modern café management application designed to simplify daily operations for both staff and customers',
      logoUrl:'photos/CafeFlow/logo.png',
      screenshotFolder:'photos/CafeFlow/',
      screenshotCount: 20,
      imageExtension: 'png' // Specify the image extension for this project
    },
    {
      id:5, 
      name:'Midi Flow', 
      shortDescription:' web application designed to ',
      logoUrl:'photos/midiFlow/logo.jpg',
      screenshotFolder:'photos/midiFlow',
      screenshotCount: 10,
      imageExtension: 'jpg' // Specify the image extension for this project
    }
  
  
  
  
  ]
}
