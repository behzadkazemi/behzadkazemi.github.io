<template>
  <main class="media-page" :class="mode">
    <div class="media-shell">
      <a class="back-link" href="/">&larr; Back to portfolio</a>

      <section v-if="mode === 'random-movie'" class="media-card random-card">
        <p class="eyebrow">Project demo / React original</p>
        <h1>Random Movie Adviser</h1>
        <p class="lead">Need something good to watch? Roll the dice for a title from the IMDb Top 250.</p>
        <div class="movie-pick" :class="{ empty: !randomMovie }">
          <template v-if="randomMovie">
            <img class="movie-poster" :src="posterUrl(randomMovie)" :alt="`${randomMovie.title} poster`" @error="hidePoster" />
            <div class="movie-details">
              <p class="rank">Rank #{{ randomMovie.rank }}</p>
              <h2>{{ randomMovie.title }}</h2>
              <p class="year">Released {{ randomMovie.year }}</p>
              <p class="detail-copy">A highly rated classic selected from the IMDb Top 250 collection.</p>
              <a class="imdb-link" :href="`https://www.imdb.com/title/${randomMovie.imdbId}/`" target="_blank" rel="noopener noreferrer">View IMDb details &rarr;</a>
            </div>
          </template>
          <template v-else>
            <div class="empty-poster">?</div>
            <div class="movie-details">
              <p class="rank">Ready when you are</p>
              <h2>Your next movie</h2>
              <p class="year">A random recommendation awaits</p>
            </div>
          </template>
        </div>
        <button class="primary-button dice-button" type="button" @click="pickMovie">Roll the dice</button>
        <a class="source-link" href="https://github.com/behzadkazemi/Random-movie-adviser" target="_blank" rel="noopener noreferrer">View source on GitHub</a>
      </section>

      <section v-else-if="mode === 'imdb'" class="media-card imdb-card">
        <p class="eyebrow">Project demo / movie data</p>
        <h1>IMDb Top 250</h1>
        <p class="lead">Browse a curated slice of the world's most highly ranked films.</p>
        <label class="search-label" for="movie-search">Search titles</label>
        <input id="movie-search" v-model="movieSearch" type="search" placeholder="Try The Godfather" />
        <ol class="movie-list">
          <li v-for="movie in filteredMovies" :key="movie.rank">
            <span class="movie-rank">{{ movie.rank }}</span>
            <span><strong>{{ movie.title }}</strong><small>{{ movie.year }}</small></span>
          </li>
        </ol>
        <p v-if="filteredMovies.length === 0" class="empty-message">No matching titles.</p>
        <a class="source-link" href="https://github.com/behzadkazemi/imdb-top-250" target="_blank" rel="noopener noreferrer">View source on GitHub</a>
      </section>

      <section v-else-if="mode === 'got'" class="media-card got-card">
        <p class="eyebrow">Project demo / Westeros archive</p>
        <h1>Game of Thrones</h1>
        <p class="lead">Explore a small character archive and summon a quote from the Seven Kingdoms.</p>
        <div class="got-tabs">
          <button v-for="tab in ['Characters', 'Quote']" :key="tab" type="button" :class="{ active: gotTab === tab }" @click="gotTab = tab">{{ tab }}</button>
        </div>
        <div v-if="gotTab === 'Characters'" class="character-grid">
          <button v-for="person in gotCharacters" :key="person.name" type="button" class="character" @click="selectedCharacter = person">
            <img :src="person.image" :alt="`${person.name} portrait`" />
            <span class="character-copy"><strong>{{ person.name }}</strong><small>{{ person.house }}</small></span>
          </button>
        </div>
        <div v-else class="quote-box">
          <p class="quote-mark">&ldquo;</p>
          <blockquote>{{ quote.text }}</blockquote>
          <p class="quote-author">{{ quote.author }}</p>
          <button class="primary-button" type="button" @click="fetchQuote">Fetch another quote</button>
        </div>
        <div v-if="selectedCharacter && gotTab === 'Characters'" class="character-detail">
          <img :src="selectedCharacter.image" :alt="`${selectedCharacter.name} portrait`" />
          <div>
            <span class="eyebrow">Character profile</span>
            <h2>{{ selectedCharacter.name }}</h2>
            <p>{{ selectedCharacter.description }}</p>
            <dl><div><dt>House</dt><dd>{{ selectedCharacter.house }}</dd></div><div><dt>Played by</dt><dd>{{ selectedCharacter.actor }}</dd></div><div><dt>Region</dt><dd>{{ selectedCharacter.region }}</dd></div><div><dt>Status</dt><dd>{{ selectedCharacter.status }}</dd></div></dl>
          </div>
        </div>
        <a class="source-link" href="https://github.com/behzadkazemi/GOT" target="_blank" rel="noopener noreferrer">View source on GitHub</a>
      </section>

      <section v-else class="media-card potter-card">
        <p class="eyebrow">Project demo / Ext JS original</p>
        <h1>Harry Potter</h1>
        <p class="lead">Browse a compact character guide inspired by the original Ext JS training app.</p>
        <div class="house-filter">
          <button v-for="house in houses" :key="house" type="button" :class="{ active: selectedHouse === house }" @click="selectedHouse = house">{{ house }}</button>
        </div>
        <WizardBubbleField :key="selectedHouse" :characters="filteredWizards" @select="selectedWizard = $event" />
        <div v-if="selectedWizard" class="wizard-detail">
          <img :src="selectedWizard.image" :alt="`${selectedWizard.name} portrait`" />
          <div>
            <span class="eyebrow">Character profile</span>
            <h2>{{ selectedWizard.name }}</h2>
            <p>{{ selectedWizard.description }}</p>
            <dl><div><dt>House</dt><dd>{{ selectedWizard.house }}</dd></div><div><dt>Role</dt><dd>{{ selectedWizard.role }}</dd></div><div><dt>Wand</dt><dd>{{ selectedWizard.wand }}</dd></div><div><dt>Patronus</dt><dd>{{ selectedWizard.patronus }}</dd></div></dl>
          </div>
        </div>
        <a class="source-link" href="https://github.com/behzadkazemi/HarryPotter" target="_blank" rel="noopener noreferrer">View source on GitHub</a>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import WizardBubbleField from './WizardBubbleField.vue'

