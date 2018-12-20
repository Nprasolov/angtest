import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PicturesComponent} from './pictures/pictures.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PictureDetailComponent } from './picture-detail/picture-detail.component';
import { FileSelectDirective } from "ng2-file-upload";
import { PictureUploadComponent } from './picture-upload/picture-upload.component';


@NgModule({
    declarations: [
        AppComponent,
        PicturesComponent,
        DashboardComponent,
        PictureDetailComponent,
        FileSelectDirective,
        PictureUploadComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
          HttpClientInMemoryWebApiModule.forRoot(
         InMemoryDataService
         )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
