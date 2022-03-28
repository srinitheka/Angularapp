import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  inpObj={
    fname:"",
    lname:"",
    number:"",
    email:""
  }
  constructor() { }

  ngOnInit(): void {
  }
  @Output() resObj = new EventEmitter<any>();
  showResult(){
    this.resObj.emit(this.inpObj);
  }

}
