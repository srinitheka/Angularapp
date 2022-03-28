import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor() { }
  @Input('dataObj') resobj:any;

  ngOnInit(): void {
    this.resobj={
      fname:"",
      lname:"",
      number:"",
      email:""
    }
  }

}
