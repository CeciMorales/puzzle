import { Component, Inject, OnInit } from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-action-message',
  templateUrl: './action-message.component.html',
  styleUrls: ['./action-message.component.scss']
})
export class ActionMessageComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { 
    this.dataReceived = data;
  }

  dataReceived: any;

  ngOnInit(): void {
  }

}
