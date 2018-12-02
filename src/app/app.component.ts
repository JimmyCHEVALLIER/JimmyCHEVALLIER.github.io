import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

declare const $: any;

const fadeInTimeMS = 3000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const appRootRef = this.elementRef;
    appRootRef.nativeElement.previousElementSibling.style['opacity'] = 1;
    setTimeout(function() {
      document.getElementById('boot-container').style.opacity = '0';
    }, fadeInTimeMS);
    setTimeout(function() {
      document.getElementById('boot-container').style.display = 'none';
    }, fadeInTimeMS + 500);
  }
}
