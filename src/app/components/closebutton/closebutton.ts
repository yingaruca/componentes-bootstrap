import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//Es un componente independiente, significa que no necesita estar dentro de un módulo.”
@Component({
  selector: 'app-closebutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './closebutton.html',
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