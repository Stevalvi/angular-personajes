// Este archivo no es más que un agrupador donde vamos a tener la definición de nuestros componentes del counter.

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";




// Para que sea un módulo de angular se coloca el @NgModule

@NgModule({ // Acá importamos nuestros elementos que tienen la funcionalidad de nuestro counter, lo declaramos dentro de declarations
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [ // Con esto le decimos al mundo exterior que puede consumir este counter component, de esta forma podemos usarlo desde otros módulos
    HeroComponent,
    ListComponent,
  ],
  imports: [ // CommonModule es algo propio de angular, esto nos permite poder usar los *NgIf de nuestro componentes y que al ejecutar la aplicación se ejecuten correctamente, ya que sin este CommonModule, la aplicación no muestra ni ejecuta esos *NgIf de nuestros componentes.
    CommonModule,
  ]
})
export class HeroesModule {}
