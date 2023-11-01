import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{

  constructor(private route:ActivatedRoute){}

  public id :number=0;
  public authorid:number=0;
  name:string='';
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id=param['bookId'];
      this.authorid=param['authorId'];
    })

    this.route.queryParams.subscribe(param=>{
      this.name=param['name'];
    })
  }
}
