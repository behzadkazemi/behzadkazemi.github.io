<template>
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-content fade-in-up">
        <h1>Hi, I'm Behzad Kazemi</h1>
        <p class="subtitle">Frontend Developer | Software Engineer</p>
        <p class="description">
          I build beautiful and functional web applications using modern technologies like Vue.js, React, and TypeScript.
          Based in Berlin 🇩🇪, I'm passionate about creating seamless user experiences and clean code.
        </p>
        <div class="hero-buttons">
          <a href="#contact" class="btn-primary">Get In Touch</a>
          <a href="https://github.com/behzadkazemi" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            View My Work
          </a>
        </div>
      </div>
      <div class="hero-visual fade-in-down">
        <div class="avatar-container">
          <div class="avatar-placeholder">
            <div class="avatar-icon">👨‍💻</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  z-index: 1;
}

.hero-content {
  animation-delay: 0.2s;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 10px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.8;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-buttons a {
  padding: 14px 32px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.btn-secondary:hover {
  background-color: var(--primary);
  color: white;
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation-delay: 0.4s;
}

.avatar-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(37, 99, 235, 0.2);
  animation: float 6s ease-in-out infinite;
}

.avatar-placeholder::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  animation: shine 3s infinite;
}

.avatar-icon {
  font-size: 100px;
  z-index: 1;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }

  .hero .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.25rem;
  }

  .description {
    font-size: 1rem;
  }

  .hero-visual {
    margin-top: 20px;
  }

  .avatar-container {
    max-width: 300px;
  }

  .avatar-icon {
    font-size: 70px;
  }
}
</style>
