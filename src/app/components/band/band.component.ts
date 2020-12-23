import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/core/models/member';
import { ScrollService } from 'src/app/core/services/scroll.service'

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent {
  
  constructor(private scrollService:ScrollService){}

  @Input() members: Member[]

  moveTo(id: string) {
    this.scrollService.moveTo(id)
  }

}
