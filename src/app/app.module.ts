import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPanelComponent } from './top-panel/top-panel.component';
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreakingChangesComponent } from './breaking-changes/breaking-changes.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    BreakingChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule,
    NgbModule
  ],
  providers: [
      ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
