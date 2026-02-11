import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-closebutton',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="component-section">

  <div class="component-header">
    <span class="component-number">03</span>
    <h2 class="component-title">Close Button</h2>
  </div>

  <!-- ¿QUÉ ES? -->
  <h3 class="component-title mt-3" style="font-size:1.3rem;">¿Qué es?</h3>

  <p class="component-desc">
    Es un botón de cierre estandarizado para cerrar componentes como
    modales, alertas y offcanvas.
  </p>

  <!-- CARACTERÍSTICAS -->
  <h3 class="component-title mt-4" style="font-size:1.3rem;">Características</h3>

  <ul class="feature-list">
    <li>Ícono visual sin texto</li>
    <li>Variantes para fondos oscuros</li>
    <li>Accesible con aria-label</li>
    <li>Personalizable con CSS</li>
  </ul>

  <!-- DEMO FUNCIONAL -->
  <div style="margin-top: 1.5rem;">
    <div class="demo-alert alert alert-dark alert-dismissible fade show"
         *ngFor="let alert of alerts">

      <span>{{ alert }}</span>

      <button type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close">
      </button>

    </div>
  </div>

  <!-- CLASES PRINCIPALES -->
  <h3 class="component-title mt-5" style="font-size:1.3rem;">Clases principales</h3>

  <ul class="feature-list">
    <li><code>.btn-close</code> (Botón básico)</li>
    <li><code>.btn-close-white</code> (Para fondos oscuros)</li>
  </ul>

  <!-- ATRIBUTOS IMPORTANTES -->
  <h3 class="component-title mt-4" style="font-size:1.3rem;">Atributos importantes</h3>

  <ul class="feature-list">
    <li><code>data-bs-dismiss="modal"</code></li>
    <li><code>data-bs-dismiss="offcanvas"</code></li>
    <li><code>data-bs-dismiss="alert"</code></li>
    <li><code>aria-label="Close"</code></li>
  </ul>

  <!-- DATO -->
  <div class="code-block mt-4">
    <div class="code-label">Dato</div>
    <code>
No necesita texto porque Bootstrap ya incluye el ícono SVG internamente.
    </code>
  </div>

</div>
  `
})
export class CloseButton {

  alerts = [
    'Esta alerta se puede cerrar',
    'Otra alerta con close button',
    'El botón incluye aria-label="Close" para accesibilidad'
  ];

  close(alert: string) {
    this.alerts = this.alerts.filter(a => a !== alert);
  }
}