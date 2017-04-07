import { Component } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent  {

  constructor(private router: Router){}

  members: Member[] = [
    new Member("Anthony J","https://secure.meetupstatic.com/photos/member/1/b/2/8/member_240006952.jpeg","Lacey,WA","March 9,2017"),
    new Member("Breezy M","https://secure.meetupstatic.com/photos/member/c/d/7/6/member_265132598.jpeg","Seattle,WA","November 4,2015"),
    new Member("Brena B","https://secure.meetupstatic.com/photos/member/f/1/7/member_264783863.jpeg","Portland,WA","January 9,2012"),
    new Member("Christina S","https://secure.meetupstatic.com/photos/member/5/9/6/2/member_234922882.jpeg","Olympia,WA","March 9,2017"),
    new Member("Derk","https://secure.meetupstatic.com/photos/member/d/d/5/0/member_3176656.jpeg","Tacoma,WA","February 24,2017"),
    new Member("Donnie","https://secure.meetupstatic.com/photos/member/9/4/1/8/member_201517912.jpeg","Lacey,WA","July 2,2016")

  ]

  goToDetailPage(clickedMember: Member) {
     this.router.navigate(['member', clickedMember.name]);
    //  console.log(clickedMember.name);
   };

}
