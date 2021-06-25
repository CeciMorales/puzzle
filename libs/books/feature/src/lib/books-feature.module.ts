import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksDataAccessModule } from '@tmo/books/data-access';
import { BookSearchComponent } from './book-search/book-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TotalCountComponent } from './total-count/total-count.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { ReadingListItemComponent } from './reading-list-item/reading-list-item.component';
import { BookComponent } from './book/book.component';
import { UiSharedModule } from './ui-shared/ui-shared.module';
import { BooksService } from 'libs/api/books/src/lib/books.service';
import { UiService } from './ui.service';
import { ActionMessageComponent } from './action-message/action-message.component';


const EXPORTS = [
  BookSearchComponent,
  TotalCountComponent,
  ReadingListComponent,
  ReadingListItemComponent,
  BookComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UiSharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BookSearchComponent }
    ]),
    BooksDataAccessModule
  ],
  exports: [...EXPORTS],
  declarations: [...EXPORTS, ActionMessageComponent]
})
export class BooksFeatureModule {}
