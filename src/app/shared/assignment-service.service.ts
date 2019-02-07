import { Injectable } from '@angular/core';
import {Assignment} from 'src/app/assingment/employe.module'
import { Observable,of} from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import {map,tap,catchError} from 'rxjs/internal/operators'

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
  http:HttpClient;
  loggingService:LoggingService;
    constructor(loggingService:LoggingService,http:HttpClient) {
      this.http=http;
      this.loggingService=loggingService;
   }
   
    getAssignments():Observable<Assignment[]>{
    this.loggingService.log('get assignment service','GET-ASS');
    
    return this.http.get<Assignment[]>('http://localhost:8080/all');
    
  }

    addNewAssignments(event:Assignment):Observable<any>{
        // this.assignments1.push(event);
        // this.loggingService.log('Add assignment service','ADD-ASS');
        // return of('Assignment Added Successfully !');

        return this.http.post<Assignment>('http://localhost:8080/add',event);


    }
    updateAssignments(event:Assignment):Observable<any>{

      // this.assignments1.forEach((assignment,i)=>{
      //       if(assignment===event)
      //         this.assignments1[i]=event;

      // });
      // this.loggingService.log('Update assignment service','UPDATE-ASS');
      // return of('Updated item successfully')
      return this.http.put<Assignment>('http://localhost:8080/editAssignment',event);
    }

    deleteAssignmentService(event:Assignment):Observable<any>{
        // this.assignments1.forEach((assignment,i)=>{
        //     if(assignment===event)
        //       this.assignments1.splice(i,1);

        // });
        // this.loggingService.log('delete assignment service','DELETE-ASS');
          
          return this.http.delete('http://localhost:8080/delete'+'/'+event.name);
    }


    getAssignementByName(name:string):Observable<Assignment>{

      return  this.http.get<Assignment>('http://localhost:8080/assignement'+'/'+name)
              .pipe(map(ass=>ass.name));
        
    }

}
