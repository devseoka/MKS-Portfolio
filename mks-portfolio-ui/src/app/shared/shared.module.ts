import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './navigation/navigation.component';
import { DownloadCvComponent } from './modals/download-cv/download-cv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [NavigationComponent, DownloadCvComponent, LoaderComponent],
  exports: [NavigationComponent, DownloadCvComponent, LoaderComponent],
  imports: [BrowserModule, ReactiveFormsModule],
})
export class SharedModule {}
