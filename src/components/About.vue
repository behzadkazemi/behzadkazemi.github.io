<template>
  <section class="about" id="about">
    <div class="container">
      <div class="section-title">
        <h2>About Me</h2>
      </div>
      <div class="about-content grid grid-2">
        <div class="about-text fade-in-up">
          <p>
            I'm a Software Engineer with a Master's degree in IT, based in Berlin with a passion for building elegant digital solutions.
            Beyond coding, I'm also a professional badminton player and a passionate santoor musician, which keeps me creative and focused.
          </p>
          <p>
            At <strong>a&o Hostels</strong>, I'm working as a Frontend Developer, creating responsive and intuitive web interfaces.
            Previously, I contributed to innovative projects at <strong>Avodaq</strong> and gained diverse experience at <strong>Teleperformance</strong>.
          </p>
          <p>
            I thrive in collaborative environments, constantly learning new technologies and pushing the boundaries of what's possible with modern web technologies.
            My goal is to create meaningful digital experiences that make a difference.
          </p>
          <div class="quick-facts">
            <div class="fact">
              <span class="fact-label">Location</span>
              <span class="fact-value">Berlin, Germany 🇩🇪</span>
            </div>
            <div class="fact">
              <span class="fact-label">Current Role</span>
              <span class="fact-value">Frontend Developer at a&o Hostels</span>
            </div>
            <div class="fact">
              <span class="fact-label">Education</span>
              <span class="fact-value">Master's in IT</span>
            </div>
            <div class="fact">
              <span class="fact-label">Interests</span>
              <span class="fact-value">Web Dev, Badminton, Music 🎵</span>
            </div>
          </div>
        </div>
        <div class="about-stats fade-in-up">
          <div class="stat-card">
            <div class="stat-number">5+</div>
            <div class="stat-label">Years of Experience</div>
            <p>Building modern web applications with cutting-edge technologies</p>
          </div>
          <div class="stat-card">
            <div class="stat-number">10+</div>
            <div class="stat-label">Projects Completed</div>
            <p>From startups to established companies, diverse and impactful work</p>
          </div>
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Professional Network</div>
            <p>Connected with talented professionals and tech enthusiasts</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  background-color: transparent;
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-light), transparent);
}

.about-content {
  animation-delay: 0.2s;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: var(--text-secondary);
}

.about-text strong {
  color: var(--primary);
  font-weight: 600;
}

.quick-facts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.fact {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.fact-label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.fact-value {
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation-delay: 0.4s;
}

.stat-card {
  padding: 30px;
  background: linear-gradient(135deg, rgba(17, 39, 28, 0.9), rgba(8, 20, 14, 0.9));
  border-radius: 4px;
  border: 1px solid var(--border-light);
  transition: all 0.3s ease;
  text-align: center;
}

.stat-card:hover {
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(141, 255, 101, 0.12);
  transform: translateY(-4px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 15px;
  display: block;
}

.stat-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .quick-facts {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 20px;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
