import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { UiService } from '../ui.service';

@Component({
  selector: 'tmo-reading-list-item',
  templateUrl: './reading-list-item.component.html',
  styleUrls: ['./reading-list-item.component.scss']
})
export class ReadingListItemComponent implements OnInit {

  @Input() readingListItem: ReadingListItem;

  constructor(
    private readonly store: Store,
    private uiService: UiService
    ) { }

  ngOnInit(): void {
  }

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.uiService.openActionMessage(item.title, "removed");
  }

}
