import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Health } from '@models/health.response';
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
  endpoint = `${environment.api}/health`
  isRunning = false
  isHealthCheckCompleted = false
  ngOnInit(): void {
    this.checkServiceStatus()
  }
  onOpen(status: boolean) {
    this.isOpen = status;
  }
  checkServiceStatus() {
   this.http.get<Health>(this.endpoint).pipe(first()).subscribe({
    next: (response) => {
     this.isRunning = response.status == 'Healthy'
     this.isHealthCheckCompleted = true
    },
    error: () => {
       this.isRunning = false
       this.isHealthCheckCompleted = true
       this.router.navigate(['/503']) 
     }
   })
  }
}
