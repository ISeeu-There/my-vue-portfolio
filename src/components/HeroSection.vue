<template>
  <section id="hero" class="hero-section">
    <v-container fluid class="fill-height">
      <v-row class="fill-height align-center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <div class="hero-content">
            <h1 class="text-h2 font-weight-bold mb-4">
              Hy<span class="text-cyan">!</span> I Am <br />
              <span class="text-cyan">Atout Mouloud Assem</span>
            </h1>
            <p class="text-h6 white--text mb-6 font-weight-bold">
              I am a Multimedia and Web Developer skilled in creating dynamic
              ,user-fiendly digital experiences through desing,coding,and
              interactive content. I specialzie in building responsive websites
              and application that blend creativity with technology for optimal
              user engagement
            </p>
            <v-btn
              color="cyan"
              size="large"
              variant="flat"
              class="mr-4 text-white"
            >
              Download CV
              <v-icon>mdi-download</v-icon>
            </v-btn>

            <div class="social-links mt-6">
              <v-btn
                v-for="social in socialLinks"
                :key="social.icon"
                :icon="social.icon"
                variant="text"
                color="white"
                class="mx-2"
              />
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="text-center">
          <div class="profile-container position-relative">
            <v-img
              :src="mypic"
              class="profile-image mx-auto"
              alt="Brunao Dev"
            />

            <!-- Floating cards -->
            <v-card
              class="floating-card floating-card-1"
              elevation="8"
              rounded="xl"
            >
              <v-card-text class="pa-3">
                <div class="d-flex align-center">
                  <v-avatar color="green" size="32" class="mr-3">
                    <v-icon color="white">mdi-check</v-icon>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold">Best Design</div>
                    <div class="text-caption text-white">Award</div>
                  </div>
                </div>
              </v-card-text>
            </v-card>

            <v-card
              class="floating-card floating-card-2"
              elevation="8"
              rounded="xl"
            >
              <v-card-text class="pa-3">
                <div class="text-center">
                  <v-icon color="blue" size="24">mdi-code-tags</v-icon>
                  <div class="font-weight-bold mt-1">UI/UX</div>
                  <div class="text-caption text-white">Designer</div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import mypic from "@/assets/mypictur.png";
interface SocialLink {
  icon: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  { icon: "mdi-facebook", url: "#" },
  { icon: "mdi-twitter", url: "#" },
  { icon: "mdi-instagram", url: "#" },
  { icon: "mdi-linkedin", url: "#" },
];
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #44403c 0%, #0c0a09 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="30" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="40" cy="70" r="1.5" fill="%23ffffff" opacity="0.1"/></svg>');
}

.hero-content {
  position: relative;
  color: white;
  z-index: 2;
  margin-left: 40px;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 6px solid cyan;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.profile-container {
  display: inline-block;
}

.floating-card {
  position: absolute;
  z-index: 3;
  backdrop-filter: blur(10px);
  background: cyan !important;
}

.floating-card-1 {
  top: 20%;
  left: -50px;
  animation: float 3s ease-in-out infinite;
}

.floating-card-2 {
  bottom: 20%;
  right: -20px;
  animation: float 3s ease-in-out infinite 1.5s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.social-links {
  opacity: 0.8;
}
</style>
