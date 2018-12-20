import {Component, OnInit} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {PictureService} from "../picture.service";
import {Picture} from "../picture";
const UploadURL = 'http://localhost:3000/api/upload';


@Component({
    selector: 'app-picture-upload',
    templateUrl: './picture-upload.component.html',
    styleUrls: ['./picture-upload.component.css']
})
export class PictureUploadComponent implements OnInit {

    public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'picture'});
    public picture: Picture = new Picture;

    constructor(private pictureService: PictureService) {
    }

    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log('PictureUpload:uploaded:', item, status, response);
            this.picture.filename=item.file.name;
            this.picture.filelink='empty';
            this.picture.likes=0;
            this.pictureService.addPicture(this.picture).subscribe();
        };

    }

    uploadClick(pictureFile): void {

        this.uploader.uploadAll();

    }

}
