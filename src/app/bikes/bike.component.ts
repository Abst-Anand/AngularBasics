import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface JSP{
    userId:string;
    id:string;
    title:string;
    completed:boolean;
}

@Component({
    selector:'app-bike',
    template:`<div id="cont" *ngFor="let todo of todos">
                <div>User ID: {{ todo.userId }}</div>
                <div>ID: {{ todo.id }}</div>
                <div>Title: {{ todo.title }}</div>
                <div>Completed: {{ todo.completed }}</div>
                <br>
    </div>`,

    styles:['#cont{ color:red;}']
})

export class BikeComponent implements OnInit{

    todos: JSP[] = []
   
    constructor(private http:HttpClient){}

    ngOnInit(): void {
        this.http.get<JSP[]>("https://jsonplaceholder.typicode.com/todos")
        .subscribe(result => this.todos = result)
    }


}