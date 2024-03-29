import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { VoteComponent } from './vote/vote.component';
import { LoginComponent } from './login/login.component';
import { RanksComponent } from './ranks/ranks.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';
import { AdminComponent } from './admin/admin.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PhotoallComponent } from './photoall/photoall.component';


export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'vote', component: VoteComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ranks', component: RanksComponent },
    { path: 'home', component: HomeComponent },
    { path: 'graph', component: GraphComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'userlist', component: UserlistComponent },
    { path: 'photoall', component: PhotoallComponent }
];
