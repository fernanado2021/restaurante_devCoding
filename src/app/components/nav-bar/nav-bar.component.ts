import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../service/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  s = inject(UsuariosService)
  
  

  
  tipo=localStorage.getItem('tipo')

  deslogin(){
    localStorage.setItem('token',"false")
    localStorage.setItem('tipo',"0")
    window.location.href='login'
  }

  tipo0(){
    localStorage.setItem('tipo',"0") 
  }
 

}
