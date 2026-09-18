<template>
  <footer class="site-footer" aria-labelledby="footer-brand">
    <div class="footer-media" aria-hidden="true">
      <video class="footer-bg" autoplay muted loop playsinline preload="auto" poster="https://d2ol7oe51mr4n9tcloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4f690bd1-881a-4192-82f2-d714d34c8fb9.png">
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260901_122529_931c22c8-8d2d-47c0-ad51-b97f56a91e42.mp4" type="video/mp4" />
      </video>
    </div>

    <div class="footer-inner">
      <div class="footer-grid">
        <div class="brand">
          <div class="brand-lockup">
            <h2 id="footer-brand" class="brand-name">Behzad Kazemi</h2>
          </div>
          <ul class="contact-list">
            <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13ZM5.2 6.1l6.8 5.2 6.8-5.2H5.2Zm13.6 2.5-6.2 4.7a1 1 0 0 1-1.2 0L5.2 8.6v9.9c0 .17.13.3.3.3h13c.17 0 .3-.13.3-.3V8.6Z" /></svg><a href="mailto:bkazemi1994@gmail.com">bkazemi1994@gmail.com</a></li>
            <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 2.5h3.1l1.45 4.1-1.9 1.9a15.7 15.7 0 0 0 6.25 6.25l1.9-1.9 4.1 1.45v3.1a2.6 2.6 0 0 1-2.85 2.58C10.2 18.99 5.01 13.8 3.92 5.35A2.6 2.6 0 0 1 6.6 2.5Z" /></svg><a href="tel:+910000000000">+91 00000 00000</a></li>
            <li><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5a7 7 0 0 0-7 7c0 5.1 7 12 7 12s7-6.9 7-12a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" /></svg><span>Berlin, Germany</span></li>
          </ul>
        </div>
        <div class="footer-contact-form">
          <h3>Get In Touch</h3>
          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <label for="footer-name">Name</label>
              <input id="footer-name" v-model="form.name" type="text" required placeholder="Your name" />
            </div>
            <div class="form-row">
              <label for="footer-email">Email</label>
              <input id="footer-email" v-model="form.email" type="email" required placeholder="your@email.com" />
            </div>
            <div class="form-row">
              <label for="footer-subject">Subject</label>
              <input id="footer-subject" v-model="form.subject" type="text" required placeholder="Subject of your message" />
            </div>
            <div class="form-row">
              <label for="footer-message">Message</label>
              <textarea id="footer-message" v-model="form.message" required placeholder="Your message..." rows="4"></textarea>
            </div>
            <button type="submit">Send Message</button>
            <p v-if="formStatus" class="form-status">{{ formStatus.message }}</p>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p>Created with love by Behzad Kazemi</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const form = ref<FormData>({ name: '', email: '', subject: '', message: '' })
const formStatus = ref<{ message: string } | null>(null)

