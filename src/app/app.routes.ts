
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { Error404Component } from './pages/error404/error404.component';
import { PayComponent } from './pages/pay/pay.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    { path: 'home', component: HomeComponent },
    { path: 'suscripcion', component: SuscripcionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ordenes', component: OrdenesComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'pay', component: PayComponent},

    { path: '**', component: Error404Component},
    
];
