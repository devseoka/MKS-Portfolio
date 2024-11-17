import { Component } from "@angular/core";
import { fadeInDownAnimation, fadeOutUpAnimation } from "angular-animations";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [
        fadeInDownAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
        fadeOutUpAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })]
})
export class ContactComponent {
    
}