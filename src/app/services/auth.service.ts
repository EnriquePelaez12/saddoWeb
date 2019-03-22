import { Product } from './../models/product';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'; //new

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  documentList: AngularFireList<any>;//new
  //es para almacenar temporalmete en esta variable y poder utilizarlo
  selectedProduct: Product = new Product();//new
  

  constructor(
   private afsAuth: AngularFireAuth,
   private firebase: AngularFireDatabase ) { }


   //codigo new
//metodo obtener La lista del firebase
  getDocuments(){
    return this.documentList = this.firebase.list('documents');
  
  }


   //metodo para insertar un producto desde aqui se agregarian datos que quisiera para la base de datos
   insertDocument(product: Product)
   {
     this.documentList.push({
       idDocumento: product.idDocumento,
       Asunto: product.Asunto,
       destino: product.destino,
       destinatario: product.destinatario,
       origen: product.origen,
       remitente: product.remitente,
       fDocumento: product.fDocumento,
       fLimite: product.fLimite,
       prioridad: product.prioridad,
       tipo: product.tipo,
       status: product.status
   
     })
   }
   //actualizar
   updateProduct(product: Product)
   {
     this.documentList.update(product.$key, {
       idDocumento: product.idDocumento,
       Asunto: product.Asunto,
       destino: product.destino,
       destinatario: product.destinatario,
       origen: product.origen,
       remitente: product.remitente,
       fDocumento: product.fDocumento,
       fLimite: product.fLimite,
       prioridad: product.prioridad,
       tipo: product.tipo,
       status: product.status
 
 
       
   
     });
   }
   //metodo para eliminar
   deleteProduct($key: string){
     this.documentList.remove($key);
   }
 










//para registar usuarios
registerUser(email: string, pass: string ){
  return new Promise((resolve, reject) => {
    this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
    .then(userData =>  resolve(userData),
     err => reject(err));
      // this.updateUserData(userData.user)//se asigna rol a usuario
    //}).catch(err => console.log(reject(err)))
  });
}

//metodo para registrar por usuario y contraseña
loginEmailUser(email: string, pass: string){
  return new Promise((resolve, reject) => {
    this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
    .then(userData => resolve(userData),

    err => reject(err));
  })

}

//metodo para salir
logoutUser(){
  return this.afsAuth.auth.signOut();
}


//metodo para saber si nuestro usuariesta logado
isAuth(){
  return this.afsAuth.authState.pipe(map(auth => auth));
}







}

