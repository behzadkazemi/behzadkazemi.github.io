<template>
  <section class="bmi-page">
    <div class="container">
      <a class="back-link" href="/">← Back to portfolio</a>

      <div class="bmi-card fade-in-up">
        <p class="eyebrow">Project demo</p>
        <h1>BMI Calculator</h1>
        <p class="intro">
          Enter your weight and height to calculate Body Mass Index, using the same formula as my
          <a href="https://github.com/behzadkazemi/BMI-Calculator" target="_blank" rel="noopener noreferrer">BMI-Calculator</a>
          repository.
        </p>

        <form class="bmi-form" @submit.prevent="calculateBmi">
          <label>
            Weight (kg)
            <input
              v-model="weight"
              type="number"
              min="1"
              max="400"
              step="0.1"
              inputmode="decimal"
              placeholder="e.g. 70"
              required
            />
          </label>

          <label>
            Height (cm)
            <input
              v-model="height"
              type="number"
              min="50"
              max="250"
              step="0.1"
              inputmode="decimal"
              placeholder="e.g. 175"
              required
            />
          </label>

          <p v-if="error" class="error">{{ error }}</p>

          <div class="actions">
            <button type="submit" class="btn-primary">Calculate BMI</button>
            <button type="button" class="btn-secondary" @click="reset">Reset</button>
          </div>
        </form>

        <div v-if="bmi !== null" class="result" :class="statusClass">
          <p class="result-label">Your BMI is</p>
          <p class="result-value">{{ bmi.toFixed(1) }}</p>
          <p class="result-status">{{ status }}</p>
        </div>

        <ul class="legend">
          <li><span class="dot underweight"></span> Underweight: below 18.5</li>
          <li><span class="dot normal"></span> Normal weight: 18.5 – 24.8</li>
          <li><span class="dot overweight"></span> Overweight: 24.9 – 29.8</li>
          <li><span class="dot obesity"></span> Obesity: 29.9 and above</li>
        </ul>

        <p class="disclaimer">
          BMI is a screening estimate, not a medical diagnosis. Talk to a healthcare professional for personal advice.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const weight = ref('')
const height = ref('')
const bmi = ref<number | null>(null)
const status = ref('')
const error = ref('')

const statusClass = computed(() => status.value.toLowerCase().replace(/\s+/g, '-'))

const calculateBmi = () => {
  const weightNum = parseFloat(weight.value)
  const heightNum = parseFloat(height.value)

  if (!Number.isFinite(weightNum) || !Number.isFinite(heightNum) || weightNum <= 0 || heightNum <= 0) {
    error.value = 'Please enter a valid weight and height.'
    bmi.value = null
    status.value = ''
    return
  }

  const heightInMeters = heightNum / 100
  const bmiValue = weightNum / (heightInMeters * heightInMeters)

  error.value = ''
  bmi.value = bmiValue

  if (bmiValue < 18.5) {
    status.value = 'Underweight'
  } else if (bmiValue < 24.9) {
    status.value = 'Normal weight'
  } else if (bmiValue < 29.9) {
    status.value = 'Overweight'
  } else {
    status.value = 'Obesity'
  }
}

const reset = () => {
  weight.value = ''
  height.value = ''
  bmi.value = null
  status.value = ''
  error.value = ''
}
</script>

<style scoped>
.bmi-page {
  min-height: 100vh;
  padding: 110px 0 80px;
}

.back-link {
  display: inline-block;
  margin-bottom: 28px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.bmi-card {
  max-width: 560px;
  margin: 0 auto;
  padding: 36px;
  background: var(--panel);
  border: 1px solid var(--border-light);
  border-radius: 4px;
}

.eyebrow {
  color: var(--primary);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.bmi-card h1 {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.intro {
  margin-bottom: 28px;
}

.bmi-form {
  display: grid;
  gap: 18px;
}

label {
  display: grid;
  gap: 8px;
  color: var(--text-primary);
  font-weight: 600;
}

input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  background: rgba(7, 16, 13, 0.7);
  color: var(--text-primary);
  font-size: 1rem;
}

input:focus {
  outline: 2px solid var(--primary);
  outline-offset: 1px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.error {
  color: var(--error);
  margin: 0;
}

.result {
  margin-top: 28px;
  padding: 24px;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  text-align: center;
}

.result-label,
.result-status {
  margin: 0;
}

.result-value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 4px 0 8px;
}

.result.underweight {
  border-color: var(--warning);
}

.result.normal-weight {
  border-color: var(--success);
}

.result.overweight {
  border-color: #f59e0b;
}

.result.obesity {
  border-color: var(--error);
}

.legend {
  list-style: none;
  margin: 28px 0 0;
  display: grid;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.92rem;
}

.legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.underweight {
  background: var(--warning);
}

.dot.normal {
  background: var(--success);
}

.dot.overweight {
  background: #f59e0b;
}

.dot.obesity {
  background: var(--error);
}

.disclaimer {
  margin: 24px 0 0;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .bmi-card {
    padding: 24px;
  }

  .bmi-card h1 {
    font-size: 1.8rem;
  }
}
</style>
