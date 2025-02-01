import { animate, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { bounceOutDownOnLeaveAnimation, fadeInDownAnimation, fadeOutUpAnimation } from "angular-animations";

@Component({
    selector: 'app-introduction',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        trigger('fadeInOut', [
          transition(':enter', [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            animate('500ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
          ]),
          transition(':leave', [
            animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(50px)' }))
          ])
        ])
      ]
})
export class HeaderComponent {

}