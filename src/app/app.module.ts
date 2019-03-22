import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//notificaciones
import {FlashMessagesModule} from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';



//estamos importando las dependencias para conectar fire base
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    PrivadoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth, AngularFirestore, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
