import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() my: any;
  
  constructor() { 
    console.log("Constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges ", changes);
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy"); 
  }
}
