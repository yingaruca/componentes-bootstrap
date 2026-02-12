import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarLayout } from './navbar-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarLayout],
  template: `
<app-navbar-layout></app-navbar-layout>

<div class="container-custom" style="margin-top:120px;">
  <router-outlet></router-outlet>
</div>
`
})
export class App {}