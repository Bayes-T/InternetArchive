import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'books-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @ViewChild('searchInput') searched!: ElementRef;

  @Output() messageEvent = new EventEmitter<string>();
  
  search(){
    this.messageEvent.emit(this.searched.nativeElement.value);
    this.searched.nativeElement.value = ""
  }


}
