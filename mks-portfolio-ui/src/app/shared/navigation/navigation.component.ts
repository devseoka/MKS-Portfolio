import { Component, HostListener, OnInit } from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    ngOnInit(): void {
        this.checkScreenSize()
    }
    isOpen: boolean = false
    isMobile: boolean = window.innerWidth <= 768;
    activeLink: string = 'banner'
    onDownload() {
    }
    onOpen() {
        this.isOpen = !this.isOpen
    }
    setActiveLink(link: string) {
        this.activeLink = link
        this.isOpen = !this.isOpen
    }
    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        this.checkScreenSize()
    }
    checkScreenSize() {
        this.isMobile = window.innerWidth < 768;
    }

}