<template>
  <div ref="preview" class="liquid-preview" aria-hidden="true" @pointermove="handlePointerMove" @pointerleave="resetBubbles">
    <div class="liquid-grid"></div>
    <div
      v-for="bubble in bubbles"
      :key="bubble.id"
      class="liquid-bubble"
      :class="`bubble-${bubble.palette}`"
      :style="bubbleStyle(bubble)"
    >
      <span></span>
      <strong>{{ bubble.icon }}</strong>
    </div>
    <div class="preview-label">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface PreviewCharacter {
  name: string
  image: string
}

const props = defineProps<{ title: string; index: number; characters?: PreviewCharacter[]; icons?: string[]; bubbleCount?: number }>()

interface Bubble {
  id: number
  baseX: number
  baseY: number
  size: number
  palette: number
  offsetX: number
  offsetY: number
  scale: number
  driftX: number
  driftY: number
  character?: PreviewCharacter
  icon?: string
}

const preview = ref<HTMLElement | null>(null)
const bubbleTotal = props.characters?.length
  ? Math.min(props.bubbleCount || props.characters.length, props.characters.length)
  : props.bubbleCount || 7
const bubbles = ref<Bubble[]>(Array.from({ length: bubbleTotal }, (_, index) => ({
  id: index,
  baseX: 12 + Math.random() * 76,
  baseY: 18 + Math.random() * 64,
  size: 50 + Math.random() * 42,
  palette: (index % 5) + 1,
  offsetX: 0,
  offsetY: 0,
  scale: 1,
  driftX: 0,
  driftY: 0
})))

if (props.characters?.length) {
  const shuffledCharacters = [...props.characters].sort(() => Math.random() - 0.5)
  bubbles.value.forEach((bubble, index) => {
    bubble.character = shuffledCharacters[index]
  })
}

if (props.icons?.length) {
  bubbles.value.forEach((bubble, index) => {
    bubble.icon = props.icons![index % props.icons!.length]
  })
}

const defaultIcons = ['✦', '◇', '◈', '✧', '○', '△', '✺']
bubbles.value.forEach((bubble, index) => {
  bubble.icon = bubble.icon || defaultIcons[index % defaultIcons.length]
})

const bubbleStyle = (bubble: Bubble) => ({
  left: `${bubble.baseX + bubble.driftX + bubble.offsetX}%`,
  top: `${bubble.baseY + bubble.driftY + bubble.offsetY}%`,
  width: `${bubble.size}px`,
  height: `${bubble.size}px`,
  transform: `translate(-50%, -50%) scale(${bubble.scale})`
})

const handlePointerMove = (event: PointerEvent) => {
  if (!preview.value) return
  const bounds = preview.value.getBoundingClientRect()
  const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100
  const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100

  bubbles.value.forEach((bubble) => {
    const distanceX = bubble.baseX + bubble.driftX - pointerX
    const distanceY = bubble.baseY + bubble.driftY - pointerY
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const influence = Math.max(0, 1 - distance / 28)

    if (influence > 0) {
      const escapeX = distanceX || -1
      const escapeY = distanceY || -1
      const direction = Math.sqrt(escapeX ** 2 + escapeY ** 2)
      bubble.offsetX = (escapeX / direction) * influence * 18
      bubble.offsetY = (escapeY / direction) * influence * 18
      bubble.scale = 1 + influence * 0.18
    } else {
      bubble.offsetX = 0
      bubble.offsetY = 0
      bubble.scale = 1
    }
  })
}

const resetBubbles = () => {
  bubbles.value.forEach((bubble) => {
    bubble.offsetX = 0
    bubble.offsetY = 0
    bubble.scale = 1
  })
}

let driftTimer: number | undefined

const moveBubbles = () => {
  bubbles.value.forEach((bubble) => {
    bubble.driftX = -8 + Math.random() * 16
    bubble.driftY = -8 + Math.random() * 16
  })
}

onMounted(() => {
  moveBubbles()
  driftTimer = window.setInterval(moveBubbles, 1300)
})

onBeforeUnmount(() => {
  if (driftTimer) window.clearInterval(driftTimer)
})
</script>

<style scoped>
.liquid-preview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(circle at 22% 22%, rgba(255, 90, 202, 0.22), transparent 28%),
    radial-gradient(circle at 78% 74%, rgba(63, 231, 255, 0.2), transparent 32%),
    linear-gradient(135deg, #11143b, #24104d 50%, #071e38);
  cursor: crosshair;
}

.liquid-grid {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image: linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(circle, black, transparent 78%);
}

.liquid-bubble {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  box-shadow: inset -8px -10px 14px rgba(0, 0, 0, 0.24), inset 8px 7px 12px rgba(255, 255, 255, 0.32), 0 8px 18px rgba(0, 0, 0, 0.28);
  opacity: 0.92;
  transition: left 0.35s ease-out, top 0.35s ease-out, transform 0.35s ease-out;
  animation: liquid-float 5s ease-in-out infinite;
}

.liquid-bubble::before {
  content: '';
  position: absolute;
  top: 15%;
  left: 20%;
  width: 25%;
  height: 17%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.75);
  filter: blur(2px);
  transform: rotate(-28deg);
}

.liquid-bubble span {
  position: absolute;
  right: 14%;
  bottom: 13%;
  width: 18%;
  height: 14%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
}

.liquid-bubble img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.96;
  mix-blend-mode: normal;
}

.liquid-bubble strong {
  position: absolute;
  right: 3px;
  bottom: 8px;
  left: 3px;
  z-index: 2;
  overflow: hidden;
  color: #fff;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  text-overflow: ellipsis;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8), 0 2px 8px rgba(12, 8, 38, 0.7);
  white-space: nowrap;
}

.bubble-1 { background: radial-gradient(circle at 32% 25%, #fff0a8, #ff5fc8 42%, #a61dff 78%); }
.bubble-2 { background: radial-gradient(circle at 32% 25%, #d5ffff, #38e7e3 44%, #1275ff 82%); }
.bubble-3 { background: radial-gradient(circle at 32% 25%, #fff4c4, #ff9e4a 42%, #ef315f 78%); }
.bubble-4 { background: radial-gradient(circle at 32% 25%, #e8d5ff, #a855f7 45%, #4030b8 82%); }
.bubble-5 { background: radial-gradient(circle at 32% 25%, #f0ffcf, #8bea54 45%, #08a877 82%); }

.preview-label {
  position: absolute;
  right: 14px;
  bottom: 12px;
  z-index: 3;
  max-width: 72%;
  color: rgba(255, 255, 255, 0.72);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.63rem;
  letter-spacing: 0.08em;
  text-align: right;
  text-transform: uppercase;
}

@keyframes liquid-float {
  0%, 100% { margin-top: 0; }
  50% { margin-top: -7px; }
}

@media (prefers-reduced-motion: reduce) {
  .liquid-bubble { animation: none; transition: none; }
}
</style>
