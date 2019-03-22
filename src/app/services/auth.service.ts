import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
   private afsAuth: AngularFireAuth  ) { }
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

