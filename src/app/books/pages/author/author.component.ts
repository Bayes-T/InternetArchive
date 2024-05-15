import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { identifiers } from 'src/data/identifiers';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit{

  constructor(private booksService:BooksService){}

  async ngOnInit(): Promise<void> {
     identifiers.forEach(id => {
      this.booksService.getBook(id).subscribe(resp =>
        {
          if (!this.authors.includes(resp.metadata.creator))
          this.authors.push(resp.metadata.creator)
        })
    })
  }

  public authors: string[] = []
  public selectAuthor:string = ""
  public books:string[] = []

  getAuthor(author:any){
    this.selectAuthor = author
    this.getBooks(author)
  }

  getBooks(author: string){
    this.books = []
    identifiers.forEach(id => {
      let authorArray = author.split(" ")
      if(authorArray.length == 1){
        let newAuthor1 = authorArray[0].charAt(0).toLowerCase() + authorArray[0].slice(1);
        if (id.includes(newAuthor1)){
          this.books.push(id)
         }
      } else if (authorArray.length > 1) {
        let newAuthor1 = authorArray[0].charAt(0).toLowerCase() + authorArray[0].slice(1);
        let newAuthor2 = authorArray[1].charAt(0).toLowerCase() + authorArray[1].slice(1);
        if (id.includes(newAuthor1) || id.includes(newAuthor2)){
          this.books.push(id)
         }
      } 
    })
  }

}
