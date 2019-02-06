import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Assignment} from '../employe.module'
import { AssignmentServiceService } from 'src/app/shared/assignment-service.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styles: []
})

export class AddAssignmentComponent implements OnInit {
  name:string;
  dueDate:Date;
  submitted:boolean;
  assignmentService:AssignmentServiceService;
  @Output() newAssignment=new EventEmitter<Assignment>();
  constructor(assignmentService:AssignmentServiceService) {
    this.assignmentService=assignmentService;
   }

  ngOnInit() {
  
  }
  onClick(){
    const ass=new Assignment();
    ass.name=this.name;
    ass.dueDate=this.dueDate;
    ass.submitted=this.submitted;
    this.newAssignment.emit(ass);
    this.assignmentService.addNewAssignments(ass).subscribe(E=>console.log(E));
  }

}