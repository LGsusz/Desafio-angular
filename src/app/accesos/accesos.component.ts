import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-accesos',
  templateUrl: './accesos.component.html',
  styleUrls: ['./accesos.component.scss']
})
export class AccesosComponent implements OnInit {

  accesos: any;

  constructor(private servicio: ClientesService) { }

  async ngOnInit(): Promise<void> {

    this.accesos = [];
    let respuesta = await this.servicio.TraerAccesos();
    this.accesos = respuesta
  }
}
