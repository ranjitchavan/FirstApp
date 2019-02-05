import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Assignment,FromD} from '../employe.module'

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styles: []
})
export class AddAssignmentComponent implements OnInit {
  name:string;
  dueDate:Date;
  submitted:boolean;
  fromDetails:FromD;
  hide:boolean=false;
  @Output() assignment=new EventEmitter<Assignment>();
  constructor() { }

  ngOnInit() {
  
  }
  onClick(){
    const ass=new Assignment();
    ass.name=this.name;
    ass.dueDate=this.dueDate;
    ass.submitted=this.submitted;
    this.assignment.emit(ass);
    this.fromDetails=true;
    this.hide=true
  }
}
