import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product.component';
import { ProductDetailParamComponent } from "./product-param.component";

const routes: Routes = [
    {path: '',          component: HomeComponent},
    {path: 'product',   component: ProductDetailComponent},
    {path: 'product/:id', component: ProductDetailParamComponent}
];

export const routing = RouterModule.forRoot(routes);