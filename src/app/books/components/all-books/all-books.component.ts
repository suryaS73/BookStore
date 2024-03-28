import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css'],
})
export class AllBooksComponent implements OnInit{

  public books:BookModel[]=[];
  constructor(public bookService:BookService,public counterService:CounterService){
  }
  ngOnInit(): void {
   const allBooks=this.bookService.getBooks();
   allBooks.forEach(b=>{var obj=new BookModel;
    obj.id=b.id;
    obj.author=b.author;
    obj.price=b.price;
    obj.title=b.title;
    obj.totalPages=b.totalPages;
    this.books.push(obj);
  }
    )
  }

  public increaseCounter(){
    this.counterService.incCounter();
  }

  public decreaseCounter(){
    this.counterService.decCounter();
  }

}
