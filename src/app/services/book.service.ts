import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  private url = 'Book';
 
  constructor(private http: HttpClient) {}

  public getBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/${this.url}`);
  }
  public UpdateBook(book: Book): Observable<Book[]> {
    return this.http.put<Book[]>(`${environment.apiUrl}/${this.url}`, book);
  }
  public CreateBook(book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(`${environment.apiUrl}/${this.url}`, book);
  }

  public DeleteBook(book: Book): Observable<Book[]> {
    return this.http.delete<Book[]>(
      `${environment.apiUrl}/${this.url}/${book.id}`
    );
    }
    public Get(id : number): Observable<Book> {
      return this.http.get<Book>( `${environment.apiUrl}/${this.url}/${id}`)
  
  }
  reloadCurrentPage() {
    window.location.reload();
   }

  
}

