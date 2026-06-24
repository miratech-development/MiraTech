import { Component, Input,SimpleChanges,OnChanges } from '@angular/core';
import { Cards } from '../cards/cards.component';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
   @Input() project!: Cards ; // Input property to receive project data from parent component
  
  // Array to hold numbers for the loops (e.g., [1, 2, 3])
  screenshotNumbers: number[] = [];
  selectedImage: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    // Every time a new project is loaded, rebuild the numbering array
    if (this.project && this.project.screenshotCount) {
      this.screenshotNumbers = Array.from(
        { length: this.project.screenshotCount }, 
        (_, i) => i + 1
      );
    }
  }
  openImage(imagePath: string): void {
    this.selectedImage = imagePath;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

}
