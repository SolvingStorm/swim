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
  appel: boolean;
  constructor(private commonService: CommonService){  }

  ngOnInit(): void {
      this.commonService.isDarkTheme = false;  
      
      this.updateTheme();

      this.isDark = this.commonService.isDarkTheme;

      this.commonService.bSubject.subscribe((value) => {
          console.log("Subscription got", value); // Subscription got b, 
                                          // ^ This would not happen 
                                          // for a generic observable 
                                          // or generic subject by default
                                          });
    }

    changeTheme(){
      console.log("change");
      this.commonService.isDarkTheme = !this.commonService.isDarkTheme;
      this.isDark = this.commonService.isDarkTheme;

      this.commonService.setTheme(this.isDark);
      this.updateTheme();
    }

    updateTheme()
    {
      let body = document.getElementsByTagName('body')[0];
      if(this.commonService.isDarkTheme)
      {
        body.classList.remove("body-light");
        body.classList.remove("body-dark");   //remove the class
        body.classList.add("body-dark");   //add the class
      }
      else
      {
        body.classList.remove("body-dark");
        body.classList.remove("body-light");   //remove the class
        body.classList.add("body-light");
      }
    }
}
