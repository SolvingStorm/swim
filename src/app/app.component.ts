import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonService]
})
export class AppComponent {
  title = 'De app werkt 2';  
  isDark: boolean;
  appel: string;
  constructor(private commonService: CommonService){  
    
  }

  ngOnInit(): void {
    this.appel = "resources/knzb.jpg";  
  }
}
