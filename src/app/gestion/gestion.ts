import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { NotFound } from '../not-found/not-found';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NotFound],
  templateUrl: './gestion.html',
  styleUrls: ['./gestion.scss']
})
export class Gestion {
  lastContact: { name: string; email: string; message: string } | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.lastContact = this.contactService.getContact();
  }
}
