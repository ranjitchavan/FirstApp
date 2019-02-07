import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Assignment} from '../employe.module'
import{Router} from '@angular/router'
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
  router:Router;
  assignmentService:AssignmentServiceService;
  @Output() newAssignment=new EventEmitter<Assignment>();
  constructor(assignmentService:AssignmentServiceService,router:Router) {
    this.assignmentService=assignmentService;
    this.router=router;
   }

  ngOnInit() {
  
  }
  onClick(){
    const ass=new Assignment();
    ass.name=this.name;
    ass.dueDate=this.dueDate;
    ass.submitted=this.submitted;
    this.newAssignment.emit(ass);
    this.assignmentService.addNewAssignments(ass).subscribe(e=>this.router.navigate(['/home']));
  }

}