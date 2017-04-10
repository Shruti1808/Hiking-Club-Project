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
  return this.angularFire.database.object('members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                image:localUpdatedMember.image,
                                location: localUpdatedMember.location,
                                dateJoined: localUpdatedMember.dateJoined});
  }

  deleteMember(localMemberToDelete){
   var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
   memberEntryInFirebase.remove();
 }
}
