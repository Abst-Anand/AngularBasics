import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  // template:`<h2>test</h2>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles:[
    'p{color:red; font-size:larger;}',
    'p{border:4px solid black; padding:15px;}',
    ':host{backgorund:grey;}'
  ]
})
export class HomeComponent implements OnInit{

  customerName:string;
  email:string;
  password:string;

  data$: Observable<any>

  constructor(private http:HttpClient){
    this.customerName = ''
    this.email = ''
    this.password = ''


    this.data$ = http.get("http://localhost:9999/customers")
    .pipe(
      tap(console.log),
      shareReplay()
    )
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    // this.http.post("http://localhost:9999/customers", form.value).subscribe()
  }

  ngOnInit():void{

    this.data$.subscribe()
    this.data$.subscribe()
    this.data$.subscribe()

  }

  deleteDocument(){
    this.http.delete("http://localhost:9999/customers/7f74").subscribe()
  }




}
