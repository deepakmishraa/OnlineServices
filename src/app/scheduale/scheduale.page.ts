import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-scheduale',
  templateUrl: './scheduale.page.html',
  styleUrls: ['./scheduale.page.scss'],
})
export class SchedualePage implements OnInit {
  rows:any;
  constructor(private http: HttpClient,private router: Router) { }
  url ="http://localhost:8000/scheduleonline/";
  ngOnInit() {
  }
  onSubmit(data){
    console.log(data);

    
    // if(data.firstname=="" || data.lastname=="" || data.address=="" ||data.city=="" || data.state=="" || data.postal=="" || data.phone=="" || data.email=="" || data.requesttype=="" || data.problem=="" || data.date=="" || data.time=="" || data.atdate=="" || data.attime=="" ){
    //   alert("please enter an detail");
    // }else{
    // this.http.post<any>(this.url,data)
    // .subscribe(
    //        Response =>console.log(Response),
    //        error=>console.error(error),
    //     )  
    // }    
  }


}
