import { Component } from "@angular/core";
import { bounceOutDownOnLeaveAnimation, fadeInDownAnimation, fadeOutUpAnimation } from "angular-animations";

@Component({
    selector: 'app-introduction',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [
        fadeInDownAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
        fadeOutUpAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })]
})
export class HeaderComponent {

}