import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-programmas',
  templateUrl: './programmas.component.html',
  styleUrls: ['./programmas.component.css'],
  providers: [CommonService]
})
export class ProgrammasComponent implements OnInit {
  isDark: boolean;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.isDark = this.commonService.isDarkTheme;
  }

}
