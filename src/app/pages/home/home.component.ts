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

  PatentValuesFetch: any = {};
  ngOnInit() {
    this.ApiServiceData.getRequest().subscribe((res: any) => {
      this.users = res.data;
      // console.log(res);
    });
    
  }


  onChangeValue(userprofile: any) {
    this.PatentValuesFetch = userprofile;
    console.log(userprofile);
  }

}
