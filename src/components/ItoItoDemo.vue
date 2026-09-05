<template>
  <main class="ito-page">
    <div class="ito-shell">
      <a class="back-link" href="/">&larr; Back to portfolio</a>

      <section class="ito-header">
        <div>
          <p class="eyebrow">Project demo</p>
          <h1>SVG Pattern Connector</h1>
          <p>Upload two SVG patterns, then connect matching points with colored lines.</p>
        </div>
        <a class="source-link" href="https://github.com/behzadkazemi/behzad-itoito-code-challengee" target="_blank" rel="noopener noreferrer">View React source</a>
      </section>

      <section class="workspace">
        <div class="patterns-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Pattern workspace</p>
              <h2>Two SVG files</h2>
            </div>
            <button class="upload-button" type="button" @click="fileInput?.click()">Upload 2 SVGs</button>
            <input ref="fileInput" class="file-input" type="file" accept=".svg,image/svg+xml" multiple @change="handleFileUpload" />
          </div>

          <div v-if="svgFiles.length === 0" class="empty-state">
            <div class="upload-mark">+</div>
            <h3>Start with two patterns</h3>
            <p>Select exactly two SVG files to begin drawing connections.</p>
            <button class="primary-button" type="button" @click="fileInput?.click()">Choose SVG files</button>
          </div>

          <div v-else class="svg-stage" ref="stage" @pointerdown="handlePointerDown" @pointermove="handlePointerMove" @pointerleave="clearPreview" @contextmenu.prevent>
            <div class="svg-slot" v-for="(svgFile, index) in svgFiles" :key="svgFile.name">
              <span class="slot-label">{{ index === 0 ? 'Pattern A' : 'Pattern B' }}</span>
              <div class="svg-content" v-html="svgFile.content"></div>
            </div>
            <svg class="line-layer" :viewBox="`0 0 ${stageSize.width} ${stageSize.height}`" aria-hidden="true">
              <line v-for="(line, index) in lines" :key="index" :x1="line.start.x" :y1="line.start.y" :x2="line.end.x" :y2="line.end.y" :class="line.color" />
              <line v-if="activeLine" :x1="activeLine.start.x" :y1="activeLine.start.y" :x2="activeLine.end.x" :y2="activeLine.end.y" class="preview" />
              <circle v-if="startPoint" :cx="startPoint.x" :cy="startPoint.y" r="7" class="active-dot" />
            </svg>
          </div>
          <p v-if="error" class="error-message">{{ error }}</p>
          <p v-else-if="svgFiles.length > 0" class="hint">Click a point on either pattern, then click a second point. Right-click creates a blue guide line.</p>
        </div>

        <aside class="lines-panel">
          <div class="panel-heading compact">
            <div>
              <p class="eyebrow">Connections</p>
              <h2>Defined lines</h2>
            </div>
            <span class="line-count">{{ lines.length }}</span>
          </div>
          <div class="controls">
            <button type="button" class="secondary-button" :disabled="lines.length === 0" @click="undoLine">Undo last</button>
            <button type="button" class="danger-button" :disabled="lines.length === 0" @click="resetLines">Reset all</button>
          </div>
          <ol v-if="lines.length" class="line-list">
            <li v-for="(line, index) in lines" :key="index">
              <span class="line-swatch" :class="line.color"></span>
              <span>Line {{ index + 1 }}<small>{{ line.color === 'red' ? 'Primary connection' : 'Guide connection' }}</small></span>
            </li>
          </ol>
          <p v-else class="no-lines">No lines defined yet.</p>
        </aside>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'

interface SvgFile {
  name: string
  content: string
}

interface Point {
  x: number
  y: number
}

interface Connection {
  start: Point
  end: Point
  color: 'red' | 'blue'
}

const fileInput = ref<HTMLInputElement | null>(null)
const stage = ref<HTMLElement | null>(null)
const svgFiles = ref<SvgFile[]>([])
const lines = ref<Connection[]>([])
const startPoint = ref<Point | null>(null)
const pointerPoint = ref<Point | null>(null)
const error = ref('')
const stageSize = ref({ width: 1000, height: 600 })

const activeLine = computed(() => {
  if (!startPoint.value || !pointerPoint.value) return null
  return { start: startPoint.value, end: pointerPoint.value }
})

const handleFileUpload = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = Array.from(input.files || [])
  if (files.length !== 2) {
    error.value = 'Please select exactly two SVG files.'
    return
  }

  svgFiles.value = await Promise.all(files.map(async (file) => ({ name: file.name, content: await file.text() })))
  lines.value = []
  startPoint.value = null
  pointerPoint.value = null
  error.value = ''
  await nextTick()
  updateStageSize()
}

const updateStageSize = () => {
  if (!stage.value) return
  const bounds = stage.value.getBoundingClientRect()
  stageSize.value = { width: bounds.width, height: bounds.height }
}

const pointFromEvent = (event: PointerEvent): Point | null => {
  if (!stage.value) return null
  const bounds = stage.value.getBoundingClientRect()
  return { x: event.clientX - bounds.left, y: event.clientY - bounds.top }
}

