import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavigationComponent } from "./navigation/navigation.component";
import { DownloadCvComponent } from "./modals/download-cv/download-cv.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [NavigationComponent, DownloadCvComponent],
    exports: [NavigationComponent, DownloadCvComponent],
    imports: [BrowserModule, ReactiveFormsModule]
})
export class SharedModule {}