import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  contactForm: FormGroup;
  hideEmail = false;
  private router: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required],
    });
  }

  toggleEmailVisibility() {
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

  onSubmit() {
    if (this.contactForm.valid) {
      this.router.navigate(['/accueil']);
    }
  }
}
