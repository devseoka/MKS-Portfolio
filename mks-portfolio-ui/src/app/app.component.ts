import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router){}
  isOpen = false;
  ngOnInit(): void {
    console.log(`The status of the model is `, this.isOpen);
  }
  onOpen(status: boolean) {
    this.isOpen = status;
  }
  checkServiceStatus() {
    const isServiceDown = true; 
    if (isServiceDown) {
      this.router.navigate(['/503']);
    }
  }
}
