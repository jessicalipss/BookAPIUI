import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YourLibrary';
  
  books: Book[] = [];
  
  bookToEdit?: Book;
  constructor(private bookservice : BookService) {}


  ngOnInit() : void {
this.bookservice.getBook().subscribe((result: Book[] )=> (this.books = result));
  }

  initNewBook(){
    this.bookToEdit = new Book();
  }

  UpdateBookList(books : Book[]){
    this.books = books;
  }

  editBook(book: Book){
    this.bookToEdit = book;
  }
}
