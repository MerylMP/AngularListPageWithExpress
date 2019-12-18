import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/classes/Person';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registrations-edit',
  templateUrl: './registrations-edit.component.html',
  styleUrls: ['./registrations-edit.component.css']
})

export class RegistrationsEditComponent implements OnInit {

  private id: string;
  private contactRegistration: Person;
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
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.personService.getContactById(this.id).subscribe(data => {

      this.contactRegistration = new Person(
          data[0]._id,
          data[0].name,
          data[0].surname,
          data[0].age,
          data[0].dni,
          data[0].dateOfBirth,
          data[0].favouriteColour,
          data[0].gender,
          data[0].notes
        );
    });
  }

  updateChanges() { // corregir
    this.personService.updateContacts(this.id, this.contactRegistration);
    this.router.navigateByUrl('users');
  }
}
