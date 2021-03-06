import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]

})
export class MemberDetailComponent implements OnInit {
  memberId: number;
  memberToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = parseInt(urlParameters['id']);
    });

    this.memberService.getMemberById(this.memberId).subscribe(dataLastEmittedFromObserver => {
     this.memberToDisplay = new Member(dataLastEmittedFromObserver.name,
                                        dataLastEmittedFromObserver.image,
                                        dataLastEmittedFromObserver.location,
                                        dataLastEmittedFromObserver.dateJoined);

     console.log(this.memberToDisplay);
   })
    // this.memberToDisplay = this.memberService.getMemberById(this.memberId);
    // console.log(this.memberService.getMemberById(this.memberId).name)
  }
}
