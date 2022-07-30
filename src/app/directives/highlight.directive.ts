import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMoiseEnter (){
    this._elementRef.nativeElement.style.backgroundColor = '#f0f0f0';
  }
  @HostListener('mouseleave') onMoiseLeave (){
    this._elementRef.nativeElement.style.backgroundColor = 'traparent';
  }
  constructor(
    private _elementRef: ElementRef
  ) {

  }

}
