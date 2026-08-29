<template>
  <section class="experience" id="experience">
    <div class="container">
      <div class="section-title">
        <h2>Work Experience</h2>
      </div>
      <div class="timeline">
        <div class="timeline-item fade-in-up" v-for="(job, index) in jobs" :key="index" :style="{ animationDelay: `${index * 0.15}s` }">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="job-header">
              <div class="job-title">
                <h3>{{ job.title }}</h3>
                <p class="company">{{ job.company }}</p>
              </div>
              <div class="job-period">
                <span class="period">{{ job.period }}</span>
                <span class="duration">{{ job.duration }}</span>
              </div>
            </div>
            <p class="job-location">📍 {{ job.location }} · {{ job.type }}</p>
            <div class="job-description">
              <p v-for="(desc, i) in job.description" :key="i">{{ desc }}</p>
            </div>
            <div class="job-tags">
              <span class="tag" v-for="tech in job.technologies" :key="tech">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Job {
  title: string
  company: string
  period: string
  duration: string
  location: string
  type: string
  description: string[]
  technologies: string[]
}

const jobs = ref<Job[]>([
  {
    title: 'Frontend Developer',
    company: 'a&o Hostels',
    period: 'Oct 2025 – Present',
    duration: '11 months',
    location: 'Berlin, Deutschland',
    type: 'Hybrid',
    description: [
      'Develop responsive and user-friendly frontend interfaces for the a&o Hostels web platform',
      'Collaborate with cross-functional teams to translate design requirements into functional code',
      'Optimize application performance and ensure compatibility across browsers and devices'
    ],
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'REST APIs']
  },
  {
    title: 'Software Developer (Frontend)',
    company: 'Avodaq AG',
    period: 'Jan 2024 – Sept 2025',
    duration: '1 year 9 months',
    location: 'Berlin, Deutschland',
    type: 'Remote',
    description: [
      'Developed and innovated an internal portal for customers, enhancing functionality and usability',
      'Built responsive components using modern frontend technologies',
      'Improved application performance and user experience through optimization techniques',
      'Participated in code reviews and maintained high code quality standards'
    ],
    technologies: ['React', 'TypeScript', 'JavaScript', 'SCSS', 'API Integration']
  },
  {
    title: 'Web Content Developer',
    company: 'Teleperformance',
    period: 'Dec 2022 – Jan 2024',
    duration: '1 year 2 months',
    location: 'Berlin, Deutschland',
    type: 'On-site',
    description: [
      'Supported team in analyzing data and web content',
      'Gained foundational experience in web development and content management',
      'First professional role in Germany, building strong technical foundation'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Analysis']
  }
])
</script>

<style scoped>
.experience {
  background-color: var(--bg-white);
  position: relative;
}

.experience::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-light), transparent);
}

.timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--primary), var(--secondary));
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

.timeline-marker {
  position: absolute;
  left: -60px;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px #f9fafb, 0 0 0 8px var(--primary);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker {
  transform: scale(1.3);
  box-shadow: 0 0 0 4px #f9fafb, 0 0 0 8px var(--primary), 0 0 20px rgba(37, 99, 235, 0.5);
}

.timeline-content {
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 100%);
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
  transform: translateX(10px);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.job-title h3 {
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.company {
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary);
  margin: 0;
}

.job-period {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.period {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.duration {
  font-size: 0.85rem;
  color: var(--text-light);
}

.job-location {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.job-description {
  margin-bottom: 20px;
}

.job-description p {
  margin-bottom: 10px;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
}

.job-description p::before {
  content: '•';
  color: var(--primary);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  display: inline-block;
  padding: 6px 14px;
  background-color: #e0e7ff;
  color: var(--primary);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: var(--primary);
  color: white;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }

  .timeline::before {
    left: 0;
  }

  .timeline-marker {
    left: -40px;
  }

  .timeline-content {
    padding: 20px;
  }

  .job-header {
    flex-direction: column;
    gap: 10px;
  }

  .job-period {
    text-align: left;
  }

  .job-title h3 {
    font-size: 1.1rem;
  }
}
</style>
