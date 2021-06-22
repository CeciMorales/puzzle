import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Book } from '@tmo/shared/models';
import { SharedTestingModule } from '@tmo/shared/testing';
import { BooksFeatureModule } from '../books-feature.module';
import { BookComponent } from './book.component'

describe('BookComponent', () => {
  let debugEl: DebugElement;
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  const book: Book = {
    authors: ["Benjamin Aumaille"],
    id: "wsflfIQFh6cC",
    coverUrl: "http://books.google.com/books/content?id=wsflfIQFh6cC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description: "D C : \\ <b>javascript</b> Spanish \\ Progra . . . GOT Button VBScript Button <b>JavaScript</b> <br>\nButton VBScript Button <b>JavaScript</b> VBScript : Cuadro de mensaje Microsoft <br>\nInternet Explorer VBScript ! <b>JavaScript</b> Aceptar [ Acepta 29 MiPCIE e PMPC Caso<br>\n&nbsp;...",
    isAdded: false,
    publishedDate: "2000-01-01T00:00:00.000Z",
    publisher: "Ediciones ENI",
    title: "JavaScript y VBScript"
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      imports: [BooksFeatureModule, SharedTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = book;
    debugEl = fixture.debugElement.query(By.css('book'));
    fixture.detectChanges();
  });

  it('must be defined', () => {
    expect(component).toBeDefined();
  });

});
