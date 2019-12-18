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
    this.getAllRegistrations();
  }


  private getAllRegistrations() {
    this.personService.getRegistrationsList().subscribe(data => {
      const usersList: Person[] = [];
      for (const userData of (data as any)) {
        const user = new Person(
          userData._id,
          userData.name,
          userData.surname,
          userData.age,
          userData.dni,
          userData.dateOfBirth,
          userData.favouriteColour,
          userData.gender,
          userData.notes
        );
        usersList.push(user);
      }
      this.dataSource.data = usersList;
      this.dataSource.sort = this.sort;
    });
  }


  deleteContact(id: string) {
    if (window.confirm('Se borrará el registro. ¿Desea continuar?')) {
      this.personService.deleteContact(id).subscribe(data => {
        if (data.deletedCount > 0) {
          console.log('User deleted');
          this.getAllRegistrations();

        } else {
          alert('Error en el borrado de usuario');
        }
      });
    }
  }
}
