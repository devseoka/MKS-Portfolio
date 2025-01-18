import { HttpErrorResponse } from "@angular/common/http";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import CvGuardService from "@services/cv-guard.service";
import { first } from "rxjs";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-download-cv',
    templateUrl: './download-cv.component.html',
    styleUrls: ['./download.cv.component.scss']
})
export class DownloadCvComponent {
    
    
}