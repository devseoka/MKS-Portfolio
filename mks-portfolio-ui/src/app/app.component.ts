import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CvGuardService from '@services/cv-guard.service';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isOpen:boolean = false
  ngOnInit(): void {
    console.log(`The status of the model is `, this.isOpen)
  }
  onOpen(status: boolean) {
    this.isOpen = status
  }
}
