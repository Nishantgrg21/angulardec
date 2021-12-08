import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolution-rate',
  templateUrl: './resolution-rate.component.html',
  styleUrls: ['./resolution-rate.component.css']
})



  

export class ResolutionRateComponent implements OnInit {
  ResolutionData = [
    {
      "state": "<25K",
      "value" : 42
    },
    {
      "state": "25-50K",
      "value" : 53
    },
    {
      "state": "50-75K",
      "value" : 38
    },
    {
      "state": "75-100K",
      "value" : 76
    },
    {
      "state": ">100K",
      "value" : 26
    }
   ]
   ResolutionNewData = [
    {
      "state": "<25K",
      "value" : 48
    },
    {
      "state": "25-50K",
      "value" : 62
    },
    {
      "state": "50-75K",
      "value" : 30
    },
    {
      "state": "75-100K",
      "value" : 60
    },
    {
      "state": ">100K",
      "value" : 20
    }
   ]
 

  constructor() { }

  ngOnInit(): void {
  }

}
