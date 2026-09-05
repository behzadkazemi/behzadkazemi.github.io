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
        <div ref="sceneHost" class="liquid-scene" aria-hidden="true"></div>
        <div class="scene-caption">Creative systems / Berlin</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'

const sceneHost = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let animationFrame = 0
let cleanupScene: (() => void) | null = null

onMounted(() => {
  if (!sceneHost.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
  camera.position.z = 5.8

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  sceneHost.value.appendChild(renderer.domElement)

  const uniforms = {
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector2(0, 0) },
  }

  const geometry = new THREE.IcosahedronGeometry(1.55, 64)
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      uniform float uTime;
      uniform vec2 uPointer;
      varying vec3 vNormal;
      varying vec3 vPosition;

      float wave(vec3 point) {
        return sin(point.x * 3.2 + uTime * 1.1)
          + sin(point.y * 4.1 - uTime * 0.8)
          + sin(point.z * 5.0 + uTime * 0.9);
      }

      void main() {
        vec3 displaced = position + normal * wave(position) * 0.075;
        displaced += normal * sin(position.y * 8.0 + uTime * 1.4) * 0.035;
        displaced.x += uPointer.x * 0.08;
        displaced.y += uPointer.y * 0.08;
        vNormal = normalize(normalMatrix * normal);
        vPosition = displaced;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vec3 light = normalize(vec3(-0.5, 0.8, 1.0));
        float glow = pow(1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0), 2.0);
        float lighting = max(dot(vNormal, light), 0.0);
        float ripple = sin(vPosition.y * 5.0 + uTime) * 0.08;
        vec3 deep = vec3(0.01, 0.07, 0.045);
        vec3 emerald = vec3(0.05, 0.72, 0.35);
        vec3 lime = vec3(0.55, 1.0, 0.22);
        vec3 color = mix(deep, emerald, lighting + glow * 0.7);
        color = mix(color, lime, smoothstep(0.25, 0.95, vPosition.x + ripple) * 0.4);
        gl_FragColor = vec4(color + glow * 0.18, 0.96);
      }
    `,
  })
  const liquid = new THREE.Mesh(geometry, material)
  scene.add(liquid)

  const resize = () => {
    if (!sceneHost.value || !renderer) return
    const { clientWidth, clientHeight } = sceneHost.value
    camera.aspect = clientWidth / clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(clientWidth, clientHeight, false)
  }

  const pointer = (event: PointerEvent) => {
    if (!sceneHost.value) return
    const bounds = sceneHost.value.getBoundingClientRect()
    uniforms.uPointer.value.set(
      ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      -((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    )
  }

  const animate = (time: number) => {
    uniforms.uTime.value = time * 0.001
    liquid.rotation.y = time * 0.00012
    liquid.rotation.x = Math.sin(time * 0.00025) * 0.12
    renderer?.render(scene, camera)
    animationFrame = requestAnimationFrame(animate)
  }

  resize()
  window.addEventListener('resize', resize)
  sceneHost.value.addEventListener('pointermove', pointer)
  animationFrame = requestAnimationFrame(animate)

  cleanupScene = () => {
    cancelAnimationFrame(animationFrame)
    window.removeEventListener('resize', resize)
    sceneHost.value?.removeEventListener('pointermove', pointer)
    geometry.dispose()
    material.dispose()
    renderer?.dispose()
    renderer?.domElement.remove()
    renderer = null
  }
})

onBeforeUnmount(() => cleanupScene?.())
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
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
  background: radial-gradient(circle at 72% 48%, rgba(74, 255, 116, 0.16), transparent 34%), linear-gradient(120deg, rgba(141, 255, 101, 0.06), transparent 36%);
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
  display: flex;
  justify-content: center;
  align-items: center;
  animation-delay: 0.4s;
}

.liquid-scene {
  position: relative;
  width: 100%;
  max-width: 520px;
  aspect-ratio: 1 / 1.08;
  filter: drop-shadow(0 30px 45px rgba(0, 0, 0, 0.35));
}

.liquid-scene::before {
  content: '';
  position: absolute;
  inset: 18% 14%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(48, 221, 113, 0.2), transparent 68%);
  filter: blur(18px);
  pointer-events: none;
}

.liquid-scene canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.scene-caption {
  position: absolute;
  right: 5%;
  bottom: 4%;
  color: rgba(141, 255, 101, 0.62);
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
    display: none;
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
