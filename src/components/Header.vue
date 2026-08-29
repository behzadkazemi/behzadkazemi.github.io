<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container header-content">
      <div class="logo">
        <h2>BK</h2>
      </div>
      <nav class="nav">
        <a href="#about" class="nav-link">About</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
      <div class="social-links">
        <a href="https://github.com/behzadkazemi" target="_blank" rel="noopener noreferrer" title="GitHub">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/behzadkazemi" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
          </svg>
        </a>
      </div>
      <button class="mobile-menu-btn" @click="toggleMobileMenu" v-show="isMobileView">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav class="mobile-nav" v-if="isMobileMenuOpen">
      <a href="#about" class="nav-link" @click="closeMobileMenu">About</a>
      <a href="#skills" class="nav-link" @click="closeMobileMenu">Skills</a>
      <a href="#experience" class="nav-link" @click="closeMobileMenu">Experience</a>
      <a href="#projects" class="nav-link" @click="closeMobileMenu">Projects</a>
      <a href="#contact" class="nav-link" @click="closeMobileMenu">Contact</a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileView = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleResize = () => {
  isMobileView.value = window.innerWidth < 768
  if (isMobileView.value === false) {
    isMobileMenuOpen.value = false
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.header.scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  height: 70px;
}

.logo h2 {
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link:hover::after {
  width: 100%;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary);
}

.icon {
  width: 24px;
  height: 24px;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  padding: 0;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background-color: var(--primary);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-nav {
  display: none;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: white;
  flex-direction: column;
  gap: 0;
  padding: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.mobile-nav .nav-link {
  padding: 15px 0;
  border-bottom: 1px solid var(--border-light);
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .social-links {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }
}
</style>
