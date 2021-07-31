import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggingComponent } from './pages/logging/logging.component';
import { MainpaigeComponent } from './pages/mainpaige/mainpaige.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  {path: 'login', component: LoggingComponent},
  {path: 'main', component: MainpaigeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
