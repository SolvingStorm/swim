import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommonService {

  isDarkTheme: boolean;
  bSubject = new BehaviorSubject(false); 


  constructor() {  
    this.bSubject.next(true);
  }

  loadAll() {
  }

  setTheme(isDark){
    this.bSubject.next(isDark);
  }

}
