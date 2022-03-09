import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  termino : string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  buscar( termino:string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino).subscribe((paises)=>{
      console.log(paises);
      this.paises = paises;

    }, (err)=>{
      this.hayError = true;
      console.log("Error");
      this.paises = [];
      console.info(err);
    });
  }

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
