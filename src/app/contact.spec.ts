import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class Contact {
  name = '';
  email = '';
  message = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.contactService.setContact({
      name: this.name,
      email: this.email,
      message: this.message
    });

    alert("Formulaire envoyé !");
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
