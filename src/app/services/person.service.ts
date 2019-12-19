import { Injectable } from '@angular/core';
import { Person } from '../classes/Person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


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

    return this.http.post<any>(this.usersUrl, body, this.httpOptions)
      .pipe(
        catchError(this.handleError('addContact', null))
      );
  }

  // Get a contact or all the contacts
  public getContactById(id: string): Observable<Person> {
    return this.http.get<Person>(this.usersUrl + '/' + id)
      .pipe(
        catchError(this.handleError('getContactById', null))
      );
  }

  public getContactsList(): Observable<Person[]> {
    return this.http.get<Person[]>(this.usersUrl)
      .pipe(
        catchError(this.handleError('getContactsList', []))
      );
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
    return this.http.put<any>(urlUser, body, this.httpOptions)
      .pipe(
        catchError(this.handleError('updateContacts', null))
      );
  }


  // Delete contact
  public deleteContact(id: string): Observable<any> {
    return this.http.delete<Person>(this.usersUrl + '/' + id)
      .pipe(
        catchError(this.handleError('deleteContact', null))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

