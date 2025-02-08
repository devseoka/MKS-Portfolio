import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient){}
  isOpen = false;
  endpoint = `${environment.api}/cv/download`
  isRunning = true
  ngOnInit(): void {
    this.checkServiceStatus()
  }
  onOpen(status: boolean) {
    this.isOpen = status;
    
  }
  checkServiceStatus() {
  const body =  { email: 'support@seokamoshele.digital', name: 'Moshele Seoka'}
   this.http.post(this.endpoint, body).pipe(first()).subscribe({
    complete: () => {
      this.isRunning
    },
     error: () => {
       this.isRunning = false
        this.router.navigate(['/503'])
       
     }
   })
  }
}
