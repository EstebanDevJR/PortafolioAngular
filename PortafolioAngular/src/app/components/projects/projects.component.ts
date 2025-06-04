import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { TimelineModule } from 'primeng/timeline';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';

interface Project {
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
  complexity?: string;
  accuracy?: number;
  commitHash?: string;
  lastUpdate?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardModule, ButtonModule, TagModule, BadgeModule, TimelineModule, PanelModule, ProgressBarModule, TooltipModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'DreamPloy',
      description: 'AI-powered Web app for searching jobs while your job or sleep. Building ...',
      image: 'assets/imagenes/dreamploy.png',
      liveUrl: '',
      sourceUrl: '',
      complexity: 'Expert',
      accuracy: 100,
      commitHash: 'a7f3b2c',
      lastUpdate: '2 days ago'
    },
    {
      title: 'Accountant Assistant AI',
      description: "Intelligent accounting assistant powered by embeddings and vector stores. Features OpenAI API integration, Python backend, Gradio interface, Ollama, and LLaVA image processing for automated financial document analysis.",
      image: 'assets/imagenes/AccountantAsistant.png',
      liveUrl: '',
      sourceUrl: 'https://github.com/EstebanDevJR/Accountant-asistant',
      complexity: 'Intermediate',
      accuracy: 70,
      commitHash: 'e4d9a1f',
      lastUpdate: '1 week ago'
    },
    {
      title: 'Bayesian Network Model',
      description: "Advanced Bayesian Network Model for seismic activity analysis and prediction in Colombia. Implements probabilistic graphical models using Python, Gradio, Pgmpy, matplotlib, pandas, and numpy for geological data processing.",
      image: 'assets/imagenes/BayesianModel.png',
      liveUrl: '',
      sourceUrl: 'https://github.com/EstebanDevJR/BayesianModel',
      complexity: 'Intermediate',
      accuracy: 90,
      commitHash: 'b8c5f2a',
      lastUpdate: '3 weeks ago'
    }
  ];

  private techStacks = {
    'DreamPloy': ['Python', 'React', 'Azure', 'Chroma', 'OpenAI', 'LangChain','FastAPI'],
    'Accountant Assistant AI': ['Python', 'OpenAI', 'Gradio', 'LangChain', 'Ollama'],
    'Bayesian Network Model': ['Python', 'Pgmpy', 'Pandas', 'NumPy', 'Matplotlib']
  };

  openProject(url: string | undefined) {
    if (url && url.trim() !== '') {
      window.open(url, '_blank');
    } else {
      // Show a more professional message
      this.showComingSoonModal();
    }
  }

  private showComingSoonModal() {
    // You could implement a proper modal here
    alert('🚀 Project deployment in progress. Stay tuned for the live demo!');
  }

  getRepoName(title: string): string {
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  }

  getFileName(title: string): string {
    return title.toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^\w_]/g, '');
  }

  getTechStack(projectTitle: string): string[] {
    return this.techStacks[projectTitle as keyof typeof this.techStacks] || ['Python', 'AI/ML'];
  }
}
