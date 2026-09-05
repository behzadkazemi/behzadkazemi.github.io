<template>
  <main class="weather-page">
    <div class="weather-shell">
      <a class="back-link" href="/">← Back to portfolio</a>

      <section class="weather-card" aria-live="polite">
        <p class="eyebrow">Project demo</p>
        <h1>Weather App</h1>
        <p class="intro">
          Search for a city to see its current weather, just like the original
          <a href="https://github.com/behzadkazemi/WeatherApp" target="_blank" rel="noopener noreferrer">React project</a>.
        </p>

        <form class="search-form" @submit.prevent="searchWeather">
          <label for="city">City</label>
          <div class="search-row">
            <input id="city" v-model="city" type="search" placeholder="Enter city name" required />
            <button type="submit" :disabled="loading">
              {{ loading ? 'Searching...' : 'Search' }}
            </button>
          </div>
        </form>

        <p v-if="error" class="message error">{{ error }}</p>
        <p v-else-if="loading" class="message">Loading weather for {{ city }}...</p>

        <div v-if="weather" class="weather-result">
          <p class="date">{{ formattedDate }}</p>
          <h2>{{ weather.name }}, {{ weather.country }}</h2>
          <div class="weather-icon" aria-hidden="true">{{ weatherIcon }}</div>
          <p class="temperature">{{ Math.round(weather.main.temp) }}°C</p>
          <p class="condition">{{ weather.weather[0].main }}</p>
          <div class="details">
            <span>Feels like {{ Math.round(weather.main.feels_like) }}°C</span>
            <span>Humidity {{ weather.main.humidity }}%</span>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface WeatherResponse {
  name: string
  country: string
  main: { temp: number; feels_like: number; humidity: number }
  weather: Array<{ main: string }>
}

const city = ref('Berlin')
const weather = ref<WeatherResponse | null>(null)
const error = ref('')
const loading = ref(false)

const formattedDate = computed(() =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date())
)

const weatherIcon = computed(() => {
  const condition = weather.value?.weather[0]?.main
  if (condition === 'Clear') return '☀️'
  if (condition === 'Rain') return '🌧️'
  if (condition === 'Snow') return '❄️'
  if (condition === 'Haze') return '🌫️'
  return '☁️'
})

const searchWeather = async () => {
  const searchCity = city.value.trim()
  if (!searchCity) return

  loading.value = true
  error.value = ''

  try {
    const locationResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchCity)}&count=1&language=en&format=json`
    )
    const locations = await locationResponse.json()

    if (!locationResponse.ok || !locations.results?.length) {
      throw new Error('City not found. Try another city.')
    }

    const location = locations.results[0]
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&timezone=auto`
    )
    const forecast = await weatherResponse.json()

    if (!weatherResponse.ok) {
      throw new Error('Weather data is unavailable right now.')
    }

    weather.value = {
      name: location.name,
      country: location.country_code,
      main: {
        temp: forecast.current.temperature_2m,
        feels_like: forecast.current.apparent_temperature,
        humidity: forecast.current.relative_humidity_2m
      },
      weather: [{ main: weatherCondition(forecast.current.weather_code) }]
    }
  } catch (requestError) {
    weather.value = null
    error.value = requestError instanceof Error ? requestError.message : 'Unable to load weather right now.'
  } finally {
    loading.value = false
  }
}

onMounted(searchWeather)

const weatherCondition = (code: number) => {
  if (code === 0) return 'Clear'
  if (code <= 3) return 'Clouds'
  if (code <= 67 || (code >= 80 && code <= 82)) return 'Rain'
  if (code <= 77 || code >= 85) return 'Snow'
  return 'Haze'
}
</script>

<style scoped>
.weather-page {
  min-height: 100vh;
  padding: 90px 20px 70px;
  background: linear-gradient(145deg, #081b2b, #126782 55%, #f2b35f);
  color: #102a43;
}

.weather-shell {
  width: min(100%, 620px);
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 24px;
  color: #f7fbff;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.weather-card {
  padding: clamp(24px, 6vw, 44px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 24px 70px rgba(4, 23, 39, 0.28);
}

.eyebrow {
  margin: 0 0 8px;
  color: #0b7285;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 12px;
  color: #102a43;
  font-size: clamp(2rem, 7vw, 3.2rem);
}

.intro {
  margin: 0 0 28px;
  color: #486581;
  line-height: 1.65;
}

.intro a {
  color: #0b7285;
  font-weight: 700;
}

.search-form {
  display: grid;
  gap: 8px;
}

.search-form label {
  color: #243b53;
  font-weight: 700;
}

.search-row {
  display: flex;
  gap: 10px;
}

input {
  min-width: 0;
  flex: 1;
  padding: 13px 14px;
  border: 1px solid #bcccdc;
  border-radius: 4px;
  background: #fff;
  color: #102a43;
  font-size: 1rem;
}

button {
  padding: 13px 18px;
  border: 0;
  border-radius: 4px;
  background: #0b7285;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

button:hover:not(:disabled) {
  background: #095c6b;
}

button:disabled {
  cursor: wait;
  opacity: 0.65;
}

.message {
  margin: 22px 0 0;
  color: #486581;
}

.message.error {
  color: #b42318;
}

.weather-result {
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid #d9e2ec;
  text-align: center;
}

.date {
  margin: 0 0 12px;
  color: #627d98;
  font-size: 0.95rem;
}

.weather-result h2 {
  margin: 0;
  color: #102a43;
  font-size: 1.7rem;
}

.weather-icon {
  margin: 18px 0 4px;
  font-size: 5rem;
  line-height: 1;
}

.temperature {
  margin: 0;
  color: #102a43;
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 0;
}

.condition {
  margin: 4px 0 20px;
  color: #486581;
  font-size: 1.1rem;
}

.details {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px 24px;
  color: #627d98;
  font-size: 0.9rem;
}

@media (max-width: 520px) {
  .search-row {
    display: grid;
  }

  button {
    width: 100%;
  }
}
</style>
