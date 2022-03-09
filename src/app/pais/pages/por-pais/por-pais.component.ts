import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino : string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  buscar( termino:string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((paises)=>{
      console.log(paises);
      this.paises = paises;

    }, (err)=>{
      this.hayError = true;
      console.log("Error");
      this.paises = [];
      console.info(err);
    });
  }
  sugerencias(termino:string){
    this.hayError = false;
    this.termino=termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
    .subscribe(
      paises=>this.paisesSugeridos=paises.splice(0,5),
      (err)=>this.paisesSugeridos=[]
    );
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

  constructor(private paisService: PaisService) { }



}
