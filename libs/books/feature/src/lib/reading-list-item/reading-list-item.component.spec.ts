import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { createReadingListItem, SharedTestingModule } from '@tmo/shared/testing';

import { ReadingListItemComponent } from './reading-list-item.component'
import { BooksFeatureModule } from '@tmo/books/feature';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReadingListItem } from '@tmo/shared/models';

describe('ReadingListItemComponent', () => {
  let debugEl: DebugElement;
  let component: ReadingListItemComponent;
  let fixture: ComponentFixture<ReadingListItemComponent>;

  const readingListItem: ReadingListItem = {
    authors: ["Benjamin Aumaille"],
    bookId: "wsflfIQFh6cC",
    coverUrl: "http://books.google.com/books/content?id=wsflfIQFh6cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description: "D C : \\ <b>javascript</b> Spanish \\ Progra . . . GOT Button VBScript Button <b>JavaScript</b> <br>\nButton VBScript Button <b>JavaScript</b> VBScript : Cuadro de mensaje Microsoft <br>\nInternet Explorer VBScript ! <b>JavaScript</b> Aceptar [ Acepta 29 MiPCIE e PMPC Caso<br>\n&nbsp;...",
    isAdded: false,
    publishedDate: "2000-01-01T00:00:00.000Z",
    publisher: "Ediciones ENI",
    title: "JavaScript y VBScript"
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingListItemComponent ], 
      imports: [BooksFeatureModule, SharedTestingModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListItemComponent);
    component = fixture.componentInstance;
    component.readingListItem = readingListItem;
    debugEl = fixture.debugElement.query(By.css('reading-list-item'));
    fixture.detectChanges();
  });

  it('must be defined', () => {
    expect(component).toBeDefined();
  });

});

