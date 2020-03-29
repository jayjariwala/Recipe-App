import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen : boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('click') mouseClick(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
}
