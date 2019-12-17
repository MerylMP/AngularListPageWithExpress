import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationsNewComponent } from './components/registrations-new/registrations-new.component';
import { RegistrationsEditComponent } from './components/registrations-edit/registrations-edit.component';
import { RegistrationsListComponent } from './components/registrations-list/registrations-list.component';
import { FormsModule } from '@angular/forms';
import { PersonService } from './services/person.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationsNewComponent,
    RegistrationsEditComponent,
    RegistrationsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
