import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  public currentActive = 1;
  public homeOffset: Number = null;
  public showsOffset: Number = null;
  public videoOffset: Number = null;
  public bandOffset: Number = null;

  scrollTo(id: string) {
    console.log(id);
    document.getElementById(id).scrollIntoView();
  }

  ngAfterViewInit() {
    this.calcOffset();
  }

  private calcOffset() {
    this.homeOffset = document.getElementById('home').offsetTop;
    this.videoOffset = document.getElementById('video').offsetTop;
    this.bandOffset = document.getElementById('band').offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    this.calcOffset();
    if (
      window.pageYOffset >= this.homeOffset &&
      window.pageYOffset < this.videoOffset
    ) {
      this.currentActive = 1;
    } else if (
      window.pageYOffset >= this.videoOffset &&
      window.pageYOffset < this.bandOffset
    ) {
      this.currentActive = 2;
    } else if (window.pageYOffset >= this.bandOffset) {
      this.currentActive = 3;
    }
  }
}
