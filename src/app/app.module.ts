import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { GamesComponent } from './storeExtra/games/games.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { AddplayerComponent } from './addplayer/addplayer.component';
import { LastWinsComponent } from './last-wins/last-wins.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AgentComponent } from './agent/agent.component';
import { MembersInGameComponent } from './members-in-game/members-in-game.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { UserListComponent } from './user-list/user-list.component';
// import { WalletComponent } from './storeExtra/wallet/wallet.component';

import { EditdisComponent } from './editwallet/editdis.component';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { WalletsComponent } from './wallets/wallets.component';
import { PendingwithdrawalsComponent } from './pendingwithdrawals/pendingwithdrawals.component';
import { DonewithdrawalsComponent } from './donewithdrawals/donewithdrawals.component';
// import { AddagentComponent } from './addagent/addagent.component';
// import { AddagentComponent } from './addagent/addagent.component';
 
const appRouts: Routes = [
  { path: 'games', component: GamesComponent },
  { path: 'login', component: LoginComponent },
  // {path:'wallet',component:WalletComponent},
  { path: 'wallet', component: WalletsComponent },
  { path: 'wallet/:id', component: EditdisComponent },
  { path: 'last-matches/:id', component: LastWinsComponent },
  { path: 'dis/:disId/agent', component: AgentComponent },
  { path: 'Players', component: AgentComponent },
  { path: 'pendings', component: PendingwithdrawalsComponent },
  { path: 'done', component: DonewithdrawalsComponent },
  { path: '', component: HomeComponent },
  { path: '', component: AgentListComponent },
  { path: 'dis/:id', component: EditdisComponent },
  { path: 'memberdetails/:uid', component: MemberdetailsComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    GamesComponent,
    LoginComponent,
    // AddplayerComponent,
    LastWinsComponent,
    AgentComponent,
    MembersInGameComponent,
    AgentListComponent,
    UserListComponent,

    EditdisComponent,
    WalletsComponent,
    PendingwithdrawalsComponent,
    DonewithdrawalsComponent,
    // AddagentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserAnimationsModule, 
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

