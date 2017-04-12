import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-programmas',
  templateUrl: './programmas.component.html',
  styleUrls: ['./programmas.component.css'],
  providers: [CommonService]
})
export class ProgrammasComponent implements OnInit {
  times: string[]; 
  errorMessage: string;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    //debugger;
    //this.commonService.getTimes(1); 

    this.commonService.getTimes(1)
                   .subscribe(
                     times => this.times = times,
                     error =>  this.errorMessage = <any>error);
  }

}
