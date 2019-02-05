import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../employe.module';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  @Input()
  passassignment:Assignment;

  constructor() { }
  
  ngOnInit() {
  }
  changeSubmitted(){
    this.passassignment.submitted=false;


  }
}
