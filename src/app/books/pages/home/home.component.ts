import { Component } from '@angular/core';
import { BooksService } from '../../books.service';
import { identifiers } from 'src/data/identifiers';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialogComponent } from '../../components/search-dialog/search-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';
import { delay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private booskService:BooksService, public dialog: MatDialog){}


  receiveMessage($event:any) {

    this.weHaveIt($event)

    if(this.weHavetheBook){
    } else {
      this.weHavetheBook = false
    }

    this.openDialog()

  }

  public weHavetheBook!:boolean 
  public bookName:string = ""
  public bookNames:string[] = []


  public weHaveIt(search: string){

    identifiers.forEach(book => {
      if(book.includes(search)){
        this.booskService.getBook(book)
        .pipe(delay(1000))
        .subscribe(resp => {
           this.bookName = resp.metadata.title 
           this.bookNames.push(this.bookName)
        })
        this.weHavetheBook = true
      } 
    })
  }


  openDialog(){
    setTimeout(() => {
      const dialogRef = this.dialog.open(SearchDialogComponent, {
        data: { books: this.bookNames },
        height: '300px',
        width: '600px',
      }, 
        )
    }, 2000);

  }

  }



