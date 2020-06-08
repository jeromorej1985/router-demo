import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product.component';
import { ProductDetailParamComponent } from "./product-param.component";
import { ProductDescriptionComponent } from "./product-description.component";
import { SellerInfoComponent } from "./seller-info.component";

const routes: Routes = [
    {path: '',          component: HomeComponent},
    {path: 'product',   component: ProductDetailComponent},
    {path: 'product/:id', component: ProductDetailParamComponent,
        children: [
            {path: '',              component: ProductDescriptionComponent},
            {path: 'seller/:id',    component: SellerInfoComponent}
        ]
    }
];

export const routing = RouterModule.forRoot(routes);