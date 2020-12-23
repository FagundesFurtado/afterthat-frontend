import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {

    offsetNavbar = 90;
    moveTo(id: string) {
        window.scrollTo({
            top: document.getElementById(id).offsetTop - this.offsetNavbar,
        });
    }
}