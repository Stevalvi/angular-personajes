// Este archivo no es más que un agrupador donde vamos a tener la definición de nuestros componentes del counter.

import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


// Para que sea un módulo de angular se coloca el @NgModule

@NgModule({ // Acá importamos nuestros elementos que tienen la funcionalidad de nuestro counter, lo declaramos dentro de declarations
  declarations: [
    CounterComponent
  ],
  exports: [ // Con esto le decimos al mundo exterior que puede consumir este counter component, de esta forma podemos usarlo desde otros módulos
    CounterComponent
  ]
})
export class CounterModule {}
