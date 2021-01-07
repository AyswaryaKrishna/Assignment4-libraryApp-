import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
// import { AuthorOneComponent } from './author-one/author-one.component';

const routes: Routes = [
  {path :''    ,component  :ProductListComponent},
  {path :'add' ,component  :NewProductComponent},
  {path :'products/:id',component :ProductDetailsComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path:'author',component:AuthorListComponent},
  {path:"addauthor",component:NewAuthorComponent} ,
  {path:"book",component:LoginComponent},
  {path :'author/:id',component:AuthorDetailsComponent},
  // {path:'author/one',component:AuthorOneComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
