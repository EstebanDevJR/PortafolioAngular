import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-angular';
  currentSection = 'about';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Detectar la sección actual al cargar la página solo en el browser
    if (isPlatformBrowser(this.platformId)) {
      this.updateCurrentSection();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCurrentSection();
    }
  }

  scrollToSection(section: string) {
    this.currentSection = section;
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(section);
      if (element) {
        const headerHeight = 80; // Altura aproximada del header
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({ 
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${section}" not found`);
      }
    }
  }

  private updateCurrentSection() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const sections = ['about', 'skills', 'projects'];
    const headerHeight = 80;
    const scrollPosition = window.scrollY + headerHeight + 50; // Offset mejorado

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.currentSection = section;
          break;
        }
      }
    }
  }
}
