import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  providers: [MemberService]
})

export class MemberComponent implements OnInit{

  constructor(private router: Router,  private memberService: MemberService){}

   members: Member[];

   ngOnInit(){
     this.members = this.memberService.getMembers();

  }

  goToDetailPage(clickedMember: Member) {
     this.router.navigate(['member', clickedMember.name]);
    //  console.log(clickedMember.name);
   };

}
