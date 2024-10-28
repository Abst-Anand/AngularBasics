import { Component, Input, Output, EventEmitter } from "@angular/core";

declare const genRandomNumbers:any;
declare const getN:any;

@Component({
    selector:'app-prduct',
    // template: `<h2>Product List</h2>
    //             <div *ngIf='showThisDiv'>Product 1</div>
    //             <div> {{rNums}} </div>
    //             <li *ngFor="let dept of departments"> {{ dept }} </li>`,
    templateUrl: './product.component.html',
    // styles:['div { font-weight:bolder; color:darkgreen;}']
    styleUrls : ['./product.component.css']
})

export class ProductComp{
    showThisDiv=true

    rNums = <[]>genRandomNumbers().sort((a:number,b:number)=>a-b).filter((x :number )=> x < 10000);

    n = <number>getN()

    departments = ['Mountain Bicycles', 'Road Bicycles', 'Hybrid Bicycles', 'Bicycles Pumps']

    // for pagination (npm install ngx-pagination)
    page: number = 1;
    itemsToDisplay: number = 10;

    pageChanged(event:any) {
        this.page = event
    }

    @Input() p_title:String = 'NA' ;

    @Output() c_newProductEvent = new EventEmitter<string>();

    addNewProduct(value:string){
        this.c_newProductEvent.emit(value);
    }

}
