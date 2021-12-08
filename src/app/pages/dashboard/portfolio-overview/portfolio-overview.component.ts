import { Component, OnInit } from '@angular/core';
import portfolioData from '../portfolio-overview/portfolio-data.json';
import portfolioNewData from '../portfolio-overview/portfolio-newdata.json';
import { Dropdown } from '../portfolio-overview/dropdownList';
import { DROPDOWNLIST } from '../portfolio-overview/dropdownListValues';

@Component({
  selector: 'app-portfolio-overview',
  templateUrl: './portfolio-overview.component.html',
  styleUrls: ['./portfolio-overview.component.css']
})
export class PortfolioOverviewComponent implements OnInit {


  public PortfolioData1:{image:string,title:string,amount:string, percent:string}[] = portfolioData;
  public PortfolioData2:{image:string,title:string,amount:string, percent:string}[] = portfolioNewData;

   dropdownList1: any =[
     "Bucket 1", "Bucket 2" ,"Bucket 3","Bucket 4"
   ]

  public events: string[] = [];

  public dropdownList2: Array<string>=[
     "January'21", "Febuary' 21" ,"March' 21 ","April' 21"
   ];


   ClickedRow:any;  
 
   constructor() { 
    
   }

   dropdownContent:  any;
   dropdownContent1:any;
  ngOnInit(): void {
    this.dropdownContent1 = true;
    this.dropdownContent = true;
  }

 
  SelectedValue1:any ="Bucket 3";
  onChange1(item1:any){
    this.SelectedValue1 = item1;
  console.log(this.SelectedValue1);

  }

  SelectedValue:any ="March' 21";
  onChange(item:any){
    this.SelectedValue = item;
  console.log(this.SelectedValue);

  }


  accountToAmount:any ="By Account";
  public isShow1 :boolean= true;
  public isShow2 :boolean= false;

  toggleDisplay1() {
    this.isShow1 = true;
    this.isShow2 = false;
  }

  toggleDisplay2() {
    this.isShow2 = true;
    this.isShow1 =false;
  }
  allClassChanges1 = {
    tog1:true,
   
  }
  allClassChanges2={
    tog2:false,
    amount:true
  }
  allSizeChanges ={
    faSize2:false
    
  }
  inrChanges={
    inrSize:false,
  }
 
  
  

}


