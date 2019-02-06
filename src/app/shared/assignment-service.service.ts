import { Injectable } from '@angular/core';
import {Assignment} from 'src/app/assingment/employe.module'
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentServiceService {
  assignments1:Assignment[]=[
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
  loggingService:LoggingService;
  constructor(loggingService:LoggingService) {
      this.loggingService=loggingService;
   }

    getAssignments():Observable<Assignment[]>{
      this.loggingService.log('get assignment service','GET-ASS');
    return of(this.assignments1);
    
  }

    addNewAssignments(event:Assignment):Observable<String>{
        this.assignments1.push(event);
        this.loggingService.log('Add assignment service','ADD-ASS');
        return of('Assignment Added Successfully !');

    }
    updateAssignments(event:Assignment):Observable<String>{

      this.assignments1.forEach((assignment,i)=>{
            if(assignment===event)
              this.assignments1[i]=event;

      });
      this.loggingService.log('Update assignment service','UPDATE-ASS');
      return of('Updated item successfully')
    }

    deleteAssignmentService(event:Assignment):Observable<String>{
        this.assignments1.forEach((assignment,i)=>{
            if(assignment===event)
              this.assignments1.splice(i,1);

        });
        this.loggingService.log('delete assignment service','DELETE-ASS');
          return of('assignment deleted successfully')
    }

}
