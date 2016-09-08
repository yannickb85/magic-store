import { Component, OnInit }        from '@angular/core';

import { Card }             from './card';
import { CardService }      from './card.service';

@Component({
    selector: 'cards-list',
    template:`
        <h2>My Cards</h2>
        <ul class="heroes">
        <li *ngFor="let card of cards">
            <span class="badge">{{card.id}}</span> {{card.name}}
        </li>
        </ul>
    `,
    styleUrls: ['app/card/cards.component.css'],
    providers: [ CardService ]
})
export class CardsComponent implements OnInit { 
    cards: Card[];

    constructor(private cardService: CardService) {}

    getCards(): void {
        this.cardService.getCards().then(cards => this.cards = cards);
    }

    ngOnInit(): void {
        this.getCards();
    }
}