import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { lista } from './mocklist';
@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {

  constructor() { }



articulo:Articulo={id:0,nombre:"mate de madera",descripcion:"capacidad 50ml",precio:450,stock:262};
item=lista;
onSelect(articulo:Articulo){
  console.log("se ha seleccionado el articulo id:"+articulo.id+" Nombre: "+articulo.nombre);
}
tarjVisible=false;
verTarj(){
  this.tarjVisible=true;
}
  ngOnInit(): void {
  }

}
