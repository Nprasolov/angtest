import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PicturesComponent} from './pictures/pictures.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PictureDetailComponent} from './picture-detail/picture-detail.component';
import {PictureUploadComponent} from "./picture-upload/picture-upload.component";

const routes: Routes = [
    {path:'pictures', component:PicturesComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'upload', component:PictureUploadComponent},
    {path:'', redirectTo:'/dashboard',pathMatch:'full'},
    {path:'detail/:id', component:PictureDetailComponent}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
