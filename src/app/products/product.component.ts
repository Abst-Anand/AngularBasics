import { Component } from "@angular/core";

@Component({
    selector:'app-prduct',
    template: `<h2>Product List</h2>
                <div *ngIf='showThisDiv'>Product 1</div>`,
    styles:['div { font-weight:bolder; color:darkgreen;}']
})

export class ProductComp{
    showThisDiv=true
}
