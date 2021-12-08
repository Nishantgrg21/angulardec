import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() parentData: any;

  constructor() {}

  ngOnInit() {
    //  console.log(this.parentData);
  }

  ngOnChanges(changes: any) {
    console.log(changes.parentData.currentValue);
  }
}
