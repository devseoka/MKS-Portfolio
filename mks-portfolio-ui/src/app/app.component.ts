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
  form: FormGroup
  isOpen:boolean = false

  constructor(private cvService: CvGuardService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  ngOnInit(): void {
    console.log(`The status of the model is `, this.isOpen)
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const request = this.form.value
    this.cvService.download(request).pipe(first()).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        const year = new Date().getFullYear();
        anchor.download = `${environment.name}-${year}-CV.pdf`;
        anchor.click();
        window.URL.revokeObjectURL(url);
        this.close()

      },
      complete: () => {
      },
      error: (e: HttpErrorResponse) => {
        if (Array.isArray(e.error.errors)) {
          const errors = e.error.errors;
        }
      }
    })
  }
  close() {
    this.isOpen = !this.isOpen
  }
  onOpen(status: boolean) {
    this.isOpen = status
  }
}
