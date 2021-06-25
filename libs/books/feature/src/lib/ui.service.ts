import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionMessageComponent } from './action-message/action-message.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private drawer: MatDrawer;

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
    console.log('this drawer', this.drawer)
  }

  toggle(): void {
      this.drawer.toggle();
  }

  openActionMessage(item: any, action: string) {
    this._snackBar.openFromComponent(ActionMessageComponent, {
      duration: 4000,
      data: {
        item: item,
        action: action
      }
    })
  }
}
