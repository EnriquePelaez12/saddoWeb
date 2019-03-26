import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth } from 'angularfire2/auth';
import { take, map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private afsAuth: AngularFireAuth,
     private router: Router) {}
     //metodo para 
  canActivate(
    netx: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      return this.afsAuth.authState
      .pipe(take(1))
      .pipe(map(authState => !! authState))
      .pipe(tap(auth =>{
        if(!auth){
          this.router.navigate(['/users/login']);
        }

      }))
      
    }
  
}
