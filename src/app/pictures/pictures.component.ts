import { Component, OnInit } from '@angular/core';
import {Picture} from '../picture';
import {PictureService} from '../picture.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

   pictures:Picture[];
    selectedPicture:Picture;

  constructor(
     private pictureService:PictureService
  ) { }

  ngOnInit() {
       this.getPictures();
  }

  onSelect(picture:Picture):void{
      this.selectedPicture=picture;
  }

  getPictures():void{
      this.pictureService.getPictures().subscribe(pictures=>this.pictures = pictures);
      //this.pictures=this.pictureService.getPictures();
  }

  addPicture(picture:Picture):void{
      this.pictureService.addPicture(picture).subscribe(picture=>this.pictures.push(picture));
  }
}