import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../employe.module';
import { AssignmentServiceService } from 'src/app/shared/assignment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  passassignment:Assignment;
  activeRoute:ActivatedRoute;
  router:Router;
  assignmentService:AssignmentServiceService;
  constructor(assignmentService:AssignmentServiceService,activeRoute:ActivatedRoute,router:Router) {
    this.assignmentService=assignmentService;
    this.activeRoute=activeRoute;
    this.router=router;
   }
  

  ngOnInit() {
    this.getAssignmentElement();
    console.log(this.passassignment.name);
  }
  changeSubmitted(event:Assignment){
    this.passassignment.submitted=true;
    this.assignmentService.updateAssignments(this.passassignment).subscribe(e=>console.log(e));
   
    this.router.navigate(['/home']);

  }
  deleteItem(event:Assignment){
      this.assignmentService.deleteAssignmentService(this.passassignment).subscribe(e=>console.log(e));
      this.router.navigate(['/home']);
  }
  getAssignmentElement(){
    const name=this.activeRoute.snapshot.params.name;
    console.log(name);
    this.assignmentService.getAssignementByName(name).subscribe(ass=>this.passassignment=ass);

  }
  onClickEdit(){
    console.log(this.passassignment.submitted);
    this.assignmentService.updateAssignments(this.passassignment).subscribe(ass=>console.log('edit update',
    'Edit'));
  }
}
