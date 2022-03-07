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
  arrayPaises: Country[] = [];

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((paises)=>{
      console.log(paises);
      this.arrayPaises = paises;

    }, (err)=>{
      this.hayError = true;
      console.log("Error");
      this.arrayPaises = [];
      console.info(err);
    });
  }

  constructor(private paisService: PaisService) { }



}
