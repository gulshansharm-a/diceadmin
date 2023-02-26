import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  wallet_arr:any= [];
  constructor(public ActiveR :ActivatedRoute,public firebaseDatabase:AngularFireDatabase) {
    firebaseDatabase.list('wallets').valueChanges().forEach(data=>{
      this.wallet_arr = (data) 
      console.log(  this.wallet_arr );
    })
    // // this.agent_arr.forEach(e  => {
    //    console.log("hello");
    //    console.log(  this.wallet_arr );
    //    console.log("hello2");
    // // });
 }
}
