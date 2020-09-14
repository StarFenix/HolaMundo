import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
  
  alumno: any = {
    nombre: "Jazmín",
    apellido: "Santiago",
    edad: 21
  }
  imagen: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/1200px-Facebook_Messenger_4_Logo.svg.png";
  inputNuevo: string = "Soy un input :v"

  email: string = ''
  password: string = ''

  constructor() { }

  ngOnInit(): void {
    
  }

  
  iniciar(evento){
    if(evento.key == "Enter"){
      console.log("Ingresando al sistema")
    }
    
  }

  llamarAlert(){
    alert("Has presionado doble clic")
  }

  escribirModelo(){
    console.log(this.password)
  }

  escribirCorreo(){
    this.password = this.email
    console.log(this.email)
    console.log(this.password)
  }

  escribir(evento){
    console.log(evento.target.value)
  }

  coloreaFondo(evento){
    evento.srcElement.style.background = "cyan"
  }

  cambiarTam(evento){
    evento.srcElement.style.width = "500px"
    evento.srcElement.style.height = "200px"
    evento.srcElement.style.border ="1px solid red"
  }

  incrementarTam(evento){
    evento.srcElement.style.width = "300px"
    evento.srcElement.style.height = "100px"
    evento.srcElement.style.border ="1px solid purple"
  }
}
