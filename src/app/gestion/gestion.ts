import { Component,OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { NotFound } from '../not-found/not-found';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [NotFound],
  templateUrl: './gestion.html',
  styleUrls: ['./gestion.scss']
})
export class Gestion implements OnInit {
  public lastContact: { name: string; email: string; message: string; age:number } | null = null;

  constructor(private contactService: ContactService, private router: Router) {}

  public ngOnInit () {
    this.lastContact = this.contactService.getContact();
    if (!this.lastContact) {
      this.router.navigate(['/404']);
    }
  }
}
