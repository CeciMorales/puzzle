import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { nextTick } from 'process';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'finishedState'
})
export class FinishedStatePipe implements PipeTransform {
  readingList$: Observable<ReadingListItem[]>

  constructor(
    private readonly store: Store,

  ) {
    this.readingList$ = this.store.select(getReadingList)
  }

  transform(id: string): any {
    /*return this.readingList$.subscribe(items => 
      items.find(item => {
        console.log('fda')
        if(item.bookId === id && item.finished) {
          return true;
        } else {
          return false;
        }
      })
    )*/
    return this.readingList$.pipe(
      map(items => {
        return (items.find(item => {
          if (item.bookId === id) {
            return item.finished
          } else {
            return false
          }
        })) 
      })
    )


  }
}
