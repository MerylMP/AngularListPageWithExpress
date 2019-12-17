import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrations-new',
  templateUrl: './registrations-new.component.html',
  styleUrls: ['./registrations-new.component.css']
})

export class RegistrationsNewComponent implements OnInit {
  private name: string;
  private surname: string;
  private age: number;
  private dni: string;
  private dateOfBirth: Date;
  private favouriteColor: string;
  private gender: string;
  private notes: string;


  constructor(
    private personService: PersonService,
    private router: Router
  ) { }


  ngOnInit() {
    this.name = null;
    this.surname = null;
    this.age = null;
    this.dni = null;
    this.dateOfBirth = null;
    this.favouriteColor = null;
    this.gender = 'No especificado';
    this.notes = null;
  }

  registerContact() {
    this.personService.addContact(this.name, this.surname, this.age, this.dni, this.dateOfBirth,
      this.favouriteColor, this.gender, this.notes);

    this.router.navigateByUrl('contactsList');
  }
}
