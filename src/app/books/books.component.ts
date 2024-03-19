import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { Book } from "../models/book";
import { PaginatorIntl } from "../paginatorIntl.service";
import { BookService } from "../services/book.service";


 
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorIntl}],
})
export class BooksComponent {

  page = 1;
  passenger: any; 
  itemsPerPage = 6;
  totalItems : any; 

  title = 'YourLibrary';
  
  books: Book[] = [];
  
  bookToEdit?: Book;

  bookToView?: Book;

  

  constructor(private bookservice : BookService , private http: HttpClient) {}

  @Input() book?: Book;
  ngOnInit() : void {
   this.getAllData();
  }


 
  getAllData() {
    this.http.get(`http://localhost:5063/api/Book/${this.itemsPerPage}/${1}`).subscribe((data: any) => {
      this.books =  data.data;
      this.totalItems = data.totalCount;;
      console.log("hey");
      console.log(data.totalCount);
    })}

    gty(page: any){
      this.http.get(`http://localhost:5063/api/Book/${this.itemsPerPage}/${page}`).subscribe((data: any) => {
        this.books =  data.data;
        this.totalItems = data.totalCount;
       
      })
    }

  initNewBook(){
  
    this.bookToEdit = new Book();
  }

  UpdateBookList(books : Book[]){

  }

  editBook(book: Book){

    this.bookToEdit = book;
  }

  getBook(book: Book){

    this.bookToView = book;
  }
}
