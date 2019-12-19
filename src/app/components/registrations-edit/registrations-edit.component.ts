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
  private favouriteColour: string;
  private gender: string;
  private notes: string;


  constructor(
    private personService: PersonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.personService.getContactById(this.id).subscribe(resp => {

      this.contactRegistration = new Person(
        resp[0]._id,
        resp[0].name,
        resp[0].surname,
        resp[0].age,
        resp[0].dni,
        resp[0].dateOfBirth,
        resp[0].favouriteColour,
        resp[0].gender,
        resp[0].notes
      );
    });
  }

  updateChanges() {
    this.personService.updateContacts(
      this.id,
      this.contactRegistration.getName(),
      this.contactRegistration.getSurname(),
      this.contactRegistration.getAge(),
      this.contactRegistration.getDni(),
      this.contactRegistration.getDateOfBirth(),
      this.contactRegistration.getFavouriteColour(),
      this.contactRegistration.getGender(),
      this.contactRegistration.getNotes()
    ).subscribe(resp => {
        if (resp.modifiedCount === 0) {
          alert('El usuario no ha sido modificado');
        }
        this.router.navigateByUrl('users');
    });
  }
}
