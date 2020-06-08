import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'product',
    template: `
        <div class="product">
            <h1>Product Details for Product: {{ productId }}</h1>
            <router-outlet></router-outlet>
            <p><a [routerLink]="['./seller', 1592]">Seller Info</a></p>
        </div>
    `,
    styles: ['.product {background: cyan']
})
export class ProductDetailParamComponent {
    productId: string;

    constructor(private _route: ActivatedRoute){
        this.productId = this._route.snapshot.params['id'];
    }
}