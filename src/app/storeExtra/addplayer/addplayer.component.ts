import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import{Database} from '@angular/fire/database'
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent {
  
  constructor(public db: AngularFireDatabase,public router: Router) {
    db.list('Player').valueChanges().forEach(data=>{
      console.log(data)
    })   
   }
   addDes(value:NgForm['value']) {
    this.db.list('admin').push(value).then(
      snap=>{
        const s = snap.key;
        snap.update({id:s});
      }
    );
    this.router.navigate(['/'])
   }
}
