import { Component, Inject, OnInit } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, removeFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-action-message',
  templateUrl: './action-message.component.html',
  styleUrls: ['./action-message.component.scss']
})
export class ActionMessageComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private readonly store: Store,  
  ) { 
    this.dataReceived = data;
  }

  dataReceived: any;

  ngOnInit(): void {
  }

  undoAction() {
    if (this.dataReceived.action === "added") {
      const bookId = this.dataReceived.item.id;
      const item = {...this.dataReceived.item, bookId}
      this.store.dispatch(removeFromReadingList({ item: item }));
      
    } else if (this.dataReceived.action === "removed") {

      this.store.dispatch(addToReadingList({ book: this.dataReceived.item }));

    }
  }

}
