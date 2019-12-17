import { Injectable } from '@angular/core';
import { Person } from '../classes/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private registrationsList: Person[];

  constructor() {
    this.registrationsList = [];
  }

  // Add  a contact
  public addContact(name: string, surname: string, age: number, dni: string,
                    dateOfBirth: Date, favouriteColor: string, gender: string, notes: string) {
    const contactPerson = new Person(name, surname, age, dni, dateOfBirth,
      favouriteColor, gender, notes);
    this.registrationsList.push(contactPerson);
  }


  // Get a contact or all the contacts
  public getContact(id: string): Person {
    return this.registrationsList[id];
  }

  public getRegistrationsList(): Person[] {
    return this.registrationsList;
  }


  // Update a contact
  public updateContacts(id: string, contactPerson: Person) {
    this.registrationsList[id] = contactPerson;
  }


  // Delete a contact
  public deleteContact(id: number) {
    this.registrationsList.splice(id, 1);
  }
}
