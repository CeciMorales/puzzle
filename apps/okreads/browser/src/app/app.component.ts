import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { UiService } from 'libs/books/feature/src/lib/ui.service';

@Component({
  selector: 'tmo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    //private uiService: UiService
  ) {

  }
  //@ViewChild('drawer') public drawer: MatDrawer;

  ngAfterViewInit() {
    //this.uiService.setDrawer(this.drawer);
  }
}
