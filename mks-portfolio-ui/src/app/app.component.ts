import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOpen = false;
  ngOnInit(): void {
    console.log(`The status of the model is `, this.isOpen);
  }
  onOpen(status: boolean) {
    this.isOpen = status;
  }
}
