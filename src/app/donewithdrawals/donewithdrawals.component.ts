import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-donewithdrawals',
  templateUrl: './donewithdrawals.component.html',
  styleUrls: ['./donewithdrawals.component.css']
})
export class DonewithdrawalsComponent {
  wallet_arr:any= [];
  constructor(public ActiveR :ActivatedRoute,public firebaseDatabase:AngularFireDatabase) {
    firebaseDatabase.list('withdraw-request').valueChanges().forEach(data=>{
      this.wallet_arr = (data) 
      console.log(  this.wallet_arr );
    })
  }

  
}
