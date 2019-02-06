import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../employe.module';
import { AssignmentServiceService } from 'src/app/shared/assignment-service.service';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  @Input()
  passassignment:Assignment;
  assignmentService:AssignmentServiceService;
  constructor(assignmentService:AssignmentServiceService) {
    this.assignmentService=assignmentService;
   }
  

  ngOnInit() {
  }
  changeSubmitted(event:Assignment){
    this.passassignment.submitted=true;
    this.assignmentService.updateAssignments(this.passassignment).subscribe(e=>console.log(e));
    this.passassignment=null;

  }
  deleteItem(event:Assignment){
      this.assignmentService.deleteAssignmentService(this.passassignment).subscribe(e=>console.log(e));
      this.passassignment=null;
  }
}
