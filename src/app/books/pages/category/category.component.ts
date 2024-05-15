import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { identifiers } from 'src/data/identifiers';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  ngOnInit(): void {

    let subjects:string[] = []
    let booksFinal:any = []

    identifiers.forEach(id => {
      this.booksService.getBook(id).subscribe(resp => {
      subjects = subjects.concat(resp.metadata.subject)
      })
    })

    setTimeout(() => {
      this.topics = subjects.splice(0,20)
      this.books = booksFinal
    }, 2000);

    identifiers.forEach(id => {
      this.booksService.getBook(id).subscribe(resp => {
        let book = {
          title: resp.metadata.title,
          topics: resp.metadata.subject
        }
        booksFinal.push(book)
      })
    })


    let sections:any = []


    setTimeout(() => {
      let topics20:any = subjects.splice(0,20)
      topics20.forEach((topic2: any) => {
        booksFinal.forEach((book2:any) => {
          if(book2.topics.includes(topic2)){
            let section = {
              title: [book2.title],
              topic: topic2
            }
            sections.push(section)
          }
      })
        })

        let result = sections.reduce((acc:any, curr:any) => {
          const { topic, title } = curr;
          const findObj = acc.find((o:any) => o.topic === topic);
          console.log(acc)
          if (!findObj) {
            acc.push({ topic, title });
          } else {
            findObj.title.push(...title);
          }
          return acc;
        }, [])
        this.collection = result
    }, 3000);

  }

  constructor(private booksService:BooksService){}

  public topics:string[] = []
  public books:any = []
  public collection:any = []

}
