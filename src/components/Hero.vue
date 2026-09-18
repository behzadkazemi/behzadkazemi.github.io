<template>
  <section class="hero" id="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Hi, I'm Behzad Kazemi</h1>
        <p class="subtitle">Frontend Developer | Software Engineer</p>
        <p class="description">
          I build beautiful and functional web applications using modern technologies like Vue.js, React, and TypeScript.
          Based in Berlin, I'm passionate about creating seamless user experiences and clean code.
        </p>
      </div>
      <div ref="heroVisual" class="hero-visual">
        <div class="spotlight" aria-hidden="true"></div>
        <div class="spline-scene">
          <canvas ref="sceneCanvas" aria-label="Interactive 3D scene"></canvas>
          <div v-if="isLoading" class="scene-status">Loading interactive scene</div>
          <div v-if="sceneError" class="scene-status scene-status-error">Interactive scene unavailable</div>
        </div>
        <div class="scene-caption">Creative systems / Berlin</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const sceneCanvas = ref<HTMLCanvasElement | null>(null)
const heroVisual = ref<HTMLDivElement | null>(null)
const isLoading = ref(true)
const sceneError = ref(false)
let spline: Application | null = null
let removePointerListeners: (() => void) | null = null

onMounted(() => {
  if (!sceneCanvas.value || !heroVisual.value) return

  spline = new Application(sceneCanvas.value)
  spline
    .load('https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode')
    .then(() => {
      isLoading.value = false
    })
    .catch(() => {
      isLoading.value = false
      sceneError.value = true
    })

  const handlePointerMove = (event: PointerEvent) => {
    if (!heroVisual.value) return
    const bounds = heroVisual.value.getBoundingClientRect()
    heroVisual.value.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`)
    heroVisual.value.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`)
    heroVisual.value.classList.add('is-hovered')
  }

  const handlePointerLeave = () => heroVisual.value?.classList.remove('is-hovered')
  heroVisual.value.addEventListener('pointermove', handlePointerMove)
  heroVisual.value.addEventListener('pointerleave', handlePointerLeave)
  removePointerListeners = () => {
    heroVisual.value?.removeEventListener('pointermove', handlePointerMove)
    heroVisual.value?.removeEventListener('pointerleave', handlePointerLeave)
  }
})

onBeforeUnmount(() => {
  removePointerListeners?.()
  spline?.dispose()
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
  background: #07100d;
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
  background: radial-gradient(circle at 75% 48%, rgba(74, 255, 116, 0.14), transparent 34%), linear-gradient(120deg, rgba(141, 255, 101, 0.05), transparent 40%);
  pointer-events: none;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  width: min(100% - 40px, 1200px);
  min-height: 500px;
  background: transparent;
  align-items: center;
  z-index: 1;
}

.hero-content {
  animation: fadeInUp 0.7s ease-out both;
  animation-delay: 0.2s;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 10px;
  color: #f5f7ef;
  background: linear-gradient(135deg, #f2ffe9 20%, #8dff65 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.description {
  font-size: 0.95rem;
  color: #d4d4d4;
  margin-bottom: 0;
  line-height: 1.6;
  max-width: 470px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-buttons a {
  padding: 14px 32px;
  font-weight: 600;
  border-radius: 2px;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--primary);
  color: #07100d;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(141, 255, 101, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.btn-secondary:hover {
  background-color: var(--primary);
  color: #07100d;
  transform: translateY(-2px);
}

.hero-visual {
  --spotlight-x: 50%;
  --spotlight-y: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  animation: fadeInDown 0.7s ease-out both;
  animation-delay: 0.4s;
}

.spline-scene {
  position: relative;
  width: 100%;
  max-width: none;
  height: 500px;
  overflow: hidden;
  border: 0;
  border-radius: 0;
  background: transparent;
  filter: none;
}

.spline-scene canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.spotlight {
  position: absolute;
  z-index: 2;
  width: 260px;
  height: 260px;
  left: var(--spotlight-x);
  top: var(--spotlight-y);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(244, 255, 232, 0.22), transparent 68%);
  filter: blur(18px);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 200ms ease;
}

.hero-visual.is-hovered .spotlight {
  opacity: 1;
}

.scene-status {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: var(--text-secondary);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  pointer-events: none;
}

.scene-status-error {
  color: var(--primary);
}

.scene-caption {
  position: absolute;
  right: 24px;
  bottom: 14px;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }

  .hero .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-visual {
    height: 360px;
  }

  .spline-scene {
    height: 360px;
  }

  .scene-caption {
    bottom: 14px;
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

}
</style>
