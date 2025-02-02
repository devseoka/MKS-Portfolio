import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CvGuardService from '@services/cv-guard.service';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-download-cv',
  templateUrl: './download-cv.component.html',
  styleUrls: ['./download.cv.component.scss'],
})
export class DownloadCvComponent implements OnChanges {
  @Input() isOpen = false;
  form: FormGroup;

  constructor(
    private cvService: CvGuardService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const statusObj = changes['isOpen'].currentValue;
    if (statusObj) {
      console.log(`the status for opening model is =>`, statusObj);
      this.isOpen = statusObj as boolean;
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const request = this.form.value;
    this.cvService
      .download(request)
      .pipe(first())
      .subscribe({
        next: blob => {
          const url = window.URL.createObjectURL(blob);
          const anchor = document.createElement('a');
          anchor.href = url;
          const year = new Date().getFullYear();
          anchor.download = `${environment.name}-${year}-CV.pdf`;
          anchor.click();
          window.URL.revokeObjectURL(url);
          this.close();
        },
        error: (e: HttpErrorResponse) => {
          if (Array.isArray(e.error.errors)) {
            const errors: string[] = e.error.errors;
            console.log(
              `Cv guard Api returns the following errors =>`,
              errors.map(e => e)
            );
          }
        },
      });
  }
  close() {
    this.isOpen = !this.isOpen;
  }
}
