import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
// import { AuthorOneComponent } from './author-one/author-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    NewProductComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    NewAuthorComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    // AuthorOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
