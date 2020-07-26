import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'cris-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {
  title = 'demo-prueba';
  datosmenu: NbMenuItem[] = [];
  constructor(private backendServ: BackendService) {

  }
  ngOnInit(): void {
    this.MENU();
  }
  MENU() {
    this.backendServ.getMenu$().subscribe(res => {
      this.datosmenu = res.data || [];
      console.log(this.datosmenu,'ssssssss');
      });
  }
}
