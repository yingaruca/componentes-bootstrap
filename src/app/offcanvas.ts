import { Component } from '@angular/core';

@Component({
  selector: 'app-offcanvas',
  standalone: true,
  template: `
<div class="component-section">

  <div class="component-header">
    <span class="component-number">02</span>
    <h2 class="component-title">Offcanvas</h2>
  </div>

  <!-- ¿QUÉ ES? -->
  <h3 class="component-title mt-3" style="font-size:1.3rem;">¿Qué es?</h3>

  <p class="component-desc">
    Es un panel lateral deslizante que aparece desde un borde de la pantalla.
    Se usa mayormente en menús en dispositivos móviles, paneles de configuración,
    carrito de compra o contenido secundario.
  </p>

  <!-- CARACTERÍSTICAS -->
  <h3 class="component-title mt-4" style="font-size:1.3rem;">Características</h3>

  <ul class="feature-list">
    <li>Se puede deslizar desde arriba, abajo, izquierda o derecha</li>
    <li>Fondo oscuro opcional (backdrop)</li>
    <li>Muy bueno para navegación móvil</li>
    <li>Ideal para contenido secundario</li>
    <li>Se puede cerrar con botón o tecla ESC</li>
  </ul>

  <!-- BOTÓN DEMO -->
  <button class="demo-cta mt-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demoOffcanvas">
    Abrir ejemplo
    <span>→</span>
  </button>

  <!-- OFFCANVAS FUNCIONAL -->
  <div class="offcanvas offcanvas-end"
       tabindex="-1"
       id="demoOffcanvas">

    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Ejemplo Offcanvas</h5>
      <button type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas">
      </button>
    </div>

    <div class="offcanvas-body">
      <p>Este es un ejemplo funcional de Offcanvas.</p>
      <p>Puedes cerrarlo con:</p>
      <ul>
        <li>Botón de cierre</li>
        <li>Tecla ESC</li>
        <li>Click fuera</li>
      </ul>
    </div>
  </div>

  <!-- CLASES PRINCIPALES -->
  <h3 class="component-title mt-5" style="font-size:1.3rem;">Clases principales</h3>

  <ul class="feature-list">
    <li><code>.offcanvas</code> (Contenedor principal)</li>
    <li><code>.offcanvas-start</code> (Desde la izquierda)</li>
    <li><code>.offcanvas-end</code> (Desde la derecha)</li>
    <li><code>.offcanvas-bottom</code> (Desde abajo)</li>
    <li><code>.offcanvas-header</code> (Encabezado)</li>
    <li><code>.offcanvas-body</code> (Contenido)</li>
  </ul>

  <!-- DATO -->
  <div class="code-block mt-4">
    <div class="code-label">Dato</div>
    <code>
Funciona con atributos como data-bs-toggle="offcanvas"
y data-bs-target="#id".
    </code>
  </div>

</div>
  `
})
export class Offcanvas{}