import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromReadingList, updateFinishedBookFromReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { UiService } from '../ui.service';

@Component({
  selector: 'tmo-reading-list-item',
  templateUrl: './reading-list-item.component.html',
  styleUrls: ['./reading-list-item.component.scss']
})
export class ReadingListItemComponent implements OnInit {

  @Input() readingListItem: ReadingListItem;
  newItem: ReadingListItem;

  constructor(
    private readonly store: Store,
    private uiService: UiService) { }

  ngOnInit(): void {
  }

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  updateFromReadingList(item) {
    let currentTime = new Date().toISOString();
    this.store.dispatch(updateFinishedBookFromReadingList({ item, currentTime }))
    this.uiService.setBookButtonsAsFinished(item.id)
  }

  checkInfo(item) {
    console.log('check info', item)

  }

}
