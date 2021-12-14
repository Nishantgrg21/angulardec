import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {


  @Input() parentData: any;


  @Output() parentFunction:EventEmitter<any>= new EventEmitter();


  constructor() {}

  // Send data parent to child component
  ngOnChanges(changes: any) {
    console.log(changes.parentData.currentValue);
  }

 

// Send data child to parent component
  newUserData:any;
  addUser(value: any){
    this.newUserData = value;
    //console.log(this.newUserData);
    this.parentFunction.emit(this.newUserData);
  }

  ngOnInit() {
    //  console.log(this.parentData);
    
  }
  

  
}
