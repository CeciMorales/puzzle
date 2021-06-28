import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionMessageComponent } from './action-message/action-message.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

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
