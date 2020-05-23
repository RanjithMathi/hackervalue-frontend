import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { ViewquestionsComponent } from './viewquestions/viewquestions.component';
import { LoginComponent } from './login/login.component';
import { TestViewComponent } from './test-view/test-view.component';
import { ScoreComponent } from './score/score.component';


const routes: Routes = [
  {path:'tests',component:TestsComponent},
  { path: 'tests/view-questions', component: ViewquestionsComponent } ,
  { path: 'tests/view-questions/:testName', component: ViewquestionsComponent } ,
  {path:'dashboard',component:DashboardComponent },
  {path:'add-questions',component:AddQuestionsComponent},
  {path:'reports',component:ReportsComponent},
  {path:'users',component:UsersComponent},
  {path:'testView',component:TestViewComponent},
  {path:'login',component:LoginComponent},
  {path:'score',component:ScoreComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
