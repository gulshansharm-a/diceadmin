import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  wallet_arr:any= [];
  constructor(public ActiveR :ActivatedRoute,public firebaseDatabase:AngularFireDatabase) {
    firebaseDatabase.list('withdraw-request').valueChanges().forEach(data=>{
      this.wallet_arr = (data) 
      console.log(  this.wallet_arr );
    })
  }

    delete(id:string) {
      console.log("alkjsd " + id)
      // if ( confirm("are you sure") == true) {
        this.firebaseDatabase.list('withdraw-request/'+id).remove();   
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




// import { Component } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
// import { ActivatedRoute } from '@angular/router';
// import {  ViewChild, ElementRef } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-wallets',
//   templateUrl: './wallets.component.html',
//   styleUrls: ['./wallets.component.css'],
//   @ViewChild('confirmationModal') confirmationModal: ElementRef;
// })
// export class WalletsComponent {
//   wallet_arr:any= [];
//   constructor(public ActiveR :ActivatedRoute,public firebaseDatabase:AngularFireDatabase,private modalService: NgbModal) {
//     firebaseDatabase.list('wallets').valueChanges().forEach(data=>{
//       this.wallet_arr = (data) 
//       console.log(  this.wallet_arr );
//     })
//   }
//   //   ngOnInit() {
//   //     console.log(this.wallet_arr,"uhu")
//   //  }
//   openConfirmationModal() {
//     this.modalService.open(this.confirmationModal, { centered: true });
//   }
  
//   confirmDeletion() {
//     // Handle deletion logic here
//     this.modalService.dismissAll();
//   }
  

//     delete(id:string) {
//       console.log("alkjsd " + id)
//       this.firebaseDatabase.list('wallets/'+id).remove();
//       console.log("     asldjklf")
//      }
     

// }
