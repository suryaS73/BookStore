import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../public-components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PublicRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { RouterModule } from '@angular/router';
import { BookService } from './services/book.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }
