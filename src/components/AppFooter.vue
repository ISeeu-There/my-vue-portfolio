<template>
  <v-footer class="bg-grey-darken-4 text-white pa-8">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="mb-6">
          <h3 class="text-h5 font-weight-bold mb-4">Atout Assem Mouloud Dev</h3>
          <p class="text-body-2 text-cyan mb-4">
            Creating exceptional digital experiences through innovative design
            and development solutions.
          </p>
          <div class="social-links">
            <v-btn
              v-for="social in socialLinks"
              :key="social.icon"
              :icon="social.icon"
              variant="text"
              color="white"
              class="mr-2"
              size="small"
            />
          </div>
        </v-col>

        <v-col cols="12" md="2" class="mb-6">
          <h4 class="text-h6 font-weight-bold mb-4">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </v-col>

        <v-col cols="12" md="4" class="mb-6">
          <h4 class="text-h6 font-weight-bold mb-4">Get In Touch</h4>
          <div class="contact-info">
            <p class="mb-2">
              <v-icon icon="mdi-email" size="16" class="mr-2" />
              atoutassem@gmail.com
            </p>
            <p class="mb-2">
              <v-icon icon="mdi-phone" size="16" class="mr-2" />
              +213 663869066
            </p>
            <p class="mb-2">
              <v-icon icon="mdi-map-marker" size="16" class="mr-2" />
              Tipaza, DZ
            </p>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6" color="white" opacity="0.2" />

      <div class="text-center text-body-2">
        <p>
          &copy; {{ currentYear }} Atout Assem Mouloud Dev. All rights reserved.
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface SocialLink {
  icon: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { icon: "mdi-facebook", url: "#" },
  { icon: "mdi-twitter", url: "#" },
  { icon: "mdi-instagram", url: "#" },
  { icon: "mdi-linkedin", url: "#" },
  { icon: "mdi-github", url: "https://github.com/ISeeu-There" },
];

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.contact-info {
  color: rgba(255, 255, 255, 0.8);
}
</style>
