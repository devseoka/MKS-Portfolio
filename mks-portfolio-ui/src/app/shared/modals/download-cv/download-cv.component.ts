import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import CvGuardService from '@services/cv-guard.service';
import { first, tap } from 'rxjs';
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
    private fb: FormBuilder,
    private toast: HotToastService
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
    this.close();
    const message = `Thanks for taking the time to download my CV, ${request.name}!
      I am looking forward to discussing it in detail with you.`;
    this.downloadCv(request, message);
  }
  private downloadCv(request: any, successMessage: string) {
    this.cvService
      .download(request)
      .pipe(
        this.toast.observe({
          loading: 'Downloading CV...',
          success: successMessage,
          error: 'Failed to download CV',
        }),
        first(),
        tap({
          next: blob => this.handleDownloadSuccess(blob as Blob, request),
          error: (error: HttpErrorResponse) => this.handleDownloadError(error),
        })
      )
      .subscribe();
  }

  private handleDownloadSuccess(blob: Blob, request: any): void {
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    const year = new Date().getFullYear();
    anchor.download = `${environment.name}-${year}-CV.pdf`;
    anchor.click();
    window.URL.revokeObjectURL(url);
    this.close();
  }

  private handleDownloadError(error: HttpErrorResponse): void {
    this.close();
    if (error.status === 409) {
      const errors: string[] = error.error.errors;
      errors.forEach((errorMsg: string) => this.toast.error(errorMsg));
    } else {
      this.toast.error(environment.message);
    }
  }

  close() {
    this.isOpen = !this.isOpen;
  }
}
