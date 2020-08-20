import { MemberComponent } from './components/member/member.component';
import { BandComponent } from './components/band/band.component';
import { VideosComponent } from './components/videos/videos.component';
import { LogoComponent } from './components/logo/logo.component';
import { BrowserModule } from '@angular/platform-browser';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotosComponent } from './components/photos/photos.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    VideosComponent,
    BandComponent,
    MemberComponent,
    SocialMediaComponent,
    HeaderComponent,
    PhotosComponent,
    NewsletterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
