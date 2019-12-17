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

  private index: string;
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
    this.index = this.activatedRoute.snapshot.paramMap.get('position');
    this.contactRegistration = this.personService.getContact(this.index);
  }


  updateChanges() {
    this.personService.updateContacts(this.index, this.contactRegistration);
    this.router.navigateByUrl('contactsList');
  }
}
