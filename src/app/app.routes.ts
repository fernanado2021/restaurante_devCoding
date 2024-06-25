
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { Error404Component } from './pages/error404/error404.component';
import { MenuComponent } from './pages/menu/menu.component';
import { loginGuard, meseroGuard } from './guards/guardianes.guard';
import { EditarMenuComponent } from './pages/editar-menu/editar-menu.component';
import { EditarMeserosComponent } from './pages/editar-meseros/editar-meseros.component';
import { PaymentComponent } from './pages/pay/pay.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'suscripcion', component: SuscripcionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'ordenes', component: OrdenesComponent, },
    { path: 'pedidos', component: PedidosComponent, },
    { path: 'menu', component: MenuComponent},
    {path: 'pay', component: PaymentComponent},
    {path: 'editarM/:idEditm', component:EditarMenuComponent},
    {path:'editar/:idEditar', component:EditarMeserosComponent},
    { path: '**', component: Error404Component},
    {path: '', redirectTo:'home', pathMatch:'full'}
    
];
