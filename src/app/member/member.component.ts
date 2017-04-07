import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})

export class MemberComponent implements OnInit{
  members: FirebaseListObservable<any[]>;

  constructor(private router: Router,  private memberService: MemberService){}


   ngOnInit(){
     this.members = this.memberService.getMembers();

  }

  goToDetailPage(clickedMember: Member) {
     this.router.navigate(['member', clickedMember.id]);
    //  console.log(clickedMember.name);
   };

}
