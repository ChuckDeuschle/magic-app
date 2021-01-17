import { Component, OnInit } from '@angular/core';
import { DECKS } from '../decks';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.css']
})
export class DecksComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  decks = DECKS;

  ngOnInit(): void {
  }

}

