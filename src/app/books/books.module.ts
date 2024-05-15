import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuthorComponent } from './pages/author/author.component';
import { ListComponent } from './pages/list/list.component';
import { BooksLayoutComponent } from './books-layout/books-layout.component';
import { MaterialModule } from '../material/material.module';
import { TitlePipe } from './pipes/title.pipe';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
import { ListPipe } from './pipes/list.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    AuthorComponent,
    ListComponent,
    BooksLayoutComponent,
    TitlePipe,
    SearchBarComponent,
    SearchDialogComponent,
    ListPipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule, 
    MaterialModule
  ]
})
export class BooksModule { }
