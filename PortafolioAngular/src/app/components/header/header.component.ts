import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() activeSection: string = 'about';
  @Output() sectionChange = new EventEmitter<string>();
  
  isMobileMenuOpen = false;
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.initializeMenuItems();
  }

  initializeMenuItems() {
    this.menuItems = [
      {
        label: 'About',
        command: () => this.navigateToSection('about'),
        styleClass: this.activeSection === 'about' ? 'p-menuitem-active' : ''
      },
      {
        label: 'Skills', 
        command: () => this.navigateToSection('skills'),
        styleClass: this.activeSection === 'skills' ? 'p-menuitem-active' : ''
      },
      {
        label: 'Projects',
        command: () => this.navigateToSection('projects'), 
        styleClass: this.activeSection === 'projects' ? 'p-menuitem-active' : ''
      }
    ];
  }

  navigateToSection(section: string) {
    this.sectionChange.emit(section);
    this.updateActiveMenuItem(section);
    this.closeMobileMenu();
  }

  updateActiveMenuItem(activeSection: string) {
    this.menuItems.forEach(item => {
      item.styleClass = '';
    });
    
    const activeItem = this.menuItems.find(item => 
      item.label?.toLowerCase() === activeSection
    );
    
    if (activeItem) {
      activeItem.styleClass = 'p-menuitem-active';
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  // Update active section from parent
  ngOnChanges() {
    this.updateActiveMenuItem(this.activeSection);
  }
}
