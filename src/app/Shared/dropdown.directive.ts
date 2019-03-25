import { Directive, Renderer2, ElementRef, OnInit, HostBinding, DoCheck } from '@angular/core';

import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit, DoCheck {

  constructor(public elRef: ElementRef, public myRenderer: Renderer2, public myRDC: RecipeDetailComponent) { }

   @HostBinding('class.show') isOpen = false;

  ngDoCheck() {
    if (this.myRDC.isShow) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }

  }
  ngOnInit() {

  }


}
