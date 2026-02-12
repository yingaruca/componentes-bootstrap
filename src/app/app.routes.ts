import { Routes } from '@angular/router';
import { Home } from './home';
import { Navbar } from './components/navbar/navbar';
import { Offcanvas } from './components/offcanvas/offcanvas';
import { CloseButton } from './components/closebutton/closebutton';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'navbar', component: Navbar },
  { path: 'offcanvas', component: Offcanvas },
  { path: 'closebutton', component: CloseButton }
];