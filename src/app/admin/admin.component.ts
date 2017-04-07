import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, image: string, location: string, dateJoined: string) {
    var newMember: Member = new Member(name, image, location, dateJoined);
    console.log(newMember);
  }

}
