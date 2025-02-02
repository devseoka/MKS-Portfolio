import { Component, EventEmitter, HostListener, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Output() onModalChanged: EventEmitter<boolean> = new EventEmitter<boolean>()

    isModalOpen: boolean = false;
    isOpen: boolean = false;
    isMobile: boolean = window.innerWidth <= 768;
    activeLink: string = 'banner';

    navLinks: string[] = ['about', 'skills', 'contact'];
    activeIndex: number = 0; 

    ngOnInit(): void {
        this.checkScreenSize();
    }

    onDownload() {
        this.onModalChanged.emit(!this.isModalOpen);
    }

    onOpen() {
        this.isOpen = !this.isOpen;
    }

    setActiveLink(link: string, index?: number) {
        this.activeLink = link;
        this.isOpen = false; 
        if (index !== undefined) {
            this.activeIndex = index;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.checkScreenSize();
    }

    checkScreenSize() {
        this.isMobile = window.innerWidth < 768;
    }

    onModalStatus(status: boolean){
        this.isModalOpen = status;
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (!this.isOpen) return; // Only enable navigation when the menu is open

        if (event.key === 'ArrowDown') {
            this.activeIndex = (this.activeIndex + 1) % this.navLinks.length;
        } else if (event.key === 'ArrowUp') {
            this.activeIndex = (this.activeIndex - 1 + this.navLinks.length) % this.navLinks.length;
        } else if (event.key === 'Enter') {
            this.setActiveLink(this.navLinks[this.activeIndex], this.activeIndex);
        }
    }
}
