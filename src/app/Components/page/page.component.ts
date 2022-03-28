import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  inpObj = {
    fname : "",
    lname : "",
    address : "",
    city : "",
    z_code : "" 
  }
  inpObj1="";
  constructor() { }
  addResultObj(resobj : any){
    console.log(resobj);
    this.inpObj = {...resobj};
    console.log(this.inpObj);
  }
  ngOnInit(): void {
  }

}
