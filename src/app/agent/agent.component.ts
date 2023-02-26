import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  totalbalance: number = 0;
  agent_arr: any = [];
  constructor(public ActiveR: ActivatedRoute, public firebaseDatabase: AngularFireDatabase) {
    firebaseDatabase.list<S>('players').valueChanges().forEach(data => {
      data.forEach(s=>{
        this.totalbalance = this.totalbalance! +  (s.balance!);
       //  console.log(this.totalbalance)
     }
    )
      this.agent_arr = (data)
      console.log(data);
    })

  }

  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
  }
  onTableSizeChange(value:string): void {
    console.log(value)
    this.tableSize = parseInt(value);
    this.page = 1;
    // this.fetchPosts();
  }
  
}
interface S { 
  balance?: number;
  email?: string;
  total_Bet?: number;
  total_Loss?: string;
  total_Winning?: string;
  uid?: string;
  userName?: string;
}
