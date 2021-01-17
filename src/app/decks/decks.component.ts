import { Component, OnInit } from '@angular/core';
import { DECKS } from '../decks';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent implements OnInit {

  constructor() { }

  decks = DECKS;

  ngOnInit(): void {
  }

}

