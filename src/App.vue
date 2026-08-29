<template>
  <div id="app" class="app">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-white);
}
</style>
