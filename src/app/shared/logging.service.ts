import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { 


  }

  log(msg,action){
    console.log('msg :',msg,' Action:',action);
  }
}
