import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'product',
    template: `<h1 class="product">Product Details for Product: {{ productId }}</h1>`,
    styles: ['.product {background: cyan']
})
export class ProductDetailParamComponent {
    productId: string;

    constructor(private _route: ActivatedRoute){
        this.productId = this._route.snapshot.params['id'];
    }
}