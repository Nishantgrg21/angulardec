import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private ApiServiceData: ApiService) {}
  users: any;
  data:any;
  PatentValuesFetch: any = {};


  // data fetch from child to parent 

  DataFectfromChild:any={};
  getFromChild(childdata: any){
    this.DataFectfromChild= childdata;
  console.log(childdata);
  }


  ngOnInit() {

    // get all table data 
    this.ApiServiceData.getRequest().subscribe((res: any) => {
      this.users = res.data;
      // console.log(res);
    });


// add new data on table 

const body:any = {
  first_name : this.DataFectfromChild.first_name,
  last_name : this.DataFectfromChild.last_name,
  email : this.DataFectfromChild.email,
}

    this.ApiServiceData.postRequest(body).subscribe((res:any)=>{
      // res = this.DataFectfromChild;
      console.log(res);
      //console.log(this.DataFectfromChild);
     // console.log("helllllo");
    })


    
  }

  onChangeValue(userprofile: any) {
    this.PatentValuesFetch = userprofile;
    console.log(userprofile);

  }



 
}
