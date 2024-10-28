import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basics';

  p_addProduct(newProduct:string){
    console.log('New Product Added: ' + newProduct);
  }
}
