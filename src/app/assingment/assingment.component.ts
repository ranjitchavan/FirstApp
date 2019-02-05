import { Component, OnInit } from '@angular/core';
import {Assignment,FromD} from './employe.module'
@Component({
  selector: 'app-assingment',
  templateUrl: './assingment.component.html',
  styleUrls: ['./assingment.component.css']
})
export class AssingmentComponent implements OnInit {
    assTitle='Assignment Work !!';
    enabled:boolean;
    fromDetails:FromD=true;
    buttonName:string="Add new Assignment";
    selectedAssignment:Assignment;
    addAssignment:Assignment;
    assignments:Assignment[]=[
    {
      name:'Ranjit',
      dueDate:new Date('2019-01-01'),
      submitted:true

    },
    {
       name:'Jack',
       dueDate:new Date('2019-01-01'),
       submitted:false 
    } 
  ];

  constructor() { }

  ngOnInit() {

    setTimeout(()=>{

      this.enabled=true;
    },2000);
  }


  onSelectedItem(assignment:Assignment){
    this.selectedAssignment=assignment;
    console.log(assignment.dueDate)

  }
  onClick(){

      this.fromDetails=false;
      
  }
  addNewAssignment(event:Assignment){
    this.assignments.push(event);
  }
}
