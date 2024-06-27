import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName():string { // Los get son un método
    return this.name.toUpperCase();
  }

  // Este método va a juntar lo que es el nombre y el age
  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  // Estos métodos se agregarán a los botones para cambiar esos valores cuando demos click
  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }
}
