import { Component } from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    isOpen: boolean = false
    onDownload() {
    }
    onOpen() {
        this.isOpen = !this.isOpen
    }
}