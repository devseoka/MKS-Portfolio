import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmailRequest } from '@models/email.request';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export default class CvGuardService {
  private endpoint = `${environment.api}/cv/download`;
  constructor(private http: HttpClient) {}
  download(request: EmailRequest) {
    return this.http.post(this.endpoint, request);
  }
}
