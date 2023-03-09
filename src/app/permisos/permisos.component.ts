import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {

  permisos: any;

  constructor(private servicio: ClientesService) { }

  async ngOnInit(): Promise<void> {

    this.permisos = [];
    let respuesta = await this.servicio.TraerPermisos();
    this.permisos = respuesta
  }

}
