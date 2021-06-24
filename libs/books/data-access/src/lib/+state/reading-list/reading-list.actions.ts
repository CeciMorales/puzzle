import { createAction, props } from '@ngrx/store';
import { Book, ReadingListItem } from '@tmo/shared/models';

export const init = createAction('[Reading List] Initialize');

export const loadReadingListSuccess = createAction(
  '[Reading List API] Load list success',
  props<{ list: ReadingListItem[] }>()
);
export const loadReadingListError = createAction(
  '[Reading List API] Load list error',
  props<{ error: string }>()
);

export const addToReadingList = createAction(
  '[Books Search Results] Add to list',
  props<{ book: Book }>()
);

export const failedAddToReadingList = createAction(
  '[Reading List API] Failed add to list',
  props<{ book: Book }>()
);

export const confirmedAddToReadingList = createAction(
  '[Reading List API] Confirmed add to list',
  props<{ book: Book }>()
);

export const removeFromReadingList = createAction(
  '[Books Search Results] Remove from list',
  props<{ item: ReadingListItem }>()
);

export const failedRemoveFromReadingList = createAction(
  '[Reading List API] Failed remove from list',
  props<{ item: ReadingListItem }>()
);

export const confirmedRemoveFromReadingList = createAction(
  '[Reading List API] Confirmed remove from list',
  props<{ item: ReadingListItem }>()
);

export const updateFinishedBookFromReadingList= createAction(
  '[Books Search Results] Update finished from list',
  props<{ item: ReadingListItem, currentTime: string }>()
);

export const confirmedUpdateFromReadingList = createAction(
  '[Reading List API] Confirmed update from list',
  props<{ item: ReadingListItem, currentTime: string }>()
);

export const failedUpdateFromReadingList = createAction(
  '[Reading List API] Failed update from list',
  props<{ item: ReadingListItem }>()
);

export const updateFinishedBookFromBookList= createAction(
  '[Books Search Results] Update finished from books',
  props<{ item: Book }>()
);

export const confirmUpdateFinishedBookFromBookList= createAction(
  '[Books Search Results] Update finished from books',
  props<{ item: Book }>()
);

export const failedUpdateFinishedBookFromBookList= createAction(
  '[Books Search Results] Update finished from books',
  props<{ item: Book }>()
);




