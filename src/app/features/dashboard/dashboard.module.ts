import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
    // children: [
    //   {
    //     path: 'userroles',
    //     component: UserRolesComponent,
    //     outlet: 'pane'
    //   }
    // ]
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
