import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  id?:number ;//remove. create variable for id
  book :Book = {
    title: '',
    author: '',
    description: '',
    pages: '',
    year: '',
    cover: ''
  };
;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) {
    
  } 

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getBook(this.id);

  }
  Refresh(){
    this.bookService.reloadCurrentPage;
  }
  
  getBook(id : number){
    this.bookService.Get(id).subscribe((books: Book) => this.book =(books));
  }
}
