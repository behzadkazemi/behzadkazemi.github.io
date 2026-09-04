<template>
  <section class="projects" id="projects">
    <div class="container">
      <div class="section-title">
        <h2>Featured Projects</h2>
      </div>
      <div class="projects-grid">
        <div class="project-card fade-in-up" v-for="(project, index) in projects" :key="index" :style="{ animationDelay: `${index * 0.15}s` }">
          <div class="project-image">
            <div class="image-placeholder">{{ project.icon }}</div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span class="tech-badge" v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="project-link">
                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              <a v-if="project.live" :href="project.live" target="_blank" rel="noopener noreferrer" class="project-link live">
                <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Live
              </a>
          </div>
        </div>
      </div>
      </div>
      <div class="more-projects">
        <p>Interested in more? Check out my <a href="https://github.com/behzadkazemi" target="_blank" rel="noopener noreferrer">GitHub profile</a> for additional projects.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  title: string
  description: string
  icon: string
  technologies: string[]
  github?: string
  live?: string
}

const projects = ref<Project[]>([
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with Vue 3 and TypeScript. Showcases projects, skills, and experience with a smooth, animated user interface.',
    icon: '💼',
    technologies: ['Vue 3', 'TypeScript', 'Vite', 'CSS3'],
    github: 'https://github.com/behzadkazemi/behzadkazemi.github.io',
    live: 'https://behzadkazemi.github.io'
  },
  {
    title: 'a&o Hostels Portal',
    description: 'Internal customer portal featuring responsive design and enhanced functionality. Built with modern web technologies to improve user experience and performance.',
    icon: '🏨',
    technologies: ['Vue.js', 'TypeScript', 'REST API', 'SCSS'],
    github: '',
    live: ''
  },
  {
    title: 'Avodaq Internal Portal',
    description: 'Innovative internal portal for a software development company, featuring complex data visualization and real-time updates. Optimized for performance and usability.',
    icon: '⚙️',
    technologies: ['React', 'TypeScript', 'Redux', 'API Integration'],
    github: '',
    live: ''
  },
  {
    title: 'Web Development Projects',
    description: 'Collection of web projects demonstrating proficiency in HTML5, CSS3, and JavaScript. Includes responsive design implementations and interactive features.',
    icon: '🌐',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: 'https://github.com/behzadkazemi',
    live: ''
  }
])
</script>

<style scoped>
.projects {
  background: rgba(10, 24, 17, 0.58);
  position: relative;
}

.projects::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-light), transparent);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.project-card {
  background: var(--panel);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  border-color: var(--primary);
  box-shadow: 0 15px 40px rgba(37, 99, 235, 0.15);
  transform: translateY(-8px);
}

.project-image {
  width: 100%;
  height: 200px;
  background: radial-gradient(circle at 50% 20%, rgba(141, 255, 101, 0.3), transparent 38%), linear-gradient(135deg, #122f20, #07100d);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-image::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  animation: shine 3s infinite;
}

.image-placeholder {
  font-size: 80px;
  z-index: 1;
  animation: float 3s ease-in-out infinite;
}

.project-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-content h3 {
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.project-description {
  flex-grow: 1;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tech-badge {
  display: inline-block;
  padding: 4px 12px;
  background-color: rgba(141, 255, 101, 0.08);
  color: var(--primary);
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  border-top: 1px solid var(--border-light);
  padding-top: 20px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background-color: rgba(141, 255, 101, 0.08);
  color: var(--primary);
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.project-link:hover {
  background-color: var(--primary);
  color: white;
  transform: translateX(4px);
}

.project-link.live {
  background-color: rgba(32, 201, 151, 0.12);
  color: var(--success);
}

.project-link.live:hover {
  background-color: var(--success);
  color: white;
}

.icon {
  width: 16px;
  height: 16px;
}

.more-projects {
  text-align: center;
  padding: 40px;
  background: var(--panel);
  border-radius: 4px;
  border: 2px dashed var(--border-light);
}

.more-projects p {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.more-projects a {
  font-weight: 600;
  color: var(--primary);
}

.more-projects a:hover {
  text-decoration: underline;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    max-width: 100%;
  }

  .project-content {
    padding: 20px;
  }
}
</style>
