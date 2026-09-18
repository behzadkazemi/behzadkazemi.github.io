<template>
  <BmiCalculator v-if="isBmiPage" />
  <WeatherDemo v-else-if="isWeatherPage" />
  <ItoItoDemo v-else-if="isItoItoPage" />
  <MediaDemos v-else-if="isMediaDemoPage" />
  <CitizenshipApp v-else-if="isCitizenshipPage" />
  <div v-else id="app" class="app">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
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
import Footer from './components/Footer.vue'
import BmiCalculator from './components/BmiCalculator.vue'
import WeatherDemo from './components/WeatherDemo.vue'
import ItoItoDemo from './components/ItoItoDemo.vue'
import MediaDemos from './components/MediaDemos.vue'
import CitizenshipApp from './components/CitizenshipApp.vue'

const path = window.location.pathname.replace(/\/+$/, '')
const isBmiPage = path.endsWith('/bmi-calculator')
const isWeatherPage = path.endsWith('/weather-app')
const isItoItoPage = path.endsWith('/ito-ito-challenge')
const isMediaDemoPage = ['/random-movie-adviser', '/imdb-top-250', '/game-of-thrones', '/harry-potter'].some((route) => path.endsWith(route))
const isCitizenshipPage = path.endsWith('/einbuergerungstest')
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-white);
}
</style>
