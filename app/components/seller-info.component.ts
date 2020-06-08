import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'seller-info',
    template: 'The seller of this product is Mary Lou (98%)',
    styles: [':host {background: yellow}']
})
export class SellerInfoComponent {
    sellerId: string;

    constructor(private _route: ActivatedRoute){
        this.sellerId = this._route.snapshot.params['id'];
        console.log(`The SellerInfoComponent got the seller id ${this.sellerId}`);
    }
}