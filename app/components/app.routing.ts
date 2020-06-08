import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product.component';
import { ProductDetailParamComponent } from "./product-param.component";
import { ProductDescriptionComponent } from "./product-description.component";
import { SellerInfoComponent } from "./seller-info.component";
import { LoginGuardService } from "../services/loginGuardService";
import { UnsavedChangesGuardService } from "../services/unsavedChangesGuardService";

const routes: Routes = [
    {path: '',          component: HomeComponent},
    {path: 'product',   component: ProductDetailComponent, canDeactivate: [UnsavedChangesGuardService]},
    {path: 'product/:id', component: ProductDetailParamComponent,
        children: [
            {path: '',              component: ProductDescriptionComponent},
            {path: 'seller/:id',    component: SellerInfoComponent, canActivate: [LoginGuardService]}
        ]
    }
];

export const routing = RouterModule.forRoot(routes);