import { MatDesignModule } from './features/shared/module/mat-design.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './features/components/dashboard/dashboard.component';
import { CompaniesComponent } from './features/components/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
