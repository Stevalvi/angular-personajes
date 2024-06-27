import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string; // Va a ser opcional, esto por default va a ser un indefined, pero cuando haya un valor acá, eso quiere decir, que hay un heroe que borramos.

  removeLastHero():void { // Con esto vamos borrando el último elemento de la lista
    this.deletedHero = this.heroNames.pop();
  }
}
