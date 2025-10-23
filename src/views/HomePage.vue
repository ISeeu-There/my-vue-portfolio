<template>
  <v-app>
    <v-main>
      <HeroSection id="hero" class="hero" />
      <ServicesSection id="about" />
      <AboutSection id="services" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AboutSection from "../components/AboutSection.vue";
import ContactSection from "../components/ContactSection.vue";
import HeroSection from "../components/HeroSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Jaro:opsz@6..72&family=Luckiest+Guy&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");

.v-application {
  font-family: "Cairo", sans-serif !important;
}

.v-application * {
  font-family: "Cairo", sans-serif !important;
}
.v-main {
  padding-top: 0 !important;
}
.hero {
  margin-top: 60px;
}
@media (max-width: 960px) {
  .v-main {
    overflow-x: hidden;
  }
}
</style>
