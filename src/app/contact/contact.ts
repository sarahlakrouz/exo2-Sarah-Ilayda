import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  contactForm: FormGroup;
  hideEmail = false;



  constructor(private fb: FormBuilder,  private router: Router,  private contactService: ContactService) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required],

    });
  }

  public toggleEmailVisibility() {
    const emailCtrl = this.contactForm.get('email');
    if (!emailCtrl){
      return;
    }
    this.hideEmail = !this.hideEmail;
    if (this.hideEmail) {
      emailCtrl.reset();
      emailCtrl.clearValidators();
      emailCtrl.updateValueAndValidity();
    } else {
      emailCtrl.setValidators([Validators.required, Validators.email]);
      emailCtrl.updateValueAndValidity();
    }
  }

  public onSubmit() {
    if (this.contactForm.valid) {
      const contactData = {
        name: this.contactForm.value.prenom + ' ' + this.contactForm.value.nom,
        email: this.contactForm.value.email,
        message: this.contactForm.value.commentaire
      };
      this.contactService.setContact(contactData);
      alert("Le formulaire est valide");
      this.contactForm.reset();
      this.router.navigate(['/accueil']);
    }
  }
}
