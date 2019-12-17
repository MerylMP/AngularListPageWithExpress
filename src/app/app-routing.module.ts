import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationsListComponent } from './components/registrations-list/registrations-list.component';
import { RegistrationsNewComponent } from './components/registrations-new/registrations-new.component';
import { RegistrationsEditComponent } from './components/registrations-edit/registrations-edit.component';


const routes: Routes = [
  { path: 'contactsList', component: RegistrationsListComponent },
  { path: 'newRegistration', component: RegistrationsNewComponent },
  { path: 'editContact/:position', component: RegistrationsEditComponent},
  { path: '', redirectTo: '/contactsList', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
