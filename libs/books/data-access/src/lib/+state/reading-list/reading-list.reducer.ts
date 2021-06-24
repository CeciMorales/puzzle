import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as ReadingListActions from './reading-list.actions';
import { Book, ReadingListItem } from '@tmo/shared/models';

export const READING_LIST_FEATURE_KEY = 'readingList';

export interface State extends EntityState<ReadingListItem> {
  loaded: boolean;
  error: null | string;
}

export interface ReadingListPartialState {
  readonly [READING_LIST_FEATURE_KEY]: State;
}

export const readingListAdapter: EntityAdapter<ReadingListItem> = createEntityAdapter<
  ReadingListItem
>({
  selectId: item => item.bookId
});

export const initialState: State = readingListAdapter.getInitialState({
  loaded: false,
  error: null,
  selectedBook: null
});

const readingListReducer = createReducer(
  initialState,
  on(ReadingListActions.init, state => {
    return {
      ...state,
      loaded: false,
      error: null,
      selectedBook: null
    };
  }),

  on(ReadingListActions.loadReadingListSuccess, (state, action) => {
    return readingListAdapter.setAll(action.list, {
      ...state,
      loaded: true
    });
  }),

  on(ReadingListActions.loadReadingListError, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),

  on(ReadingListActions.addToReadingList, (state, action) =>
    readingListAdapter.addOne({ 
      bookId: action.book.id,
      ...action.book,
      //
    }, state)
  ),

  on(ReadingListActions.removeFromReadingList, (state, action) =>
    readingListAdapter.removeOne(
      action.item.bookId, 
      state
    )
  ),

  on(ReadingListActions.failedAddToReadingList, (state, action) => {
    return readingListAdapter.removeOne(
      action.book.id, 
      state
    )
  }),

  on(ReadingListActions.failedRemoveFromReadingList, (state, action) => {
    return readingListAdapter.addOne({ 
      bookId: action.item.bookId, 
      ...action.item 
    }, state)
  }),

  on(ReadingListActions.updateFinishedBookFromReadingList, (state, action) => {
    return readingListAdapter.updateOne(
      {
        id: action.item.bookId, 
        changes: { 
          finished: true, 
          finishedDate: action.currentTime,
          ...action.item}
      }, state
    )
    }
  ),

  // ! agregar failed
  on(ReadingListActions.failedUpdateFromReadingList, (state, action) => {
    console.log('failed to update reading list item')
    return null;
  })

);

export function reducer(state: State | undefined, action: Action) {
  return readingListReducer(state, action);
}
