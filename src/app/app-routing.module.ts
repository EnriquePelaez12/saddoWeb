import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivadoComponent } from './components/privado/privado.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'users/profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'privado', component: PrivadoComponent},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
