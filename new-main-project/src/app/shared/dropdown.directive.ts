import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    // constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggelOpen() {
        this.isOpen = !this.isOpen;
        // if (this.isOpen) {
        //     this.renderer.addClass(this.elRef.nativeElement, 'open');
        // }
        // else {
        //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
        // }
    }

}