import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksModule } from './books/books.module';
import { NotFoundComponentComponent } from './shared/components/not-found-component/not-found-component.component';

const routes: Routes = [

  {path: 'books',
   loadChildren: () => import('./books/books.module'). then (m => BooksModule)
  },
  {path: '404',
   component: NotFoundComponentComponent
 },
  {path: '',
  redirectTo: 'books',
  pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
