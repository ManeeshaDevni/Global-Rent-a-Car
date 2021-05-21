import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAllContacts() {
    return this.http.get('http://localhost:8000/api/contactQuarry')
  }

  saveContacts(form){
    const Contact={
      name:form.get('name').value,
      email:form.get('email').value,
      phone_num:form.get('phone_num').value,
      message:form.get('message').value,
      Posting_date:form.get('Posting_date').value,
    }
    return this.http.post<any>('http://localhost:8000/api/Contacts',Contact);
  }
}
