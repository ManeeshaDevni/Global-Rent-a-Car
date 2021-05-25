import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getAllContacts() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get("http://127.0.0.1:8000/api/contacts");
  }

  insertData(data){
    return this.httpClient.post("http://127.0.0.1:8000/api/addContact", data);
  }
  
}
