import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@components/pages/home/home.component';
import { ServiceUnavailableComponent } from '@components/service-unavailable/service-unavailable.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Seoka Moshele – Full-Stack Developer | C# & Angular Intermediate Developer' },
  },
  {
    path: '503',
    component: ServiceUnavailableComponent,
    data: { title: 'Seoka Moshele | 503 Service Unavailable' },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
