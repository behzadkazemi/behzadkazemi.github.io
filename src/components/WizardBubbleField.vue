<template>
  <div ref="field" class="wizard-field" aria-label="Harry Potter character bubbles">
    <button
      v-for="bubble in bubbles"
      :key="bubble.id"
      type="button"
      class="wizard-bubble"
      :style="bubbleStyle(bubble)"
      :aria-label="`View details for ${bubble.character.name}`"
      @click="$emit('select', bubble.character)"
    >
      <img :src="bubble.character.image" :alt="`${bubble.character.name} portrait`" />
      <span>{{ bubble.character.name }}</span>
    </button>
    <p class="field-caption">Move across the field. Choose a character.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Character {
  name: string
  house: string
  image?: string
}

interface Bubble {
  id: number
  character: Character
  x: number
  y: number
  size: number
  offsetX: number
  offsetY: number
  scale: number
  depth: number
}

const props = defineProps<{ characters: Character[] }>()
defineEmits<{ select: [character: Character] }>()

const field = ref<HTMLElement | null>(null)
const bubbles = ref<Bubble[]>([])

const buildBubbles = () => {
  const source = props.characters.length ? props.characters : []
  bubbles.value = Array.from({ length: Math.max(1, source.length * 2) }, (_, index) => ({
    id: index,
    character: source[index % source.length],
    x: 12 + Math.random() * 76,
    y: 18 + Math.random() * 64,
    size: 88 + Math.random() * 44,
    offsetX: 0,
    offsetY: 0,
    scale: 1,
    depth: 0.86 + Math.random() * 0.22
  }))
}

watch(() => props.characters, buildBubbles, { immediate: true })

const bubbleStyle = (bubble: Bubble) => ({
  left: `${bubble.x + bubble.offsetX}%`,
  top: `${bubble.y + bubble.offsetY}%`,
  width: `${bubble.size}px`,
  height: `${bubble.size}px`,
  zIndex: Math.round(bubble.depth * 10),
  transform: `translate(-50%, -50%) scale(${bubble.scale})`,
  '--depth': bubble.depth
})

const handlePointerMove = (event: PointerEvent) => {
  if (!field.value) return
  const bounds = field.value.getBoundingClientRect()
  const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100
  const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100

  bubbles.value.forEach((bubble) => {
    const distanceX = bubble.x - pointerX
    const distanceY = bubble.y - pointerY
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
    const influence = Math.max(0, 1 - distance / 27)
    if (influence > 0) {
      const escapeX = distanceX || -1
      const escapeY = distanceY || -1
      const direction = Math.sqrt(escapeX ** 2 + escapeY ** 2)
      bubble.offsetX = (escapeX / direction) * influence * 14
      bubble.offsetY = (escapeY / direction) * influence * 14
      bubble.scale = 1 + influence * 0.16
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
</script>

<style scoped>
.wizard-field {
  position: relative;
  min-height: 520px;
  overflow: hidden;
  border: 1px solid rgba(214, 179, 106, 0.35);
  border-radius: 5px;
  background:
    radial-gradient(circle at 20% 24%, rgba(181, 81, 217, 0.24), transparent 28%),
    radial-gradient(circle at 80% 72%, rgba(23, 170, 183, 0.24), transparent 30%),
    linear-gradient(135deg, #14151d, #302338 52%, #111e2a);
  cursor: crosshair;
  isolation: isolate;
  touch-action: none;
}

.wizard-field::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.24;
  background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: radial-gradient(circle, black, transparent 76%);
}

.wizard-bubble {
  position: absolute;
  display: grid;
  place-items: center;
  padding: 7px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  background: radial-gradient(circle at 30% 22%, rgba(255,255,255,.8), rgba(191, 139, 255, .7) 18%, rgba(56, 28, 103, .9) 70%, rgba(9, 7, 26, .95));
  box-shadow: inset -14px -16px 20px rgba(0, 0, 0, 0.45), inset 10px 8px 18px rgba(255, 255, 255, 0.3), 0 18px 25px rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
  transition: left .38s ease-out, top .38s ease-out, transform .38s ease-out, box-shadow .3s ease;
  animation: wizard-float 5s ease-in-out infinite;
}

.wizard-bubble:nth-child(3n) { animation-delay: -1.8s; background: radial-gradient(circle at 30% 22%, rgba(255,255,255,.85), rgba(104, 225, 208, .7) 20%, rgba(20, 72, 86, .94) 72%, rgba(5, 24, 31, .98)); }
.wizard-bubble:nth-child(3n + 1) { animation-delay: -3.2s; }
.wizard-bubble:hover { box-shadow: inset -14px -16px 20px rgba(0,0,0,.35), inset 10px 8px 18px rgba(255,255,255,.35), 0 20px 32px rgba(214,179,106,.35); }
.wizard-bubble::before { content: ''; position: absolute; z-index: 2; top: 13%; left: 22%; width: 27%; height: 16%; border-radius: 50%; background: rgba(255,255,255,.76); filter: blur(2px); transform: rotate(-25deg); }
.wizard-bubble img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; opacity: .84; mix-blend-mode: screen; }
.wizard-bubble span { position: absolute; right: 4px; bottom: 11px; left: 4px; z-index: 3; overflow: hidden; color: #fff; font-family: 'IBM Plex Mono', monospace; font-size: .55rem; letter-spacing: .03em; text-align: center; text-overflow: ellipsis; text-shadow: 0 1px 5px #000; white-space: nowrap; }
.field-caption { position: absolute; right: 16px; bottom: 12px; z-index: 5; margin: 0; color: rgba(255,255,255,.62); font-family: 'IBM Plex Mono', monospace; font-size: .64rem; letter-spacing: .08em; text-transform: uppercase; }
@keyframes wizard-float { 0%, 100% { margin-top: 0; } 50% { margin-top: -8px; } }
@media (max-width: 560px) { .wizard-field { min-height: 560px; } .wizard-bubble { min-width: 78px; min-height: 78px; } .field-caption { right: 10px; bottom: 9px; font-size: .56rem; } }
@media (prefers-reduced-motion: reduce) { .wizard-bubble { animation: none; transition: none; } }
</style>
