import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import * as moment from 'moment';

@Component({
  selector: 'app-application-listing',
  templateUrl: './application-listing.component.html',
  styleUrls: ['./application-listing.component.scss']
})
export class ApplicationListingComponent implements OnInit {

  public applicationList: any[] = [];
  public barChartLabel: any[] = [];
public barChartData = [
    { data: [] as any,
      min: 0,
      backgroundColor: '#4472c4',
      pointHoverRadius: 5,
      hoverBackgroundColor: '#4472c4'},
  ];

  constructor( private service: ApplicationService) { }

  ngOnInit(): void {
    this.getApplicationList();
  }

  getApplicationList(){
    this.service.getApplicationList().subscribe(res=>{
      console.log("res", res);
      if(res && res.data){
        this.applicationList = res.data;
        this.applicationList.forEach(app=>{
          this.barChartLabel.push(app.application_name);
          if(app.outage_end_time){
            const diff = this.getTimeDiffrence(app.outage_end_time, app.outage_start_time);
            this.barChartData[0].data.push(diff)
          }
        })
        // this.barChartLabel = this.applicationList.map(app=> app.application_name);
      }
    }, err=>{
      console.log("error", err);
    })
  }

  getTimeDiffrence(endTime: any, startTime: any){
    var start = moment(startTime); //todays date
    var end = moment(endTime); // another date
    var duration = moment.duration(end.diff(start));
    return duration.asHours() >=0 ? duration.asHours() : 0;
  }

  generateRandomUserName () {
    return 'BOT' + Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  };

  changeOutageStatus(data: any){
    const reqBody = {
      "date": new Date().toISOString(),
      "request_id": data._id,
      "status": data.status,
      "recieved_from": this.generateRandomUserName()
     }

     this.service.updateOutageStatus(reqBody).subscribe(res=>{
       console.log("updated successfully");
       this.getApplicationList();

     }, err=>{
       console.log("error", err);
     })
  }

  formatDate(v: any){
    return v ? moment(v).format('hh:mm:ss') : '--';
  }

  filterGraph($event: any){

    this.barChartData[0].data = [];
    this.barChartLabel =[];
    console.log("jdkjsdkdjsfklj", $event);


    this.applicationList.forEach(app=>{
      if(app.application_name == $event){
        this.barChartLabel.push(app.application_name);
        if(app.outage_end_time){
          const diff = this.getTimeDiffrence(app.outage_end_time, app.outage_start_time);
          this.barChartData[0].data.push(diff)
        }
      }
    })

    // this.barChartLabels  = this.allLabel.filter(app=> app == $event.target.value);

  }
  

}
