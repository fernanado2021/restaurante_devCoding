
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { Error404Component } from './pages/error404/error404.component';
import { MenuComponent } from './pages/menu/menu.component';
import { adminGuard, meseroGuard } from './guards/guardianes.guard';
import { EditarMenuComponent } from './pages/editar-menu/editar-menu.component';
import { EditarMeserosComponent } from './pages/editar-meseros/editar-meseros.component';
import { PaymentComponent } from './pages/pay/pay.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},

    { path: 'home', component: HomeComponent },
    { path: 'suscripcion', component: SuscripcionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ordenes', component: OrdenesComponent, canActivate: [meseroGuard] },
    { path: 'pedidos', component: PedidosComponent, canActivate: [meseroGuard] },
    { path: 'menu', component: MenuComponent, canActivate: [adminGuard] },
    { path: 'pay', component: PaymentComponent, canActivate: [meseroGuard] },
    { path: 'editarM/:idEditm', component: EditarMenuComponent, canActivate: [adminGuard] },
    { path: 'editar/:idEditar', component: EditarMeserosComponent, canActivate: [adminGuard] },
    { path: '**', component: Error404Component },

];
