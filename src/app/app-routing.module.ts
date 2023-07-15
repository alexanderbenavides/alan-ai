import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importa los componentes para las rutas
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';

// Define las rutas
const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'login', component: LoginComponent }, // Ruta para "Acerca de"
  { path: 'products', component: ProductsComponent }, // Ruta para "Contacto"
  { path: 'product/:id', component: ProductComponent }, // Ruta para "Contacto"
  { path: '**', pathMatch: 'full', redirectTo: ''}
  // Aquí puedes añadir más rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
