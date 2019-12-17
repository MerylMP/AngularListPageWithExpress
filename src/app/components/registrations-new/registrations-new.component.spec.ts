import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsNewComponent } from './registrations-new.component';

describe('RegistrationsNewComponent', () => {
  let component: RegistrationsNewComponent;
  let fixture: ComponentFixture<RegistrationsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
