import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import {  FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  contacts:any;
  contact = new Contact();
 
  constructor(private contactService:ContactService){}

  ngOnInit(): void{
    this.getContactsData();
  }
  
  

  insertData(){
      this.contactService.insertData(this.contact).subscribe(res =>{
        console.log(res);
        //this.getContactsData();
      })
    }
  getContactsData() {
    this.contactService.getData().subscribe(res => {
      this.contacts = res;
    })
  }
  }
