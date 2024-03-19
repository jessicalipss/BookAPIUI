import { Component, Input } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from './models/book';
import {MatPaginatorIntl, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { PaginatorIntl } from './paginatorIntl.service';
import { NumberInput } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorIntl}],
})
export class AppComponent {

}
