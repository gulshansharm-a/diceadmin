import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public auth:AngularFireAuth){
    auth.signInWithEmailAndPassword('g@b.com','123456').then(
      s=>{
        console.log(s);
      }
    )
  }
}
