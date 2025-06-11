import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]'//<- Here the [] denoting it is an attribute directive, otherwise it will become an element directive.
})
export class CustomAttributeDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = "red"
  }

}
