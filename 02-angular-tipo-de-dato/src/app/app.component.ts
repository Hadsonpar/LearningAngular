import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02-angular-tipo-de-dato';

  //Tipo de datos:

  numero:number=12;
  cadena:string="Hola Devs";
  condicion:boolean=true;
  lista:number[] = [1,2,3,4,5];
  //acepto todo tipo de datos, incluyendo arreglos y objetos
  cadenaany:any = 'Hola Devs, soy un tipo de dato ANY';
  objetoany:any = {nombre:'Hadson', apellidos:"Paredes Cordova", edad:'36'};

  ngOnInit(): void{
    this.cadena+=" bienvenido al mundo Angular";
    this.numero=this.numero+8;
    this.lista=[this.numero, 8]
  }c
}

function holadev():void {
  console.log("Esto es una funcion");    
}