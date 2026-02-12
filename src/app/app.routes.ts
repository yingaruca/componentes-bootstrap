import { Routes } from '@angular/router';
import { Home } from    './home';
import { Navbar} from './navbar';
import { Offcanvas } from './offcanvas';
import { CloseButton } from './closebutton';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'navbar', component: Navbar },
  { path: 'offcanvas', component: Offcanvas},
  { path: 'closebutton', component: CloseButton }
];