import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('jsScroll', { static: false }) jsScroll: ElementRef | undefined;

  private offset: number = 0;
  private speed: number = 0.05;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initSmoothScroll();
  }

  private initSmoothScroll(): void {
    const body = document.body;
    const jsScroll = this.jsScroll?.nativeElement;
    if (jsScroll) {
      const height = jsScroll.getBoundingClientRect().height - 1;
      body.style.height = Math.floor(height) + "px";

      const smoothScroll = () => {
        this.offset += (window.pageYOffset - this.offset) * this.speed;
        const scroll = `translateY(-${this.offset}px) translateZ(0)`;
        this.renderer.setStyle(jsScroll, 'transform', scroll);

        requestAnimationFrame(smoothScroll);
      };

      smoothScroll(); // Start the smooth scrolling effect
    }
  }
}
