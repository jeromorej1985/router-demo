import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from './app.routing';

@NgModule({
    imports: [  BrowserModule,
                routing ],
    declarations: [ AppComponent,
                    HomeComponent,
                    ProductDetailComponent
     ],
     providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [ AppComponent ]
})
export class AppModule { }