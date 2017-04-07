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



  goToDetailPage(clickedMember: Member) {
     this.router.navigate(['member', clickedMember.name]);
    //  console.log(clickedMember.name);
   };

}
