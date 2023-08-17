import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]'
})
export class CustomAttributeDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = "red"
  }

}
