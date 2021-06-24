import { Injectable } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Book } from '@tmo/shared/models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  
  constructor() { }

  finishedBooks: Book[];
  finishedBook$: Subject<boolean>;

  getFinishedBook() {

  }
  setBookButtonsAsFinished(id: string) {
    
  }

  resetBookButton() {

  }

}
