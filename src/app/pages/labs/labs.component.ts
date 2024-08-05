import { Component, signal } from '@angular/core';
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
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio',
  ]);
  name = signal('Felipe');
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
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
