import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks():any[]{
    return [
      {
        "id":1,
        "title":"Angular Fundamentals",
        "totalPages":500,
        "author":"Ram Singh",
        "price":{
          "currency":"INR",
          "value":200
        }
      },
      {
        "id":2,
        "title":"Java Fundamentals",
        "totalPages":700,
        "author":"James",
        "price":{
          "currency":"USD",
          "value":500
        }
      },
      {
        "id":3,
        "title":"ReactJs Fundamentals",
        "totalPages":600,
        "author":"Smith",
        "price":{
          "currency":"INR",
          "value":300
        }
      },
      {
        "id":4,
        "title":"Spring boot Fundamentals",
        "totalPages":500,
        "author":"James",
        "price":{
          "currency":"INR",
          "value":800
        }
        
      },
      {
        "id":5,
        "title":"Spring boot Fundamentals",
        "totalPages":500,
        "author":"James",
        "price":{
          "currency":"INR",
          "value":800
        }
        
      },
      {
        "id":6,
        "title":"Spring boot Fundamentals",
        "totalPages":500,
        "author":"James",
        "price":{
          "currency":"INR",
          "value":800
        }
        
      },
      {
        "id":7,
        "title":"Spring boot Fundamentals",
        "totalPages":500,
        "author":"James",
        "price":{
          "currency":"INR",
          "value":800
        }
        
      }
    ]
  }
}
