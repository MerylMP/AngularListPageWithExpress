import { Injectable } from '@angular/core';
import { Person } from '../classes/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // URL to users API
  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  // Add contact
  public addContact(name: string, surname: string, age: number, dni: string,
                    dateOfBirth: Date, favouriteColour: string, gender: string, notes: string): Observable<any> {

    const body = {
      name,
      surname,
      age,
      dni,
      dateOfBirth,
      favouriteColour,
      gender,
      notes
    };

    return this.http.post(this.usersUrl, body, this.httpOptions);

  }

  // Get a contact or all the contacts
  public getContactById(id: string): Observable<Person> {
    return this.http.get<Person>(this.usersUrl + '/' + id);
  }

  public getRegistrationsList(): Observable<Person[]> {
    return this.http.get<Person[]>(this.usersUrl);
  }


  // Update contact
   public updateContacts(_id: string, name: string, surname: string, age: number, dni: string,
                        dateOfBirth: Date, favouriteColour: string, gender: string, notes: string): Observable<any> {

    const body = {
      name,
      surname,
      age,
      dni,
      dateOfBirth,
      favouriteColour,
      gender,
      notes
    };

    const urlUser = this.usersUrl + '/' + _id;
    return this.http.put(urlUser, body, this.httpOptions);
  }


  // Delete contact
  public deleteContact(id: string): Observable<any> {
    return this.http.delete<Person>(this.usersUrl + '/' + id);
  }
}

