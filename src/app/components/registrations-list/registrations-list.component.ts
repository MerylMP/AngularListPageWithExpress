import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Person } from 'src/app/classes/Person';


@Component({
  selector: 'app-registrations-list',
  templateUrl: './registrations-list.component.html',
  styleUrls: ['./registrations-list.component.css']

})

export class RegistrationsListComponent implements OnInit {

  dataSource = new MatTableDataSource<Person>([]);
  columnsToDisplay: string[] = ['name', 'surname', 'dni', 'gender', 'age', 'dateOfBirth', 'favouriteColor', 'notes', 'action'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private personService: PersonService) { }


  ngOnInit() {
    this.dataSource.data = this.personService.getRegistrationsList();
    this.dataSource.sort = this.sort;
  }


  deleteContact(index, e) {
    if (window.confirm('Se borrará el registro. ¿Desea continuar?')) {
      this.personService.deleteContact(index);
      this.dataSource.data = this.personService.getRegistrationsList();
    }
  }
}
