import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewBookComponent } from './view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: 'create', component: EditBookComponent },
  { path: 'book/:id',      component: ViewBookComponent },
  { path: 'ebitbook/:id',      component: EditBookComponent },
  {
    path: 'Books',
    component: BooksComponent,
    data: { title: 'Books List' }
  },
  { path: '',
    redirectTo: '/Books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
