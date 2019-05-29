import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public usuarioServices: UsuarioService) {
    this.usuarioServices.obtenerUsuario()
        .subscribe( resp => {
      console.log(resp);
    }, err => { console.log('error en el component', err);
    });
  }

}
