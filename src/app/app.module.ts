import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './connexion/sign-in/sign-in.component';
import { SignUpComponent } from './connexion/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UploaderComponent } from './uploader/uploader.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { GrapheCondidatComponent } from './dashboard/graphe-condidat/graphe-condidat.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SidenavComponent,
    UploaderComponent,
    DashboardComponent,
    DataTableComponent,
    BarChartComponent,
    GrapheCondidatComponent,
    PieChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
