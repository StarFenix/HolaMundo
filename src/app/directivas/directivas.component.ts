import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre: string;
  stock: number;
  fabricante: string;
  caducidad: Date;
  importante: boolean;
  texto: boolean;
}

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {
  cargando: boolean = true;
  nombres: Array<string> = ["María", "Juan", "Pedro", "José"];
  pestana: string=""
  productos: Array<Producto>=[
    {
      nombre: "Galletas",
      stock: 100,
      fabricante: "Gamesa",
      caducidad: new Date("04/12/2020"),
      importante: true,
      texto: false
    },
    {
      nombre: "Papas",
      stock: 10,
      fabricante: "Sabritas",
      caducidad: new Date("12/11/2020"),
      importante: false,
      texto: true
    },
    {
      nombre: "Jugo",
      stock: 170,
      fabricante: "Jumex",
      caducidad: new Date("09/23/2022"),
      importante: true,
      texto: false
    }

  ]
 
  mostrarCuadrado: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  alternar(){
    this.cargando= !this.cargando;
  }

  cambiarPestana(pestana: string){
    this.pestana = pestana;
  }

  alternarFondo(){
    this.mostrarCuadrado = !this.mostrarCuadrado
   }
}
