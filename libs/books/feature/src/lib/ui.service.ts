import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private drawer: MatDrawer;

  constructor() { }

  hola() {
    console.log('holaaaa');
  }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
    console.log('this drawer', this.drawer)
  }

  toggle(): void {
      this.drawer.toggle();
  }
}