const handleSubmit = () => {
  formStatus.value = { message: 'Message sent successfully! I\'ll get back to you soon.' }
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>

<style scoped>
.site-footer { --footer-ink: var(--primary); --footer-muted: var(--text-secondary); position: relative; isolation: isolate; display: flex; min-height: 72vh; min-height: 72svh; overflow: hidden; overflow-wrap: break-word; color: var(--footer-ink); background: var(--bg-white); padding: clamp(2rem, 3.5vh, 3rem) max(clamp(1.25rem, 4vw, 4.5rem), env(safe-area-inset-right)) max(clamp(1.25rem, 2vh, 2rem), env(safe-area-inset-bottom)) max(clamp(1.25rem, 4vw, 4.5rem), env(safe-area-inset-left)); }
.footer-media { position: absolute; inset: 0; z-index: -2; pointer-events: none; opacity: .16; }
.footer-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center bottom; pointer-events: none; animation: fade-in 1.35s ease both; filter: sepia(.2) hue-rotate(55deg) saturate(.8); }
.footer-inner { position: relative; width: 100%; max-width: 1440px; margin: 0 auto; flex: 1; display: flex; flex-direction: column; }
.footer-grid { display: grid; align-items: start; gap: clamp(2rem, 5vw, 6rem); grid-template-columns: minmax(240px, .85fr) minmax(320px, 1.15fr); }
.brand-lockup { display: flex; align-items: center; gap: clamp(.65rem, 1vw, 1rem); animation: rise-in .72s cubic-bezier(.22,1,.36,1) .04s both; }.brand-mark { width: clamp(52px, 4.4vw, 74px); height: auto; }.brand-name { margin: 0; color: var(--text-primary); font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.5rem, 2.5vw, 2.4rem); line-height: 1; letter-spacing: -.04em; }
.brand-blurb, .newsletter p { color: var(--footer-muted); line-height: 1.62; }.brand-blurb { max-width: 28ch; margin: clamp(1.15rem, 2.4vh, 1.9rem) 0 0; animation: rise-in .72s cubic-bezier(.22,1,.36,1) .12s both; }
.contact-list, .link-list { list-style: none; padding: 0; }.contact-list { display: flex; flex-direction: column; gap: clamp(.6rem, 1.2vh, .95rem); margin: clamp(1.15rem, 2.4vh, 1.9rem) 0 0; }.contact-list li { display: flex; align-items: center; gap: .85rem; color: var(--footer-muted); animation: rise-in .72s cubic-bezier(.22,1,.36,1) both; }.contact-list li:nth-child(1) { animation-delay: .2s; }.contact-list li:nth-child(2) { animation-delay: .28s; }.contact-list li:nth-child(3) { animation-delay: .36s; }.contact-list svg { width: 19px; height: 19px; flex: 0 0 19px; color: var(--footer-ink); }.contact-list a, .contact-list span, .link-list a, .legal a { color: inherit; }.contact-list a:hover, .legal a:hover { text-decoration: underline; text-underline-offset: 3px; }
.footer-contact-form { animation: rise-in .72s cubic-bezier(.22,1,.36,1) .2s both; }.footer-contact-form h3 { margin: 0 0 1.25rem; color: var(--text-primary); font-family: 'IBM Plex Mono', monospace; font-size: 1rem; letter-spacing: .055em; text-transform: uppercase; }.footer-contact-form form { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }.form-row { display: flex; flex-direction: column; gap: .4rem; }.form-row:nth-child(4), .footer-contact-form button, .form-status { grid-column: 1 / -1; }.form-row label { color: var(--text-primary); font: 500 .78rem 'IBM Plex Mono', monospace; }.form-row input, .form-row textarea { width: 100%; border: 1px solid var(--border-light); border-radius: 2px; outline: 0; color: var(--text-primary); background: rgba(13, 29, 22, .72); padding: .75rem .85rem; font: inherit; }.form-row textarea { resize: vertical; }.form-row input::placeholder, .form-row textarea::placeholder { color: var(--footer-muted); opacity: .8; }.form-row input:focus, .form-row textarea:focus { border-color: var(--footer-ink); box-shadow: 0 0 0 2px rgba(141, 255, 101, .16); }.footer-contact-form button { justify-self: start; border: 1px solid var(--footer-ink); border-radius: 2px; padding: .75rem 1.2rem; color: var(--bg-white); background: var(--footer-ink); box-shadow: none; font: 500 .78rem 'IBM Plex Mono', monospace; text-transform: uppercase; }.footer-contact-form button:hover { background: var(--primary-dark); }.form-status { margin: 0; color: var(--footer-ink); font-size: .85rem; }
.col-title { margin: 0 0 clamp(1.15rem, 2.4vh, 1.85rem); color: var(--text-primary); font-family: 'IBM Plex Mono', monospace; font-size: clamp(.82rem, .5vw + .68rem, 1rem); font-weight: 600; letter-spacing: .055em; text-transform: uppercase; animation: rise-in .72s cubic-bezier(.22,1,.36,1) var(--col-stagger, .2s) both; }.link-list { display: flex; flex-direction: column; gap: clamp(.62rem, 1.35vh, 1.05rem); }.link-list li { animation: rise-in .72s cubic-bezier(.22,1,.36,1) calc(var(--col-stagger, .2s) + var(--link-delay, .08s)) both; }.link-list li:nth-child(2) { --link-delay: .16s; }.link-list li:nth-child(3) { --link-delay: .24s; }.link-list li:nth-child(4) { --link-delay: .32s; }.link-list li:nth-child(5) { --link-delay: .4s; }.link-list a { display: inline-block; color: var(--footer-muted); transition: opacity .2s ease, transform .2s ease; }.link-list a:hover { opacity: .62; transform: translateX(2px); }.footer-grid > .col:nth-child(2) { --col-stagger: .16s; }.footer-grid > .col:nth-child(3) { --col-stagger: .24s; }.footer-grid > .col:nth-child(4) { --col-stagger: .32s; }
.newsletter p { max-width: 32ch; margin: 0 0 clamp(1rem, 2.2vh, 1.6rem); animation: rise-in .72s cubic-bezier(.22,1,.36,1) .48s both; }.subscribe { display: flex; width: 100%; max-width: 380px; border: 1px solid var(--border-light); background: rgba(13, 29, 22, .72); animation: rise-in .72s cubic-bezier(.22,1,.36,1) .56s both; }.subscribe input { flex: 1; min-width: 0; border: 0; outline: 0; color: var(--text-primary); background: transparent; padding: .95rem 1.05rem; font: inherit; font-size: .9rem; }.subscribe input::placeholder { color: var(--footer-muted); opacity: .85; }.subscribe input:focus-visible { box-shadow: inset 0 0 0 2px rgba(141, 255, 101, .25); }.subscribe button { width: clamp(56px, 4vw, 66px); border: 0; border-radius: 0; padding: 0; color: var(--bg-white); background: var(--footer-ink); box-shadow: none; display: grid; place-items: center; transition: background .2s ease; }.subscribe button:hover { background: var(--primary-dark); }.subscribe button svg { width: 22px; height: 22px; }
.footer-bottom { display: flex; align-items: center; justify-content: center; gap: 1.25rem 2rem; flex-wrap: wrap; margin-top: auto; padding-top: clamp(2rem, 4vh, 3rem); color: var(--footer-muted); text-align: center; }.footer-bottom p { margin: 0; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }@keyframes rise-in { from { opacity: 0; transform: translate3d(0, 14px, 0); } to { opacity: 1; transform: translate3d(0, 0, 0); } }@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
@media (max-width: 1100px) { .footer-grid { grid-template-columns: 1fr 1fr; row-gap: clamp(2rem, 4vh, 2.75rem); }.brand, .footer-contact-form { grid-column: 1 / -1; }.footer-media { position: relative; inset: auto; order: 1; flex-shrink: 0; width: 100%; height: auto; margin-top: 2rem; z-index: 0; opacity: .24; }.footer-bg { position: relative; inset: auto; width: 100%; height: auto; max-width: 100%; object-fit: contain; object-position: center bottom; transform: none; display: block; }.footer-media::after { content: ''; position: absolute; left: 0; right: 0; top: 0; height: clamp(52px, 16vw, 120px); pointer-events: none; z-index: 1; background: linear-gradient(to bottom, var(--bg-white) 0%, rgba(7, 16, 13, .65) 38%, rgba(7, 16, 13, 0) 100%); }.site-footer { height: auto; min-height: 100svh; overflow-x: hidden; overflow-y: visible; }.footer-inner { order: 0; padding: 0 max(clamp(1.25rem, 4vw, 4.5rem), env(safe-area-inset-right)) clamp(1.25rem, 3vh, 2rem) max(clamp(1.25rem, 4vw, 4.5rem), env(safe-area-inset-left)); }.footer-bottom { padding-bottom: clamp(1.25rem, 3vh, 2rem); } }
@media (max-width: 720px) { .footer-grid { grid-template-columns: 1fr; gap: clamp(1.75rem, 5vw, 2.25rem); }.footer-contact-form form { grid-template-columns: 1fr; }.footer-bottom { flex-direction: column; align-items: flex-start; gap: 1.5rem; }.contact-list { gap: .25rem; }.contact-list a, .contact-list span { padding: .4rem 0; } }
@media (max-width: 440px) { .footer-grid { gap: 1.35rem; } }@media (max-width: 359px) { .footer-grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .footer-bg { display: none; animation: none; }.site-footer { background-color: var(--bg-white); background-image: url('https://d2ol7oe51mr4n9tcloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4f690bd1-881a-4192-82f2-d714d34c8fb9.png'); background-position: center bottom; background-size: cover; background-repeat: no-repeat; }.footer-media::after { content: none; }.brand-lockup, .brand-blurb, .contact-list li, .col .col-title, .col .link-list li, .newsletter .col-title, .newsletter p, .subscribe, .socials a, .legal a { animation: none; }.link-list a:hover, .socials a:hover { transform: none; } }
</style>