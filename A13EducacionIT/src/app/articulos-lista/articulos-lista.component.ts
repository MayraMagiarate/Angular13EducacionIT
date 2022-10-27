import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {

  constructor() { }
  descripcion:string="Este es el componente ArticulosLista";
  ngOnInit(): void {
  }

}
