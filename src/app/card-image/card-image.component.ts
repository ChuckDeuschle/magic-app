import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Cards } from 'scryfall-sdk';

import { DECKS } from '../decks';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { 
      router.events.pipe(
        filter(navEnd => navEnd instanceof  NavigationEnd))
        .subscribe((navEnd: NavigationEnd) => {
          const stuff2 = router.parseUrl(navEnd.url);
          const segments = stuff2.root.children[PRIMARY_OUTLET].segments;
          this.set = segments[1].path;
          this.id  = +segments[2].path;
          this.getCardImage();
        })
    }

  decks = DECKS;
  cardImage;
  set;
  id;

  persist(key: string, value: any) {
    this.localStorageService.set(key, value);
  }

  ngOnInit(): void {
    this.set = this.localStorageService.get('set');
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getCardImage();
  }

  onChange(): void {
    this.set = this.localStorageService.get('set');
    
    if (this.id == 0 && this.set != "")
    {
      Cards.bySet(this.set, 1).then(result => this.cardImage = result.image_uris.normal);
    }
    else
    {
      Cards.bySet(this.set, this.id).then(result => this.cardImage = result.image_uris.normal);
    }
  }

  getCardImage(): void {
    if (this.id == 0 && this.set != "")
    {
      Cards.bySet(this.set, 1).then(result => this.cardImage = result.image_uris.normal);
    }
    else
    {
      Cards.bySet(this.set, this.id).then(result => this.cardImage = result.image_uris.normal);
    }
  }
}
