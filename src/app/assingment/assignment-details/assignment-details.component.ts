import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../employe.module';
import { AssignmentServiceService } from 'src/app/shared/assignment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getElementDepthCount } from '@angular/core/src/render3/state';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  
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
  }
  changeSubmitted(event:Assignment){
    this.passassignment.submitted=true;
    this.assignmentService.updateAssignments(this.passassignment).subscribe(e=>console.log(e));
    this.passassignment=null;

  }
  deleteItem(event:Assignment){
      this.assignmentService.deleteAssignmentService(this.passassignment).subscribe(e=>this.router.navigate(['\home']));
      this.passassignment=null;

  }
  getAssignmentElement(){
    const name=this.activeRoute.snapshot.params.name;

    this.assignmentService.getAssignementByName(name).subscribe(ass=>this.passassignment=ass);

  }
  selectItem(event:Assignment){
    console.log(this.passassignment.name);
    this.router.navigate(['/updateass',this.passassignment.name],{queryParams:{}});  
  }
}
