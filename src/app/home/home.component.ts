import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  // template:`<h2>test</h2>`,
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css'],
  styles:[
    'p{color:red; font-size:larger;}',
    'p{border:4px solid black; padding:15px;}',
    ':host{backgorund:grey;}'
  ]
})
export class HomeComponent {

}
