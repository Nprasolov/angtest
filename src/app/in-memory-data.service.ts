import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Picture} from "./picture"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

    createDb(){
        const pictures = [
            {id:0, filename:'lamp', filelink:'../assets/img/lamp.jpg', likes:5},
            {id:1, filename:'sea', filelink:'../assets/img/sea.jpg', likes:7},
            {id:2, filename:'birds', filelink:'../assets/img/birds.jpg', likes:3},
            {id:3, filename:'phoenix', filelink:'../assets/img/phoenix.jpg', likes:3},
        ];
        return {pictures};
    }

    /*genId(pictures: Picture[]): number {
        return pictures.length > 0 ? Math.max(...pictures.map(picture => picture.id)) + 1 : 5;
    }*/
  constructor() {

  }
}
