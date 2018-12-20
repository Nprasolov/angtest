import {Component, OnInit, Input} from '@angular/core';
import {Picture} from "../picture";
import {ActivatedRoute} from "@angular/router";
import {PictureService} from "../picture.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-picture-detail',
  templateUrl: './picture-detail.component.html',
  styleUrls: ['./picture-detail.component.css']
})
export class PictureDetailComponent implements OnInit {

    @Input() picture:Picture;

  constructor(
      private route: ActivatedRoute,
      private pictureService:PictureService,
      private location: Location


  ) { }

  ngOnInit() {
      this.getPicture();
  }

  getPicture():void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.pictureService.getPicture(id).subscribe(picture =>this.picture=picture);
  }
}

