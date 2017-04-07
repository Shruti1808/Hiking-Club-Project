import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  selectedMember;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, image: string, location: string, dateJoined: string) {
    var newMember: Member = new Member(name, image, location, dateJoined);
    this.memberService.addMember(newMember);
    console.log(newMember);
  }

  

}
