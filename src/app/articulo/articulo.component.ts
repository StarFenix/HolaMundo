import { Component, OnInit } from '@angular/core';
import { Articulos } from '../models/articulo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  articulo: Array <Articulos> = new Array <Articulos>();
  
  constructor(private ruta: Router) { }

  ngOnInit(): void {
    this.articulo.push(
      {
        nombre: 'Televisión',
        detalle: 'Televisión de 32 pulgadas',
        stock: 40,
        precio: 2900,
        precioMayoreo: 2500
      },
      {
        nombre: 'Licuadora',
        detalle: 'Licuadora Dweei',
        stock: 120,
        precio: 450,
        precioMayoreo: 380
      },
      {
        nombre: 'Impresora',
        detalle: 'Impresora multifuncional',
        stock: 340,
        precio: 3899.99,
        precioMayoreo: 3600
      }
    )
  }

  pasarParam(articuloRecibido: Articulos){
    console.log(articuloRecibido)
    this.ruta.navigate(['detalle', {articulo: JSON.stringify(articuloRecibido) }])
  }

}
