import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

interface Skill {
  name: string;
  image: string;
  level: number;
  category: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, CardModule, BadgeModule, PanelModule, DialogModule, ButtonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  isMobile = false;
  selectedSkill: Skill | null = null;
  isModalOpen = false;
  
  skills: Skill[] = [
    {
      name: 'Python',
      image: 'assets/imagenes/python logo.png',
      level: 3,
      category: 'Backend',
      description: 'Currently learning more'
    },
    {
      name: 'TypeScript',
      image: 'assets/imagenes/typescript logo.png',
      level: 2,
      category: 'Frontend',
      description: 'Basic knowledge'
    },
    {
      name: 'PostgreSQL',
      image: 'assets/imagenes/postgresql logo.png',
      level: 2,
      category: 'Database',
      description: 'Basic knowledge'
    },
    {
      name: 'Chroma',
      image: 'assets/imagenes/Chroma logo.png',
      level: 3,
      category: 'Database',
      description: 'Currently learning more'
    },
    {
      name: 'Gradio',
      image: 'assets/imagenes/Gradio logo.png',
      level: 3,
      category: 'Tools',
      description: 'Currently learning more'
    },
    {
      name: 'LangChain',
      image: 'assets/imagenes/langchain logo.png',
      level: 3,
      category: 'Tools',
      description: 'Currently learning more'
    },
    {
      name: 'Java',
      image: 'assets/imagenes/java logo.png',
      level: 2,
      category: 'Backend',
      description: 'Basic knowledge'
    },
    {
      name: 'OpenAI',
      image: 'assets/imagenes/OpenAI logo.png',
      level: 3,
      category: 'Tools',
      description: 'Currently learning more'
    },
    {
      name: 'JavaScript',
      image: 'assets/imagenes/javascript logo.png',
      level: 2,
      category: 'Frontend',
      description: 'Basic knowledge'
    },
    {
      name: 'Hugging Face',
      image: 'assets/imagenes/Hugging Face logo.png',
      level: 3,
      category: 'Tools',
      description: 'Currently learning more'
    },
    {
      name: 'HTML',
      image: 'assets/imagenes/html logo.png',
      level: 4,
      category: 'Frontend',
      description: 'Currently learning more'
    },
    {
      name: 'CSS',
      image: 'assets/imagenes/css logo.png',
      level: 4,
      category: 'Frontend',
      description: 'Currently learning more'
    },
    {
      name: 'Azure',
      image: 'assets/imagenes/Azure logo.png',
      level: 1,
      category: 'Cloud',
      description: 'Currently learning'
    }
  ];

  ngOnInit() {
    this.checkScreenSize();
  }

  ngOnDestroy() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    } else {
      this.isMobile = false; // Default value for SSR
    }
  }

  onSkillHover(skill: Skill): void {
    // Only show hover effects on desktop if modal is not open
    if (!this.isMobile && !this.isModalOpen) {
      // Optional: Add subtle hover effects without opening modal
    }
  }

  onSkillLeave(): void {
    // Close modal and reset selection
    this.selectedSkill = null;
    this.isModalOpen = false;
  }

  onSkillClick(skill: Skill): void {
    // Open modal with skill details for both mobile and desktop
    this.selectedSkill = skill;
    this.isModalOpen = true;
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Frontend': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'Backend': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'Database': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'AI/ML': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'DevOps': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'Cloud': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'Tools': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    };
    return colors[category] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  }

  getProficiencyLevel(level: number): string {
    const levels = ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'];
    return levels[level - 1] || 'Beginner';
  }

  getAverageSkillLevel(): string {
    const average = this.skills.reduce((sum, skill) => sum + skill.level, 0) / this.skills.length;
    return average.toFixed(1);
  }

  getExpertSkillsCount(): number {
    return this.skills.filter(skill => skill.level >= 4).length;
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  getSkillsInCategory(category: string): number {
    return this.skills.filter(skill => skill.category === category).length;
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString();
  }
}
