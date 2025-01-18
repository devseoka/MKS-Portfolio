import { animate, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { fadeInDownAnimation, fadeOutUpAnimation } from "angular-animations";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations:  [
        trigger('enter', [
          transition(':enter', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ]),
        trigger('leave', [
          transition(':leave', [
            style({ opacity: 1, transform: 'translateY(0)' }),
            animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(20px)' }))
          ])
        ])
      ]
})
export class AboutComponent {
    
}