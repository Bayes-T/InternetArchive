import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuthorComponent } from './pages/author/author.component';
import { BooksLayoutComponent } from './books-layout/books-layout.component';

const routes: Routes = [
  {path: '',
  component: BooksLayoutComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'list',
      component: ListComponent
    },
    {
      path: 'category',
      component: CategoryComponent
    },
    {
      path: 'author',
      component: AuthorComponent
    },
    {path: '**',
    redirectTo: 'home'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
