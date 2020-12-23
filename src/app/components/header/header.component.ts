import { Component, AfterViewInit, HostListener } from '@angular/core';
import { of } from 'rxjs';
import { ScrollService } from 'src/app/core/services/scroll.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  public currentActive = 1;
  topics = []
  listOfTopicis = ["home", "video", "band", "news"]

  constructor(private scrollService: ScrollService) { }

  scrollTo(id: string): void {
    this.scrollService.moveTo(id)
  }

  ngAfterViewInit(): void {
    this.calcOffset();
  }

  private calcOffset(): void {
    this.topics = [0]
    this.listOfTopicis.forEach((item) =>{
      const offset = document.getElementById(item)?.offsetTop
      if(offset){
        this.topics.push(offset)
      }
    })
    this.topics.push(Infinity)
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    this.calcOffset();
    let newTopics = 0;
    for(let i=0; i< this.topics.length -1; i++){
      if(this.verifyScroll(this.topics[i], this.topics[i+1])){
        newTopics = i+1
        i = this.topics.length
      }
    }
    this.currentActive = newTopics
  }

  private verifyScroll(before: number, after: number): boolean {
    const actual = Number(window.pageYOffset) + 90;
    const beforeActual = before -10
    return beforeActual <= actual && actual < after;
  }
}
