import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appLogo]'
})
export class LogoDirective implements OnInit{

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    const img1: HTMLImageElement = this.elRef.nativeElement;
    img1.onload = (e) => {

    }
    img1.onerror = (e) => {
      img1.src = "assets/favicon.ico";
    }
  }
}
