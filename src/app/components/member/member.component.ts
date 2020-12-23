import { Component, Input } from '@angular/core';
import { Member } from '../../core/models/member'

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent {

  @Input() member: Member

}
