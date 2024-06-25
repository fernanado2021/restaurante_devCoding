import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-suscripcion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suscripcion.component.html',
  styleUrl: './suscripcion.component.css'
})
export class SuscripcionComponent {
  servicio = inject(UsuariosService)
  email: any
  password: any
  edad:any
  genero:any
  roles:any
  token: any
  

  registro(datos: any) {
    this.servicio.postUser2(datos.value).subscribe()
    window.location.href='login'
  }
}
