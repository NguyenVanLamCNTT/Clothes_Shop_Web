import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ProductShopComponent } from './modules/product-shop/product-shop.component';
@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        ProductShopComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
