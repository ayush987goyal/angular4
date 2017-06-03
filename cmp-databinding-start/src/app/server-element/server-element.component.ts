import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
@Input('srvElement') element: {type: string, name: string, content: string};
@Input('') name: string;
@ViewChild('heading') header: ElementRef;
@ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("constructor called!");
   }

   ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called!");
    console.log(changes);
   }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit called!");
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
    
  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("ngAfterContentChecked called!");    
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit called!");   
    console.log('Text content: ' + this.header.nativeElement.textContent);
     
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked called!");    
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy called!")
  }
}
