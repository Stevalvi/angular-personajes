import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface'; // Importamis nuestra interface
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  constructor( private dbzService: DbzService ) {} // Esto hace la inyección de dependencias, al dejarlo como public va a habilitar en todo mi componente de MainPage toda la información que esté siendo utilizada en nuestro servicio DbzService. Si lo hacemos private no vamos a tener acceso a ese html, osea a esa data del main-page.component.html y nos sale error. Las buenas prácticas dicen que debemos hacer nuestro servicio privado. Al hacerlo privado no podemos acceder al servicio desde otros componentes o dicho de otra forma (archivos) que importen nuestro MainPageComponent.


  // Esta es una forma de resolver eso:

  get characters(): Character[] { // Ese get characters va a regresar un arreglo de tipo Characters
    return [...this.dbzService.characters]; // Este get regresa esta copia de esos personajes que tengamos ahí
  }

  onDeleteCharacter( id: string ): void { // No va a regresar nada, por eso el void, pero si recibe el id de tipo string
    this.dbzService.deleteCharacterById( id ); // Va a eliminar ese personaje por el id
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.addCharacter( character ); // Agregar ese nuevo personaje
  }

}
