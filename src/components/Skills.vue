<template>
  <section class="skills" id="skills">
    <div class="container">
      <div class="section-title">
        <h2>Skills & Technologies</h2>
      </div>
      <div class="skills-grid">
        <div class="skill-category fade-in-up" v-for="(category, index) in skillCategories" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skills-list">
            <span class="skill-badge" v-for="skill in category.skills" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories = ref<SkillCategory[]>([
  {
    name: 'Frontend Frameworks',
    skills: ['Vue.js', 'React', 'AngularJS', 'Vite', 'Next.js']
  },
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python']
  },
  {
    name: 'Styling',
    skills: ['Tailwind CSS', 'SCSS/SASS', 'CSS Modules', 'Styled Components', 'Bootstrap']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'npm', 'Yarn', 'Docker', 'Linux']
  },
  {
    name: 'Development',
    skills: ['REST APIs', 'Web Components', 'Responsive Design', 'Performance Optimization', 'Testing']
  },
  {
    name: 'Other Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Learning Mindset', 'Agile/Scrum']
  }
])
</script>

<style scoped>
.skills {
  background: rgba(10, 24, 17, 0.58);
  position: relative;
}

.skills::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-light), transparent);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-category {
  background: var(--panel);
  padding: 30px;
  border-radius: 4px;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(141, 255, 101, 0.12);
  transform: translateY(-4px);
}

.category-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-badge {
  display: inline-block;
  padding: 8px 16px;
  background-color: rgba(141, 255, 101, 0.05);
  color: var(--text-primary);
  border-radius: 2px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: 1px solid var(--border-light);
}

.skill-badge:hover {
  background-color: var(--primary);
  color: white;
  transform: scale(1.05);
  border-color: var(--primary);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .skill-category {
    padding: 20px;
  }

  .category-title {
    font-size: 1.1rem;
  }
}
</style>
