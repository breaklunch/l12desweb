import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

art={
codigo:null,
descripcion:null,
precio:0
}
articulos = [
  {codigo:1, descripcion:'Coca cola', precio:2.50},
  {codigo:2, descripcion:'Galletas', precio:2.50},
  {codigo:3, descripcion:'Coca cola', precio:2.50},
  {codigo:4, descripcion:'Coca cola', precio:2.50},
  {codigo:5, descripcion:'Coca cola', precio:2.50},
];

  hayRegistros(){
    return this.articulos.length>0;
  }
  borrar(art: { codigo: number; }){
    for(let x=0; x<this.articulos.length;x++)
      if(this.articulos[x].codigo==art.codigo)
      {
          this.articulos.splice(x,1);
          return;
      }
  }
  agregar(){
    for(let x=0;x<this.articulos.length;x++)
    if (this.art.codigo==0){
      alert('Debe ingresar');
      return;
    }
this.articulos.push({codigo:this.art.codigo})
}
}
