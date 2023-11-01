import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { DeleteBookComponent } from '../user/components/delete-book/delete-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [

  {
    path: 'public', component: PublicComponent,
    children:
      [
        { path: '', redirectTo:'all-books' ,pathMatch:'full'},
        { path: 'all-books', component: AllBooksComponent },
        { path: 'book-details/:bookId/author/:authorId', component:BookDetailsComponent }
      ],

  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class PublicRoutingModule { }
