"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var card_service_1 = require('./card.service');
var CardsComponent = (function () {
    function CardsComponent(cardService) {
        this.cardService = cardService;
    }
    CardsComponent.prototype.getCards = function () {
        var _this = this;
        this.cardService.getCards().then(function (cards) { return _this.cards = cards; });
    };
    CardsComponent.prototype.ngOnInit = function () {
        this.getCards();
    };
    CardsComponent = __decorate([
        core_1.Component({
            selector: 'cards-list',
            template: "\n        <h2>My Cards</h2>\n        <ul class=\"heroes\">\n        <li *ngFor=\"let card of cards\">\n            <span class=\"badge\">{{card.id}}</span> {{card.name}}\n        </li>\n        </ul>\n    ",
            styleUrls: ['app/card/cards.component.css'],
            providers: [card_service_1.CardService]
        }), 
        __metadata('design:paramtypes', [card_service_1.CardService])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=cards.component.js.map