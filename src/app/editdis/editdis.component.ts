import { Component } from '@angular/core'; 
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router"
import { getDatabase, ref, set } from "firebase/database";

@Component({
  selector: 'app-editdis',
  templateUrl: './editdis.component.html',
  styleUrls: ['./editdis.component.css']
})

export class EditdisComponent {
  id:string = '';
  array:any[]=[];
  constructor(public rout:ActivatedRoute,public db:AngularFireDatabase,public router:Router) {
  this.id = rout.snapshot.params['id'];

  console.log(this.id);
  this.db.list("admin/"+this.id).valueChanges().subscribe(s=>{
    console.log(s)
    this.array = s;
    console.log(this.array)
  })
}

addDes(value:NgForm['value']) {

  value['id'] = this.id 
  const fRef =ref(getDatabase(), 'admin/'+this.id  );
  set(fRef, value);
 }

 
 
}         

