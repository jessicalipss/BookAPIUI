import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
@Input() book?: Book;
@Output() booksUpdated = new EventEmitter<Book[]>();
  constructor( private bookService: BookService) { }

  ngOnInit(): void {}

  UpdateBook(book: Book){
    this.bookService.UpdateBook(book).subscribe((books: Book[])=> this.booksUpdated.emit(books));
  }

  DeleteBook(book:Book){
    this.bookService.DeleteBook(book).subscribe((books: Book[])=> this.booksUpdated.emit(books));
  }
  CreateBook(book:Book){
    this.bookService.CreateBook(book).subscribe((books: Book[])=> this.booksUpdated.emit(books));
  }
}
