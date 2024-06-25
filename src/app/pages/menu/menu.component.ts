import { Component, inject } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,FormsModule,CurrencyPipe,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  servicio = inject(OrdersService)
  
  cartItems: any[] = [];
  total: number = 0;
  articulos : any;
  products: any[] = [];

  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.articulos = p
    )

    )

  }

  eliminar(id:any){
    this.servicio.deletePersonalID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
  Preciomin = 0
  
  Preciomax = 500
  
 
 

  
  

}
