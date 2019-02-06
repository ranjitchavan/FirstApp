import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Assignment} from '../employe.module'

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styles: []
})

export class AddAssignmentComponent implements OnInit {
  name:string;
  dueDate:Date;
  submitted:boolean;
  @Output() newAssignment=new EventEmitter<Assignment>();
  constructor() { }

  ngOnInit() {
  
  }
  onClick(){
    const ass=new Assignment();
    ass.name=this.name;
    ass.dueDate=this.dueDate;
    ass.submitted=this.submitted;
    this.newAssignment.emit(ass);
  }
 
}
