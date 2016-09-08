import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { routing }          from './routing/app.routing';

import { CardService }      from './card/card.service';
import { CardsComponent }   from './card/cards.component';
import { AppComponent }     from './app.component';

@NgModule({
  imports:      [ BrowserModule, 
                  routing ],
  declarations: [ AppComponent, 
                  CardsComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ CardService ]
})

export class AppModule { }
