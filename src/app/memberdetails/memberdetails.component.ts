import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.component.html',
  styleUrls: ['./memberdetails.component.css']
})
export class MemberdetailsComponent {
  agent_arr:Player[]= [];
  agent_arr_d?:any[];
  uid:string='';
  id:string='';
  wal:any=[];
  wal_dum:any=[];
  dum?:Dum[];
  constructor(public ActiveR :ActivatedRoute,public firebaseDatabase:AngularFireDatabase) {
    this.uid = ActiveR.snapshot.params['uid'];
    firebaseDatabase.list('wallets/'+this.uid).valueChanges().subscribe(data=>{
      this.wal  = (data) 
      this.wal_dum  = (data) 
      console.log("wallets " + this.wal );
    })
    firebaseDatabase.list<Player>('players/'+this.uid).valueChanges().forEach(data=>{
      this.agent_arr = (data) 
      this.agent_arr_d = (data) 
      console.log(this.agent_arr);
    })


  // console.log('Vehrfem '+ this.wal)
    // this.dum?.player != this.agent_arr_d;
    // this.dum?[0].wal != this.wal_dum;
    // this.dum![0].player = this.agent_arr_d;
    // this.dum![0].wal = this.wal_dum
    // this.dum?.forEach(d=>{
    //   console.log(d);
    // })
  
 }

}
interface Dum{
  player?:any[];
  wal?:any[];
}
interface Player{
  userName?:string;
  email?:string;
  upi_ID?:string;
  ifsc_Code?:string;
  balance?:string;
}