import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from './app.routing';
import { ProductDetailParamComponent } from './product-param.component';
import { ProductDescriptionComponent } from './product-description.component';
import { SellerInfoComponent } from './seller-info.component';
import { LoginGuardService } from '../services/loginGuardService';
import { UnsavedChangesGuardService } from '../services/unsavedChangesGuardService';

@NgModule({
    imports: [  BrowserModule,
                routing ],
    declarations: [ AppComponent,
                    HomeComponent,
                    ProductDetailComponent,
                    ProductDetailParamComponent,
                    ProductDescriptionComponent,
                    SellerInfoComponent
     ],
     providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, LoginGuardService, UnsavedChangesGuardService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }