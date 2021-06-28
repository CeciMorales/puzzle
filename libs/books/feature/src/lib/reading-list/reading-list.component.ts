import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { 
  getReadingList,
  confirmedRemoveFromReadingList
 } from '@tmo/books/data-access';
import { Actions, ofType } from '@ngrx/effects';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UiService } from '../ui.service';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnDestroy {
  readingList$ = this.store.select(getReadingList);
  destroyed$ = new Subject<boolean>();

  constructor(
    private readonly store: Store,
    public updates$: Actions,
    private uiService: UiService
    ) {
      updates$.pipe(
        ofType(confirmedRemoveFromReadingList),
        takeUntil(this.destroyed$)
    )
    .subscribe((item) => {
      this.uiService.openActionMessage(item.item, "removed")
    });
    }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();

  }

}
