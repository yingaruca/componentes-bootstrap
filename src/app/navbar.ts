import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-demo',
  standalone: true,
  template: `<div class="component-section">

  <div class="component-header">
    <span class="component-number">01</span>
    <h2 class="component-title">Navbar</h2>
  </div>

  <p class="component-desc">
    Barra de navegación responsiva que permite organizar enlaces, logos y menús
    dentro de una página web. Es uno de los componentes más usados porque
    permite navegar entre secciones o entre diferentes páginas del sitio.
  </p>

  <!-- SECCIÓN ¿QUÉ ES? -->
  <h3 class="component-title mt-4" style="font-size:1.3rem;">¿Qué es?</h3>

  <p class="component-desc">
    Es una barra de navegación responsiva que permite organizar enlaces,
    logos y menús dentro de una página web.
  </p>

  <!-- CARACTERÍSTICAS -->
  <h3 class="component-title mt-4" style="font-size:1.3rem;">Características</h3>

  <ul class="feature-list">
    <li>Se colapsa en móviles con menú hamburguesa</li>
    <li>Cuenta con soporte para logos y marcas</li>
    <li>Soporta dropdowns (menús desplegables)</li>
    <li>Puede incluir formularios (barra de búsqueda)</li>
    <li>Tiene múltiples esquemas de color</li>
  </ul>

  <!-- DEMO FUNCIONAL -->
  <nav class="navbar navbar-expand-lg bg-dark rounded mt-4">
    <div class="container-fluid">
      <a class="navbar-brand text-white">DemoBrand</a>

      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#demoNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="demoNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link text-white">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- CLASES PRINCIPALES -->
  <h3 class="component-title mt-5" style="font-size:1.3rem;">Clases principales</h3>

  <ul class="feature-list">
    <li><code>.navbar</code> (Contenedor principal)</li>
    <li><code>.navbar-brand</code> (Logo o nombre)</li>
    <li><code>.navbar-toggler</code> (Botón hamburguesa)</li>
    <li><code>.navbar-collapse</code> (Contenido que se colapsa)</li>
    <li><code>.navbar-nav</code> (Lista de enlaces)</li>
    <li><code>.nav-item</code> (Elemento de la lista)</li>
    <li><code>.nav-link</code> (Enlace individual)</li>
  </ul>

  <!-- DATO FINAL -->
  <div class="code-block mt-4">
    <div class="code-label">Dato</div>
    <code>
Usualmente se combina con .container o .container-fluid para organizar el contenido.
    </code>
  </div>

</div>
  `
})
export class Navbar{}