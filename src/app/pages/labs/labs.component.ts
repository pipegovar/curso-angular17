import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]
  name = 'Felipe';
  age = 26;
  disabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Felipe',
    age: 26,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  }

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    console.log(event);
  }

}
