import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'cris-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  datos: any = [];
  //  datosmenu: NbMenuItem[];
    constructor(private backendServ: BackendService) {
    }
  
  ngOnInit() {
    this.misServicos();
  }
  misServicos() {
    const idPersona = 100;
    const params = {
      id_a: 's',
      nombre: 'Cristian',
    }
    this.backendServ.getAll(idPersona, params).subscribe(res => {
      this.datos = res.data || [];
      console.log(this.datos, 'hola');
    });
  }

}
