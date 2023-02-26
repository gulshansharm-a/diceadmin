import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router"
import { getDatabase, ref, set } from "firebase/database";


@Component({
  selector: 'app-editdis',
  templateUrl: './editagent.component.html',
  styleUrls: ['./editagent.component.css']
})

export class EditagentComponent {
  disId:string = '';
  agentId:string = '';
  array:any[]=[]; 
  constructor(public rout:ActivatedRoute,public db:AngularFireDatabase,public router:Router) {

  this.rout.params.subscribe(params => {
    this.disId = params['userId'];
    this.agentId = params['postId'];
  });
  console.log(this.disId);
  this.db.list("agent/"+this.agentId).valueChanges().subscribe(s=>{
    console.log(s)
    this.array = s;
    console.log(this.array)
  })
}

addDes(value:NgForm) {
  set(ref(getDatabase(), 'agent/'+this.agentId ), value);
  this.router.navigate(['/'])
 }
}