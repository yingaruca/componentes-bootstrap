import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [RouterModule],
  template: `
<nav class="navbar navbar-expand-lg navbar-custom fixed-top">
  <div class="container-fluid px-4">
    <a class="navbar-brand">Bootstrap</a>

    <ul class="navbar-nav ms-auto align-items-center d-flex flex-row gap-4">
      <li><a class="nav-link" routerLink="/">Inicio</a></li>
      <li><a class="nav-link" routerLink="/navbar">Navbar</a></li>
      <li><a class="nav-link" routerLink="/offcanvas">Offcanvas</a></li>
      <li><a class="nav-link" routerLink="/closebutton">Close Button</a></li>
    </ul>
  </div>
</nav>
  `
})
export class NavbarLayout {}