import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/pages/dashboard.component';
import { StaffComponent } from './modules/staff/pages/staff/staff.component';
import { StaffDetailComponent } from './modules/staff/pages/staff-detail/staff-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'staff',
    component: StaffComponent,
  },
  {
    path: 'staff/:id',
    component: StaffDetailComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  declarations: [
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
