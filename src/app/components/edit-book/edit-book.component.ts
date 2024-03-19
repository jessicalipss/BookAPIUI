import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})


export class EditBookComponent implements OnInit {
  @Input() bookz?: Book;
  @Output() booksUpdated = new EventEmitter<Book[]>();
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
    if(this.id != null){
    this.getBook(this.id);
    }

  }
  Refresh(){
    this.bookService.reloadCurrentPage;
  }
  
  getBook(id : number){
    this.bookService.Get(id).subscribe((books: Book) => this.book =(books));
  }


  UpdateBook(bookz: Book) {
    this.bookService
      .UpdateBook(bookz)
      .subscribe((books: Book[]) => this.booksUpdated.emit(books));
  }

  DeleteBook(bookz: Book) {
    this.bookService
      .DeleteBook(bookz)
      .subscribe((books: Book[]) => this.booksUpdated.emit(books));
  }

  CreateBook(book: Book) {
   
    this.bookService
      .CreateBook(book)
      .subscribe((books: Book[]) => this.booksUpdated.emit(books));
  }

  

}