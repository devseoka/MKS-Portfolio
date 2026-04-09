import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('1000ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('1000ms ease-in-out', style({ opacity: 0, transform: 'translateY(50px)' })),
      ]),
    ]),
  ],
})
export class skillsComponent {}
