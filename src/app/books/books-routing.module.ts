import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { DeleteBookComponent } from '../user/components/delete-book/delete-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [

  { path: '', component:AllBooksComponent},
  { path: ':id', component:BookDetailsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class PublicRoutingModule { }
