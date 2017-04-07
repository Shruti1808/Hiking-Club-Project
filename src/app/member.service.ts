import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { MEMBERS } from './mock-members';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }


  getMembers(){
    return this.members;
  }


  getMemberById(memberId: number){
    for (var i = 0; i <= MEMBERS.length - 1; i++) {
      if (MEMBERS[i].id === memberId) {
        return MEMBERS[i];
      }
    }
  }
}
