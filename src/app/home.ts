import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
 <div class="hero">
  <h1>Componentes de Bootstrap</h1>
  <p class="lead">
    Los componentes son bloques de construcción reutilizables que Bootstrap 
    proporciona para construir interfaces modernas rápidamente sin tener 
    que crear todo desde cero.
  </p>
</div>

<div class="component-section">

  <div class="component-header">
    <span class="component-number">00</span>
    <h2 class="component-title">Características</h2>
  </div>

  <ul class="feature-list">
    <li>El diseño responsivo está integrado (Sistema Mobile First)</li>
    <li>Estilos predefinidos y personalizables con CSS</li>
    <li>Compatible con la mayoría de navegadores modernos</li>
    <li>Interactividad gracias a JavaScript (sin mucho código extra)</li>
    <li>Se combinan fácilmente entre sí</li>
  </ul>

  <div class="code-block mt-4">
    <div class="code-label">Nota</div>
    <code>
Sistema Mobile First significa que su desarrollo está pensado primero para móviles.
    </code>
  </div>

</div>
  `
})
export class Home {}