import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { GameComponent } from './pages/game/game.component';
import { PaystripeComponent } from './pages/paystripe/paystripe.component';

export const routes: Routes = [
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'game',
    component: GameComponent
},
{
    path: 'pay',
    component: PaystripeComponent
}
];
