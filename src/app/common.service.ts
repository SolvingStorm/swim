import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

  constructor (private http: Http) {}

  private extractData(res: Response) {
    //debugger;
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    //debugger;
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getTimes(swimmerId): Observable<string[]> //Get the times by swimmerId, return them in a string array
  {
    //debugger;
    var apiTestUrl = "http://swim.kwileth.com/API/test.php";
    //$http.get(apiPage)
    //.success(function(response) {$scope.groceries = response;});

    return this.http.get(apiTestUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    //return [];
  }

  addTime(addTimeObject : commonModule.timeObject): commonModule.returnCodes //time
  {
    return commonModule.returnCodes.Error;
  }

  deleteTime(deleteTimeObject: commonModule.timeObject): commonModule.returnCodes
  {
    return commonModule.returnCodes.Error
  }
}

module commonModule
{
    export enum returnCodes //Code returned by a function with no data result
    {
        noResult,
        ready,
        Error
    }

    export interface timeObject {
      swimmerId: number;
      id?: number;
      dateTime?: string;
    }
}
