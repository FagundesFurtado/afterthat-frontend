import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  public currentActive = 1;
  public homeOffset: number = null;
  public showsOffset: number = null;
  public videoOffset: number = null;
  public bandOffset: number = null;
  public newsOffset: number = null;

  offsetNavbar = 90;

  scrollTo(id: string): void {
    window.scrollTo({
      top: document.getElementById(id).offsetTop - this.offsetNavbar,
    });
  }

  ngAfterViewInit(): void {
    this.calcOffset();
  }

  private calcOffset(): void {
    this.homeOffset = document.getElementById('home').offsetTop;
    this.videoOffset = document.getElementById('video').offsetTop;
    this.bandOffset = document.getElementById('band').offsetTop;
    this.newsOffset = document.getElementById('news').offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    this.calcOffset();
    if (this.verifyScroll(this.homeOffset, this.videoOffset)) {
      this.currentActive = 1;
    } else if (this.verifyScroll(this.videoOffset, this.bandOffset)) {
      this.currentActive = 2;
    } else if (this.verifyScroll(this.bandOffset, this.newsOffset)) {
      this.currentActive = 3;
    } else if (this.verifyScroll(this.newsOffset, Number.MAX_SAFE_INTEGER)) {
      this.currentActive = 4;
    }
  }

  private verifyScroll(before: number, after: number): boolean {
    const atual = Number(window.pageYOffset) + 90;
    return before <= atual && atual < after;
  }
}
