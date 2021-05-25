import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.css']
})
export class ContactsViewComponent implements OnInit {
contacts:any;

myimage:string = "../../assets/cback.jpg";

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
   
  }



insertContacts(){
  console.log('Hello');
}


}
