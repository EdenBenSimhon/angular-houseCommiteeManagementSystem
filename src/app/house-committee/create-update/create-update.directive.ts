import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector : '[appCreateUpdate]'
})
export class CreateUpdateDirective implements OnInit{
  constructor(private elementRef : ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
