import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pendingwithdrawals',
  templateUrl: './pendingwithdrawals.component.html',
  styleUrls: ['./pendingwithdrawals.component.css']
})
export class PendingwithdrawalsComponent {
  wallet_arr:any= [];
  w_arr?:any=[];
  count?:number=0;
  constructor(public ActiveR :ActivatedRoute,public firebaseDatabase:AngularFireDatabase) {
    firebaseDatabase.list<S>('withdraw-request').valueChanges().forEach(data=>{
      console.log("data" +data)
      data.forEach(s=>{
        
         
        if(s.status=='pending') {
          this.count = this.count! + parseInt(s.amount!);
          this.w_arr?.push(s);
          console.log(this.w_arr)
        }
        // console.log(this.w_arr)
      })
      
      // for (let user of data) {
      //   console.log ("Block statement execution no." +  user);
      // }
    }).then((s)=>{

      console.log("Hello vaibhav" +this.w_arr);
    })
    // console.log(this.w_arr)
  }

}
interface S{
  amount?:string;
  status?:string;
}