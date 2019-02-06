import { Component, OnInit } from '@angular/core';
import {Assignment} from './employe.module'
import { AssignmentServiceService } from '../shared/assignment-service.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-assingment',
  templateUrl: './assingment.component.html',
  styleUrls: ['./assingment.component.css']
})
export class AssingmentComponent implements OnInit {
    assTitle='Assignment Work !!';
    enabled:boolean;
    fromDetails:boolean=false;
    buttonName:string="Add new Assignment";
    selectedAssignment:Assignment;
    addAssignment:Assignment;
     assignments:Assignment[];
     assignmentService:AssignmentServiceService;
  
  constructor(assignmentService:AssignmentServiceService) { 
   this.assignmentService=assignmentService;
  }

  ngOnInit() {
    this.getAssignmentsFromService();
    setTimeout(()=>{
        this.enabled=true;
    },2000);
  }
    getAssignmentsFromService(){

     this.assignmentService.getAssignments().
     subscribe(assignments=>this.assignments=assignments);
    
    }
     public get value() : string {
       return 
     }
            

  onSelectedItem(assignment:Assignment){
    this.selectedAssignment=assignment;
    console.log(assignment.dueDate)

  }
  onClick(){
    
      this.fromDetails=true;
      
  }
  addNewAssignment(event:Assignment){
    this.assignmentService.addNewAssignments(event).
    subscribe(msg=>console.log(msg));
    this.fromDetails=false;
  }
}
