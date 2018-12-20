import { Injectable } from '@angular/core';
import {Picture} from './picture';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable ,of} from "rxjs";
import {tap, catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class PictureService {



    /*getPictures():Observable<Picture[]>{
        return of (PICTURES);
    }*/
private picturesApi = 'api/pictures';
  constructor(
      private http:HttpClient
  ) { }

  getPictures() : Observable<Picture[]> {
      //return this.http.get<Picture[]>(this.picturesApi);
      return this.http.get<Picture[]>(this.picturesApi)
          .pipe(
              tap(_ => console.log('pictures got')),
             // catchError(this.myerror('getPictures',[]))
          );
     // return of(PICTURES)
  }

  getPicture(id:number):Observable<Picture>{
      //noinspection TypeScriptUnresolvedFunction
      const url=`${this.picturesApi}/${id}`;
      return this.http.get<Picture>(url);
      //return of(PICTURES.find(picture => picture.id === id))
  }

    updatePicture(picture:Picture):Observable<any>{
    return this.http.post(this.picturesApi,picture).pipe(
        tap(_=>console.log('picture updated'))
    );
}
    addPicture(picture:Picture):Observable<Picture>{
        return this.http.post<Picture>(this.picturesApi,picture).pipe(
            tap((picture:Picture)=>console.log('picture added')
            )
        );
    }




private myerror<T>(operation='operation', result?:T){
      return(error:any):Observable<T> =>{
          console.error(error);
          return of(result as T);
      };
  }


}
