import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrls: ['./tarea-lista.component.css']
})
export class TareaListaComponent {
  mostrarLista = true; 
   tareas: { nombre: string, costo: string }[] = [
    { nombre: 'Queso', costo: '$ 200' },
    { nombre: 'Pan', costo: '$ 155' },
    { nombre: 'Jamon', costo: '$ 205' },
    
  ];
}

 