type Mode = 'random-movie' | 'imdb' | 'got' | 'harry-potter'
interface Movie { title: string; year: number; rank: number; imdbId: string }
interface Person { name: string; house: string; sigil: string; description: string; image?: string; role?: string; wand?: string; patronus?: string; actor?: string; region?: string; status?: string }

const path = window.location.pathname.replace(/\/+$/, '')
const mode: Mode = path.endsWith('/random-movie-adviser') ? 'random-movie' : path.endsWith('/imdb-top-250') ? 'imdb' : path.endsWith('/game-of-thrones') ? 'got' : 'harry-potter'
const movies: Movie[] = [
  { title: 'The Shawshank Redemption', year: 1994, rank: 1, imdbId: 'tt0111161' },
  { title: 'The Godfather', year: 1972, rank: 2, imdbId: 'tt0068646' },
  { title: 'The Dark Knight', year: 2008, rank: 3, imdbId: 'tt0468569' },
  { title: 'The Godfather Part II', year: 1974, rank: 4, imdbId: 'tt0071562' },
  { title: '12 Angry Men', year: 1957, rank: 5, imdbId: 'tt0050083' },
  { title: "Schindler's List", year: 1993, rank: 6, imdbId: 'tt0108052' },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003, rank: 7, imdbId: 'tt0167260' },
  { title: 'Pulp Fiction', year: 1994, rank: 8, imdbId: 'tt0110912' },
  { title: 'The Good, the Bad and the Ugly', year: 1966, rank: 9, imdbId: 'tt0060196' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, rank: 10, imdbId: 'tt0120737' }
]
const randomMovie = ref<Movie | null>(null)
const movieSearch = ref('')
const filteredMovies = computed(() => movies.filter((movie) => movie.title.toLowerCase().includes(movieSearch.value.toLowerCase())))
const pickMovie = () => { randomMovie.value = movies[Math.floor(Math.random() * movies.length)] }
const posterUrl = (movie: Movie) => `https://images.metahub.space/poster/medium/${movie.imdbId}/img`
const hidePoster = (event: Event) => { (event.target as HTMLImageElement).style.visibility = 'hidden' }

