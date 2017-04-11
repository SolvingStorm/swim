import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swimmer-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.css']
})
export class ProfielComponent implements OnInit {
  name: string;
  dob: string;

  constructor() { 

  }

  ngOnInit() {
    this.name = "Swimmer 1";
    this.dob = "24-10-2005";
  }

}
