import { Component, OnInit } from '@angular/core';
import {PictureService} from '../picture.service';
import {Picture} from "../picture";
//noinspection TypeScriptCheckImport
import {EXIF} from "exif-js/exif";
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  top_pictures:Picture[]=[];
  all_pictures:Picture[]=[];

    selectedPicture:Picture;
  constructor(
      private pictureService:PictureService,
  ) { }

  ngOnInit() {
    this.getPictures();
    this.topPictures();
  }

  getPictures():void{
      this.pictureService.getPictures().subscribe(all_pictures=>this.all_pictures=all_pictures);
  }

  topPictures():void{
      this.pictureService.getPictures().subscribe(top_pictures=>this.top_pictures=top_pictures.sort(
          (a,b)=>a.likes<b.likes ? 1 : a.likes>b.likes ? -1 :0
      )
          .slice(0,3));
  }

  ratingUp(picture:Picture):void{
      picture.likes++;
      this.pictureService.updatePicture(picture).subscribe();
      this.topPictures();

  }

    ratingDown(picture:Picture):void{
        picture.likes--;
        this.pictureService.updatePicture(picture).subscribe();

        this.topPictures();

    }

    onSelect(picture:Picture):void{
        this.selectedPicture=picture;

        EXIF.getData(event.currentTarget,function () {
        let exifdata={
            make:EXIF.getTag(this,'Make'),
            model:EXIF.getTag(this,'Model'),
            datetime:EXIF.getTag(this,'DateTime'),
            orientation:EXIF.getTag(this,'Orientation')
        };

        picture.metadata=JSON.stringify(exifdata);
        picture.exif=exifdata;
    });
    }

}
