import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  inpObj = {
    fname : "",
    lname : "",
    address : "",
    city : "",
    z_code : "" 
  }

  constructor() { }
  
  ngOnInit(): void {
  }

  addResultObj(resobj : any){
    console.log(resobj);
    this.inpObj = {...resobj};
    console.log(this.inpObj);
  }

}
