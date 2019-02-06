import { Component, OnInit } from '@angular/core';
import {Assignment} from './employe.module'
import { AssignmentServiceService } from '../shared/assignment-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assingment',
  templateUrl: './assingment.component.html',
  styleUrls: ['./assingment.component.css']
})
export class AssingmentComponent implements OnInit {
    
    enabled:boolean;
    fromDetails:boolean=false;
    buttonName:string="Add new Assignment";
    selectedAssignment:Assignment;
    addAssignment:Assignment;
     assignments:Assignment[];
     assignmentService:AssignmentServiceService;
    router:Router;
  constructor(assignmentService:AssignmentServiceService,router:Router) { 
   this.assignmentService=assignmentService;
    this.router=router;
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
    this.router.navigate(['/update',assignment.name]);
    
    //this.router.navigate(['/update',assignment.name],{queryParams:{},fragment:'edit'});
  }
  onClick(){
    
     // this.fromDetails=true;
      
  }
  addNewAssignment(event:Assignment){
    this.assignmentService.addNewAssignments(event).
    subscribe(msg=>console.log(msg));
    this.fromDetails=false;
  }
}
