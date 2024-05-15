import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './interfaces/bookInterfaces';


@Injectable({
  providedIn: 'root'
})
export class BooksService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  baseURL:string = "https://archive.org/metadata"


  //aqui normalmente hago una peticion a un archivo JSON donde esta un objeto por item y ahi obtengo toda la info
  public getBook(id:string):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`)
  }

getImage(id: string): Observable<Blob> {
   return this.http.get('https:/api/archive.org/services/img/'+id, {responseType: "blob"});
}

}
