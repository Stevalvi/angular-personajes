

// Un atajo para crear un component es colocar a seguido del guion medio, osea a- y elegir la opción de component, eso nos crea la estructura

import { Component } from '@angular/core';

// Esta clase se va a transformar en un componente cuando yo utilice el decorador component @component de angular/core
@Component({ // Hacemos la configuración de ese componente
  selector: 'app-counter', // El selector es como queremos utilizar este counter en el html, osea le damos el nombre que queremos, usualmente se recomienda usar un prefijo -
  template: `

      <h3>
      Counter: {{ counter }}
      </h3>

    <button (click)="increaseBy(1)">+1</button> <!--Cuando demos click en ese botón se manda a llamar la función de increaseBy, lo que hace es incrementar ese valor-->
    <button (click)="resetCounter()">Reset</button> <!--Resetear-->
    <button (click)="increaseBy(-1)">-1</button> <!--Decrementar-->



  `
}) // Al usar el componente se necesita un template, hay varias maneras de definirlo, tenemos el template? y el templateUrl? y angular espera que creemos nuestro template en un string

// Debemos importar este CounterComponent en el app.module ya que debe formar parte de un módulo si queremos usarlo en otros archivos
export class CounterComponent {
  public counter: number = 10;

  increaseBy( value: number ): void { // Incrementa el valor dependiendo del valor que recibamos
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
