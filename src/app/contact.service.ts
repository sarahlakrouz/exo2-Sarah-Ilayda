import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private lastContact: { name: string; email: string; message: string } | null = null;

  public setContact(contact: { name: string; email: string; message: string }) {
    this.lastContact = contact;
  }

  public getContact() {
    return this.lastContact;
  }
}