const handlePointerDown = (event: PointerEvent) => {
  const point = pointFromEvent(event)
  if (!point) return
  if (!startPoint.value) {
    startPoint.value = point
    pointerPoint.value = point
    return
  }

  lines.value.push({ start: startPoint.value, end: point, color: event.button === 2 ? 'blue' : 'red' })
  startPoint.value = null
  pointerPoint.value = null
}

const handlePointerMove = (event: PointerEvent) => {
  if (startPoint.value) pointerPoint.value = pointFromEvent(event)
}

const clearPreview = () => {
  startPoint.value = null
  pointerPoint.value = null
}

const undoLine = () => lines.value.pop()
const resetLines = () => {
  lines.value = []
  clearPreview()
}
</script>

<style scoped>
.ito-page {
  min-height: 100vh;
  padding: 72px 24px;
  background: #edf1f5;
  color: #14213d;
}

.ito-shell {
  width: min(100%, 1320px);
  margin: 0 auto;
}

.back-link,
.source-link {
  color: #315c9c;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.back-link {
  display: inline-block;
  margin-bottom: 26px;
}

.ito-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 7px;
  color: #315c9c;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 10px;
  font-size: clamp(2.1rem, 5vw, 4rem);
}

.ito-header p:not(.eyebrow) {
  max-width: 620px;
  margin-bottom: 0;
  color: #52657d;
}

.workspace {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 310px;
  gap: 20px;
}

.patterns-panel,
.lines-panel {
  border: 1px solid #d5dce5;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 14px 35px rgba(39, 61, 89, 0.08);
}

.patterns-panel {
  min-width: 0;
  padding: 24px;
}

.lines-panel {
  padding: 24px;
}

.panel-heading {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}

.panel-heading.compact {
  align-items: center;
}

h2 {
  margin-bottom: 0;
  font-size: 1.35rem;
}

.upload-button,
.primary-button,
.secondary-button,
.danger-button {
  border: 0;
  border-radius: 4px;
  padding: 11px 15px;
  font-weight: 700;
  cursor: pointer;
}

.upload-button,
.primary-button {
  background: #315c9c;
  color: #fff;
}

.secondary-button {
  background: #e4ebf4;
  color: #315c9c;
}

.danger-button {
  background: #fbe5e4;
  color: #b42318;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.file-input {
  display: none;
}

.empty-state {
  display: grid;
  min-height: 480px;
  place-items: center;
  align-content: center;
  gap: 12px;
  border: 2px dashed #c9d3df;
  border-radius: 4px;
  text-align: center;
}

.upload-mark {
  display: grid;
  width: 58px;
  height: 58px;
  place-items: center;
  border-radius: 50%;
  background: #e4ebf4;
  color: #315c9c;
  font-size: 2rem;
}

.empty-state h3 {
  margin: 4px 0 0;
  font-size: 1.2rem;
}

.empty-state p,
.hint,
.no-lines {
  color: #718096;
}

.empty-state p {
  margin-bottom: 8px;
}

.svg-stage {
  display: flex;
  position: relative;
  min-height: 480px;
  gap: 20px;
  overflow: hidden;
  padding: 32px 12px 12px;
  border: 1px solid #d5dce5;
  background: #f8fafc;
  cursor: crosshair;
  touch-action: none;
}

.svg-slot {
  position: relative;
  display: grid;
  width: calc(50% - 10px);
  place-items: center;
  overflow: hidden;
  border: 1px solid #e1e8f0;
  background: #fff;
}

.svg-content {
  width: 100%;
  height: 100%;
}

.svg-content :deep(svg) {
  width: 100%;
  height: 100%;
  max-height: 430px;
}

.slot-label {
  position: absolute;
  z-index: 2;
  top: 8px;
  left: 10px;
  color: #718096;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  text-transform: uppercase;
}

.line-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.line-layer line {
  stroke-width: 3;
}

.line-layer .red {
  stroke: #d64545;
}

.line-layer .blue {
  stroke: #315c9c;
  stroke-dasharray: 8 5;
}

.line-layer .preview {
  stroke: #78889d;
  stroke-dasharray: 8 5;
}

.active-dot {
  fill: #28a36a;
  stroke: #fff;
  stroke-width: 3;
}

.hint {
  margin: 14px 0 0;
  font-size: 0.85rem;
}

.error-message {
  margin: 14px 0 0;
  color: #b42318;
}

.line-count {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border-radius: 50%;
  background: #e4ebf4;
  color: #315c9c;
  font-weight: 800;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.line-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 18px 0 0 24px;
  border-top: 1px solid #e1e8f0;
}

.line-list li {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #243b53;
}

.line-list small {
  display: block;
  margin-top: 2px;
  color: #718096;
  font-size: 0.72rem;
}

.line-swatch {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.line-swatch.red {
  background: #d64545;
}

.line-swatch.blue {
  background: #315c9c;
}

@media (max-width: 900px) {
  .workspace {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .ito-page {
    padding: 48px 16px;
  }

  .ito-header {
    display: block;
  }

  .source-link {
    display: inline-block;
    margin-top: 18px;
  }

  .patterns-panel,
  .lines-panel {
    padding: 16px;
  }

  .panel-heading {
    align-items: stretch;
    flex-direction: column;
  }

  .upload-button {
    width: 100%;
  }

  .svg-stage,
  .empty-state {
    min-height: 390px;
  }

  .svg-stage {
    gap: 8px;
    padding-inline: 5px;
  }
}
</style>
