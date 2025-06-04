import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  openSocialMedia(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }

  openAssistant() {
    // Funcionalidad del asistente virtual - se puede implementar más tarde
    if (isPlatformBrowser(this.platformId)) {
      alert('¡Próximamente! Asistente virtual en desarrollo 🤖');
    }
  }

  downloadCV() {
    if (isPlatformBrowser(this.platformId)) {
      const link = document.createElement('a');
      link.href = 'assets/cv/EstebanOrtizRestrepo-CV.pdf';
      link.download = 'EstebanOrtizRestrepo-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
