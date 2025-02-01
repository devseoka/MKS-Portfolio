import { Component, EventEmitter, HostListener, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    @Output() modalChanged: EventEmitter<boolean> = new EventEmitter<boolean>()
    
    isModalOpen: boolean = false
    isOpen: boolean = false
    isMobile: boolean = window.innerWidth <= 768;
    activeLink: string = 'banner'

    ngOnInit(): void {
        this.checkScreenSize()
    }
    onDownload() {
       this.modalChanged.emit(!this.isModalOpen)
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
    onModalStatus(status: boolean){
       this.isModalOpen = status
    }

}