const gotCharacters: Person[] = [
  { name: 'Jon Snow', house: 'House Stark', sigil: 'ST', image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Jon_Snow_White_cosplayer_%2835678959046%29.jpg', actor: 'Kit Harington', region: 'The North', status: 'King in the North', description: 'The reluctant hero of the North, raised at Winterfell and bound by duty.' },
  { name: 'Daenerys Targaryen', house: 'House Targaryen', sigil: 'TG', image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Daenerys.jpg', actor: 'Emilia Clarke', region: 'Dragonstone', status: 'Queen claimant', description: 'The Dragon Queen, determined to reclaim the throne of Westeros.' },
  { name: 'Tyrion Lannister', house: 'House Lannister', sigil: 'LI', image: 'https://ui-avatars.com/api/?name=Tyrion+Lannister&size=700&background=6b2737&color=fff&bold=true', actor: 'Peter Dinklage', region: 'The Westerlands', status: 'Hand of the King', description: 'A sharp-minded strategist whose wit is as formidable as any sword.' },
  { name: 'Arya Stark', house: 'House Stark', sigil: 'ST', image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Arya_Stark_in_MultiVersus_1.png', actor: 'Maisie Williams', region: 'The North', status: 'Faceless assassin', description: 'A fiercely independent survivor trained to move unseen.' }
]
const gotTab = ref('Characters')
const selectedCharacter = ref<Person | null>(null)
const quote = ref({ text: 'Winter is coming.', author: 'Ned Stark' })
const quotes = [
  { text: 'Winter is coming.', author: 'Ned Stark' },
  { text: 'A mind needs books as a sword needs a whetstone.', author: 'Tyrion Lannister' },
  { text: 'The things we do for love.', author: 'Jaime Lannister' },
  { text: 'Not today.', author: 'Arya Stark' }
]
const fetchQuote = () => { quote.value = quotes[Math.floor(Math.random() * quotes.length)] }

const wizards: Person[] = [
  { name: 'Harry Potter', house: 'Gryffindor', sigil: 'HP', image: 'https://ik.imagekit.io/hpapi/harry.jpg', role: 'Auror', wand: 'Holly, phoenix feather, 11 inches', patronus: 'Stag', description: 'The Boy Who Lived, known for courage, loyalty, and a talent for finding trouble.' },
  { name: 'Hermione Granger', house: 'Gryffindor', sigil: 'HG', image: 'https://ik.imagekit.io/hpapi/hermione.jpeg', role: 'Minister for Magic', wand: 'Vine, dragon heartstring, 10¾ inches', patronus: 'Otter', description: 'A brilliant witch whose preparation and compassion repeatedly save the day.' },
  { name: 'Draco Malfoy', house: 'Slytherin', sigil: 'DM', image: 'https://ik.imagekit.io/hpapi/draco.jpg', role: 'Slytherin student', wand: 'Hawthorn, unicorn hair, 10 inches', patronus: 'Unknown', description: 'A Slytherin student shaped by family expectations and difficult choices.' },
  { name: 'Luna Lovegood', house: 'Ravenclaw', sigil: 'LL', image: 'https://ik.imagekit.io/hpapi/luna.jpg', role: 'Magizoologist', wand: 'Unknown', patronus: 'Hare', description: 'An original thinker with fierce loyalty and an unshakable sense of wonder.' },
  { name: 'Cedric Diggory', house: 'Hufflepuff', sigil: 'CD', image: 'https://ik.imagekit.io/hpapi/cedric.png', role: 'Triwizard champion', wand: 'Ash, unicorn hair, 12¼ inches', patronus: 'Unknown', description: 'A fair-minded champion remembered for his generosity and integrity.' }
]
const houses = ['All', 'Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
const selectedHouse = ref('All')
const selectedWizard = ref<Person | null>(null)
const filteredWizards = computed(() => selectedHouse.value === 'All' ? wizards : wizards.filter((wizard) => wizard.house === selectedHouse.value))
</script>

<style scoped>
.media-page { min-height: 100vh; padding: 72px 20px; color: #f4f1e8; background: #171719; }
.media-shell { width: min(100%, 900px); margin: 0 auto; }
.back-link, .source-link { color: #d6b36a; font-family: 'IBM Plex Mono', monospace; font-size: .76rem; letter-spacing: .06em; text-transform: uppercase; }
.back-link { display: inline-block; margin-bottom: 28px; }
.media-card { padding: clamp(24px, 6vw, 54px); border: 1px solid rgba(214,179,106,.35); border-radius: 6px; background: #222225; box-shadow: 0 25px 70px rgba(0,0,0,.3); }
.eyebrow { margin: 0 0 8px; color: #d6b36a; font-family: 'IBM Plex Mono', monospace; font-size: .7rem; letter-spacing: .14em; text-transform: uppercase; }
h1 { margin: 0 0 12px; font-size: clamp(2.2rem, 7vw, 4.6rem); line-height: 1.05; }
h2 { margin: 0; }
.lead { max-width: 620px; margin: 0 0 30px; color: #b9b4a9; line-height: 1.7; }
.movie-pick { display: flex; align-items: center; gap: 28px; margin: 32px 0; padding: 28px; border: 1px solid rgba(214,179,106,.35); background: radial-gradient(circle at 50% 0, rgba(214,179,106,.13), transparent 65%); }
.movie-pick.empty { justify-content: center; text-align: center; }
.movie-pick h2 { font-size: clamp(1.8rem, 5vw, 3rem); }
.movie-poster, .empty-poster { flex: 0 0 150px; width: 150px; height: 222px; border: 1px solid rgba(214,179,106,.45); border-radius: 3px; object-fit: cover; background: #302c28; }
.empty-poster { display: grid; place-items: center; color: #d6b36a; font-size: 4rem; }
.movie-details { flex: 1; }
.movie-details h2 { margin-bottom: 10px; }
.detail-copy { color: #b9b4a9; line-height: 1.6; }
.imdb-link { color: #d6b36a; font-weight: 700; }
.rank, .year { color: #d6b36a; font-family: 'IBM Plex Mono', monospace; font-size: .78rem; text-transform: uppercase; }
.dice-button, .primary-button { border: 0; border-radius: 3px; padding: 13px 20px; background: #d6b36a; color: #171719; font-weight: 800; cursor: pointer; }
.source-link { display: inline-block; margin-top: 28px; }
.search-label { display: block; margin-bottom: 8px; color: #d9d4c8; font-weight: 700; }
input { width: 100%; padding: 14px; border: 1px solid #4a4847; border-radius: 3px; background: #171719; color: #f4f1e8; font: inherit; }
.movie-list { display: grid; gap: 8px; margin: 24px 0 0; padding: 0; list-style: none; counter-reset: movie; }
.movie-list li { display: flex; align-items: center; gap: 16px; padding: 13px 10px; border-bottom: 1px solid #3a3838; }
.movie-rank { width: 30px; color: #d6b36a; font-family: 'IBM Plex Mono', monospace; }
.movie-list small, .character small, .wizard small { display: block; margin-top: 3px; color: #918c83; }
.got-card { background: linear-gradient(150deg, #252326, #171719); }
.got-tabs, .house-filter { display: flex; flex-wrap: wrap; gap: 8px; margin: 22px 0; }
.got-tabs button, .house-filter button { border: 1px solid #5b4a32; border-radius: 3px; padding: 9px 13px; background: transparent; color: #c5bda9; cursor: pointer; }
.got-tabs button.active, .house-filter button.active { background: #d6b36a; color: #171719; }
.character-grid, .wizard-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.character, .wizard { display: grid; justify-items: start; gap: 4px; padding: 16px; border: 1px solid #494144; border-radius: 4px; background: rgba(255,255,255,.03); color: #f4f1e8; text-align: left; cursor: pointer; }
.character:hover, .wizard:hover { border-color: #d6b36a; }
.sigil, .wizard-mark { color: #d6b36a; font-size: 1.4rem; }
.character { grid-template-columns: 72px 1fr; align-items: center; }
.character img { width: 72px; height: 96px; border-radius: 3px; object-fit: cover; background: #3b3633; }
.character-copy { display: block; }
.wizard { grid-template-columns: 72px 1fr; align-items: center; }
.wizard img { width: 72px; height: 96px; border-radius: 3px; object-fit: cover; background: #3b3633; }
.wizard-copy { display: block; }
.character-detail, .wizard-detail { display: grid; grid-template-columns: 150px 1fr; gap: 22px; margin-top: 18px; padding: 18px; border-left: 3px solid #d6b36a; background: rgba(214,179,106,.08); }
.character-detail > img { width: 150px; height: 200px; border-radius: 3px; object-fit: cover; background: #3b3633; }
.wizard-detail > img { width: 150px; height: 200px; border-radius: 3px; object-fit: cover; background: #3b3633; }
.character-detail span, .wizard-detail p { margin: 0; color: #b9b4a9; line-height: 1.6; }
dl { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 20px 0 0; }
dt { color: #918c83; font-size: .72rem; text-transform: uppercase; }
dd { margin: 2px 0 0; color: #f4f1e8; font-size: .88rem; }
.quote-box { padding: 28px 0; text-align: center; }
.quote-mark { margin: 0; color: #d6b36a; font-size: 4rem; line-height: .8; }
blockquote { margin: 18px auto; max-width: 600px; font-size: clamp(1.4rem, 4vw, 2.2rem); line-height: 1.35; }
.quote-author { color: #d6b36a; }
.empty-message { color: #b9b4a9; }
@media (max-width: 560px) { .media-page { padding: 48px 16px; } .character-grid, .wizard-grid { grid-template-columns: 1fr; } .movie-pick { flex-direction: column; padding: 24px 14px; text-align: center; } .movie-poster, .empty-poster { flex-basis: 190px; width: 128px; height: 190px; } .character-detail, .wizard-detail { grid-template-columns: 1fr; } .character-detail > img, .wizard-detail > img { width: 128px; height: 170px; } dl { grid-template-columns: 1fr; } }
</style>
