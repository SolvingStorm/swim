import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programmas',
  templateUrl: './programmas.component.html',
  styleUrls: ['./programmas.component.css'],
  providers: [CommonService]
})
export class ProgrammasComponent implements OnInit {
  times: string[]; 
  errorMessage: string;
  programId: number;
  hasProgramId: number; //-1 = nothing, 0 = overview, >0 = history

  constructor(private commonService: CommonService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.programId = +this.route.snapshot.params['id'];// + converts string to number
    this.hasProgramId = this.programId != null && !isNaN(this.programId) ? this.programId : 0;

    if(!this.hasProgramId)
    {
      this.commonService.getTimes(1)
                   .subscribe(
                     times => this.times = times,
                     error =>  this.errorMessage = <any>error);
    }
  }
}
