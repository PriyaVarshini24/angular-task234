import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './app.service';
import data from './data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'task2-new';
  httpdata: any;
  toggle = false;
  searchparam = '';
  tag = '';
  show= true;
  display="initial"
  showfirst(){
    this.show=!this.show;
  }

  constructor(private http: HttpClient, public service: AppService) {}
  getDatafromService() {
    this.service.getuserlink(this.searchparam, this.tag).subscribe((data) => {
      this.displayData(data);
      console.log(data);
    });
  }
  getDatafromService1() {
    this.service.getuserlink1(this.tag).subscribe((data) => {
      this.displayData(data);
      console.log(data);
    });
  }

  displayData(data: any) {
    // this.httpdata = 0;
    // console.log(this.httpdata)

    this.httpdata = data;
    console.log(this.httpdata[0].address);
  }

  get_type(data: any, type: any) {
    console.log('App-' + type);
    this.tag = type;
    // this.getValue(data);
    this.searchparam = data;
    if (data == '') {
      this.getDatafromService1();
    } else {
      this.getDatafromService();
    }
  }
  // ngOnDestroy() {
  //   if ((this.searchparam = '')) {
  //     this.service.getuserlink(this.searchparam, this.tag).subscribe();
  //   } else {
  //     this.service.getuserlink1(this.tag).subscribe();
  //   }
  // }
}
