<template>
  <section class="contact" id="contact">
    <div class="container">
      <div class="section-title">
        <h2>Get In Touch</h2>
      </div>
      <div class="contact-content">
        <div class="contact-text fade-in-up">
          <p>
            I'm always interested in hearing about new opportunities and collaborative projects.
            Whether you'd like to discuss a potential project, have a question, or just want to say hello, feel free to reach out!
          </p>
          <p>
            I'll do my best to respond as quickly as possible.
          </p>
          <div class="contact-methods">
            <div class="contact-method">
              <div class="method-icon">✉️</div>
              <div class="method-info">
                <h4>Email</h4>
                <a href="mailto:bkazemi1994@gmail.com">bkazemi1994@gmail.com</a>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">💼</div>
              <div class="method-info">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/behzadkazemi" target="_blank" rel="noopener noreferrer">linkedin.com/in/behzadkazemi</a>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">💻</div>
              <div class="method-info">
                <h4>GitHub</h4>
                <a href="https://github.com/behzadkazemi" target="_blank" rel="noopener noreferrer">github.com/behzadkazemi</a>
              </div>
            </div>
            <div class="contact-method">
              <div class="method-icon">📍</div>
              <div class="method-info">
                <h4>Location</h4>
                <p>Berlin, Germany 🇩🇪</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-form fade-in-up">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="Your name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required placeholder="your@email.com" />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" v-model="form.subject" required placeholder="Subject of your message" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" required placeholder="Your message..." rows="6"></textarea>
            </div>
            <button type="submit" class="btn-primary">Send Message</button>
            <p v-if="formStatus" :class="['form-status', formStatus.type]">{{ formStatus.message }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'success' | 'error'
  message: string
}

const form = ref<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formStatus = ref<FormStatus | null>(null)

const handleSubmit = async () => {
  try {
    console.log('Form submitted:', form.value)
    
    formStatus.value = {
      type: 'success',
      message: 'Message sent successfully! I\'ll get back to you soon.'
    }
    
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    setTimeout(() => {
      formStatus.value = null
    }, 5000)
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'Failed to send message. Please try again or email me directly.'
    }
  }
}
</script>

<style scoped>
.contact {
  background-color: var(--bg-white);
  position: relative;
}

.contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-light), transparent);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contact-text {
  animation-delay: 0.2s;
}

.contact-text p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 30px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 40px;
}

.contact-method {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.contact-method:hover {
  transform: translateX(8px);
}

.method-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.method-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.method-info a,
.method-info p {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  margin: 0;
}

.method-info a:hover {
  color: var(--primary);
}

.contact-form {
  animation-delay: 0.4s;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  color: var(--text-primary);
  background-color: #f9fafb;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
  background-color: white;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

button[type="submit"] {
  width: 100%;
  padding: 14px 32px;
  font-weight: 600;
  border-radius: 8px;
  background-color: var(--primary);
  color: white;
  transition: all 0.3s ease;
  font-size: 1rem;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
}

.form-status {
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  animation: fadeInUp 0.3s ease;
}

.form-status.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.form-status.error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-form {
    animation-delay: 0.2s;
  }

  .contact-text p {
    font-size: 1rem;
  }
}
</style>
