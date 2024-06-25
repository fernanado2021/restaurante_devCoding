import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../service/usuarios.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(UsuariosService)

  email: any
  password: any
  token: any
  tipo: any

  login(formulario:any){
    this.servicio.postUser(formulario.value).subscribe(p =>{
      this.token = p.accessToken
      this.tipo=p.user.roles

                
      if (this.token != '') {
        localStorage.setItem("token", 'true')
        
      }

      if (this.tipo === 'admin') {
        localStorage.setItem("tipo", '1')
      }else{
        localStorage.setItem("tipo", '2')
      }
      
      window.location.reload()

      if(localStorage.getItem('tipo')=='1'){
        window.location.href='pedidos'

      }
       
      if(localStorage.getItem('tipo')=='2'){
        window.location.href= 'gestion-libros'
      }
          

    

    })
  }

  
}
