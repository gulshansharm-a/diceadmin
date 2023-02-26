import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
 import { AngularFireDatabase } from '@angular/fire/compat/database'; 
import { ActivatedRoute } from '@angular/router';
import { GamedataService } from '../services/gamedata.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // private url = 'https://jsonplaceholder.typicode.com/posts';
  private url = 'https://us-central1-dicegame-ce163.cloudfunctions.net/addAmount';
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  onlineplayer: Number = 0;
  totalbet: number = 0;

  lastwinningnumber: Number = 0;
  estimatedwinningnumber: Number = 0;
  // sample: string = 'dfb';
  // value_expression: string = 'fsbs';
  des_arr: any = [];
  agent_arr: any = [];
  posts:any;
  
  constructor(public httpClient: HttpClient,public ActiveR: ActivatedRoute, public firebaseDatabase: AngularFireDatabase,private service:GamedataService) {
    firebaseDatabase.list<S>('players').valueChanges().forEach(data => {
      data.forEach(s=>{
           this.totalbet = this.totalbet! +  (s.total_Bet!);
          //  console.log(this.totalbalance)
        }
       )
      this.agent_arr = (data)
      console.log(data)
    })
    this.httpClient.get(this.url)
    .subscribe((response) => {
      this.posts = response;
      console.log("response is -->")
      console.log(response);
      console.log("-->response endned ")
    });

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
   ngOnInit() {
  
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

// echo "# diceagain" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Vaibhavnanne18/diceagain.git
// git push -u origin main