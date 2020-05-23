import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {  ToastNoAnimation,
  ToastNoAnimationModule,ToastrModule } from 'ngx-toastr';
  import bootstrap from "bootstrap";

  import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { AppRoutingModule } from './app-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { ViewquestionsComponent } from './viewquestions/viewquestions.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxService } from './ajax.service';
import { LoginComponent } from './login/login.component';
import { TestViewComponent } from './test-view/test-view.component';
import { ChartsModule } from 'ng2-charts';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    SidebarComponent,
    DashboardComponent,
    AddQuestionsComponent, 
    ReportsComponent,
    UsersComponent,
    ViewquestionsComponent,
    LoginComponent,
    TestViewComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    PaginationModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule,
    NgMultiSelectDropDownModule.forRoot(),
    ChartsModule
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
