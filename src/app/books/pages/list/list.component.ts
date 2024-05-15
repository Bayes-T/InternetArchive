import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { identifiers } from 'src/data/identifiers'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

      //TO DO:  AGREGAR INTERFACES!
      //HACER RESUMEN DE TODO LO QUE HECHO EN ANGULAR MATERIAL!
      //OPCIONAL: AGREGAR AVATAR EN LA CARD, RESPECTO AL TEMA...
      //PAGINADOR
      //SNACKBAR

  constructor(private bookService:BooksService){}

  ngOnInit(): void {

    identifiers.forEach(id => {
      return this.bookService.getBook(id).subscribe(resp => {
        const book = {
          id: resp.metadata.identifier,
          title: resp.metadata.title,
          author: resp.metadata.creator,
          date: resp.metadata.date,
          topics: resp.metadata.subject,
          link: "https://archive.org/details/" + id,
        } as any
        this.collection.push(book)
      })
    })

    identifiers.forEach(id => {
      this.bookService.getImage(id).subscribe(resp => {
        var urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(resp)
        const cover = {
          id: id,
          img: imageUrl
        } as any
        this.covers.push(cover)
      })
    })

    //funcion para juntar los dos objetos
    setTimeout(() => {
      identifiers.forEach((id,i) => {
        const identifier = this.collection[i].id
        console.log(identifier)
        this.covers.forEach( (element:any) => {
          if (element.id === identifier){
            const finalBook = {
              id: id,
              title: this.collection[i].title,
              author: this.collection[i].author,
              date: this.collection[i].date,
              topics: this.collection[i].topics,
              link: this.collection[i].link,
              img: element.img
            }
            this.library.push(finalBook)
          }
        });
      }) 
    } , 2000);
    

  }

  public collection:any = []
  public covers:any = []
  public library:any = []

 

}
