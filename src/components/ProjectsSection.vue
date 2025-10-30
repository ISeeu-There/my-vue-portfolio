<template>
  <section id="projects" class="py-16 resume-section">
    <v-container>
      <!-- Header Section -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="section-badge mb-6">
          <v-chip
            color="cyan"
            variant="outlined"
            size="large"
            class="px-6 py-2"
          >
            <v-icon
              icon="mdi-briefcase-variant"
              color="cyan"
              size="16"
              class="mr-2"
            />
            My Work
          </v-chip>
        </div>

        <h2 class="text-h2 font-weight-bold mb-6 gradient-text">
          Perfect Solution
          <span class="text-orange d-block">For Your Business</span>
        </h2>

        <p
          class="text-h6 text-cyan mx-auto line-height-relaxed"
          style="max-width: 650px"
        >
          Explore my recent projects that showcase innovative solutions and
          creative approaches to modern business challenges with cutting-edge
          technologies.
        </p>
      </div>

      <!-- Projects Section Header -->
      <div class="mb-12" data-aos="fade-up" data-aos-delay="100">
        <div class="d-flex align-center mb-6">
          <v-avatar color="cyan" size="50" class="mr-4">
            <v-icon icon="mdi-folder-multiple" color="white" size="24" />
          </v-avatar>
          <h3 class="text-h3 font-weight-bold gradient-text">
            Recent Projects
          </h3>
        </div>
      </div>

      <!-- Projects Grid -->
      <v-row class="justify-center">
        <v-col
          v-for="(project, index) in projects"
          :key="project.title"
          cols="12"
          sm="6"
          lg="4"
          class="mb-8 d-flex"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <v-card
            class="project-card d-flex flex-column h-100"
            elevation="0"
            rounded="xl"
            hover
            @mouseenter="onCardHover(index, true)"
            @mouseleave="onCardHover(index, false)"
          >
            <!-- Animated Background Gradient -->
            <div
              class="card-bg-gradient"
              :class="{ active: hoveredCard === index }"
            ></div>

            <!-- Image Section -->
            <div class="image-container position-relative">
              <v-img
                :src="project.image"
                height="250"
                cover
                class="project-image"
              >
                <div class="image-overlay">
                  <v-btn
                    icon
                    color="white"
                    size="large"
                    class="preview-btn"
                    :class="{ show: hoveredCard === index }"
                  >
                    <v-icon icon="mdi-eye" size="24" />
                  </v-btn>
                </div>
              </v-img>

              <!-- Status Badge -->
              <v-chip
                :color="
                  project.status === 'Live'
                    ? 'green'
                    : project.status === 'In Progress'
                    ? 'orange'
                    : 'blue'
                "
                size="small"
                class="status-badge"
              >
                <v-icon
                  :icon="getStatusIcon(project.status)"
                  size="12"
                  class="mr-1"
                />
                {{ project.status }}
              </v-chip>
            </div>

            <!-- Card Content -->
            <v-card-text class="pa-6 d-flex flex-column flex-grow-1">
              <!-- Title -->
              <div class="d-flex align-center mb-3">
                <v-avatar
                  :color="project.primaryTech.color"
                  size="30"
                  class="mr-3"
                >
                  <v-icon
                    :icon="project.primaryTech.icon"
                    color="white"
                    size="16"
                  />
                </v-avatar>
                <h4 class="text-h5 font-weight-bold project-title">
                  {{ project.title }}
                </h4>
              </div>

              <!-- Description -->
              <p class="text-body-1 text-white mb-4 line-height-relaxed">
                {{ project.description }}
              </p>

              <!-- Stats -->
              <div class="project-stats mb-4">
                <v-row no-gutters>
                  <v-col cols="4" class="text-center">
                    <div class="stat-item">
                      <div class="text-h6 font-weight-bold text-orange">
                        {{ project.stats.duration }}
                      </div>
                      <div class="text-caption text-grey">Duration</div>
                    </div>
                  </v-col>
                  <v-col cols="4" class="text-center">
                    <div class="stat-item">
                      <div class="text-h6 font-weight-bold text-green">
                        {{ project.stats.team }}
                      </div>
                      <div class="text-caption text-grey">Team Size</div>
                    </div>
                  </v-col>
                  <v-col cols="4" class="text-center">
                    <div class="stat-item">
                      <div class="text-h6 font-weight-bold text-blue">
                        {{ project.stats.role }}
                      </div>
                      <div class="text-caption text-grey">Role</div>
                    </div>
                  </v-col>
                </v-row>
              </div>

              <!-- Tech Stack -->
              <div class="technologies mb-6">
                <div
                  class="text-subtitle-2 font-weight-bold mb-2 text-grey-darken-2"
                >
                  Tech Stack:
                </div>
                <div class="d-flex flex-wrap gap-2">
                  <v-chip
                    v-for="tech in project.technologies"
                    :key="tech.name"
                    size="small"
                    :color="tech.color"
                    variant="tonal"
                    class="tech-chip"
                  >
                    <v-icon :icon="tech.icon" size="12" class="mr-1" />{{
                      tech.name
                    }}
                  </v-chip>
                </div>
              </div>

              <!-- Buttons fixed at bottom -->
              <div class="mt-auto button-group">
                <v-btn
                  variant="flat"
                  rounded="pill"
                  size="default"
                  class="mb-2 project-btn-primary"
                  append-icon="mdi-open-in-new"
                  block
                  :href="project.liveUrl"
                  target="_blank"
                  v-if="project.liveUrl"
                >
                  View Live Demo
                </v-btn>
                <v-btn
                  variant="flat"
                  rounded="pill"
                  size="default"
                  class="mb-2 project-btn-primary disabled"
                  append-icon="mdi-web-off"
                  block
                  v-else
                >
                  Not Available Live Demo
                </v-btn>

                <v-btn
                  v-if="project.gitUrl"
                  color="cyan"
                  variant="outlined"
                  rounded="pill"
                  size="default"
                  class="project-btn-secondary"
                  append-icon="mdi-github"
                  block
                  :href="project.gitUrl"
                >
                  View Source Code
                </v-btn>
                <v-btn
                  variant="flat"
                  rounded="pill"
                  size="default"
                  class="mb-2 project-btn-primary disabled"
                  append-icon="mdi-web-off"
                  block
                  v-else
                >
                  Not Available Source Code
                </v-btn>
              </div>
            </v-card-text>

            <!-- Card Number -->
            <div class="card-number">
              {{ String(index + 1).padStart(2, "0") }}
            </div>

            <!-- Floating Decoration -->
            <div
              class="floating-decoration"
              :class="{ animate: hoveredCard === index }"
            >
              <div class="decoration-dot" style="background: #ff9800"></div>
              <div class="decoration-dot" style="background: #2196f3"></div>
              <div class="decoration-dot" style="background: #4caf50"></div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import canubeatme from "@/assets/canubeatme.png";
import eventgg from "@/assets/event-gg.png";
import firstgame from "@/assets/myfirstgame.png";
import myportfolio from "@/assets/myportfolio.png";

import realestateagency from "@/assets/real-estate-agency.png";
import todo from "@/assets/todo.png";
import ekadia from "@/assets/ekadia.png";
import aichat from "@/assets/aichatbot.png";
import food from "@/assets/food.png";

import { ref } from "vue";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

interface ProjectStats {
  duration: string;
  team: string;
  role: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: TechItem[];
  primaryTech: TechItem;
  status: "Live" | "In Progress" | "Completed";
  liveUrl?: string;
  gitUrl?: string;
  stats: ProjectStats;
}

const hoveredCard = ref<number | null>(null);

const projects: Project[] = [
  {
    title: "Gaming Platform ",
    description:
      "An interactive gaming platform that connects players with events and tournaments in real-time. Built with Vue.js, Vuetify, and Firebase, it features a responsive interface, real-time updates, and seamless user experience for gamers looking to join or host gaming events.",
    image: eventgg,
    primaryTech: { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
    status: "Live",
    stats: { duration: "still in dev", team: "only me", role: "Lead" },
    technologies: [
      { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
      { name: "Vuetify", icon: "mdi-vuetify", color: "green-darken-2" },
      { name: "Firebase", icon: "mdi-firebase", color: "green-darken-3" },
      { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
    ],
    liveUrl: "https://game-event-rho.vercel.app/",
    gitUrl: "https://github.com/ISeeu-There/game-event",
  },
  {
    title: "AI ChatBot",
    description:
      "A Vue-based AI chatbot project focused on natural conversations and data intelligence. The chatbot supports real-time interaction and, when integrated with a backend, can perform dynamic data analysis, pattern detection, and automated reporting. ",
    image: aichat,
    primaryTech: { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
    status: "Live",
    stats: { duration: "still in dev", team: "only me", role: "Lead" },
    technologies: [
      { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
      { name: "Vuetify", icon: "mdi-vuetify", color: "green-darken-2" },
      { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
    ],
    liveUrl: "https://ai-chat-bot-blush-rho.vercel.app/",
    gitUrl: "",
  },
  {
    title: "Food App",
    description:
      "Food App is a modern food delivery web application built with Vue 3, Vuetify.It offers a smooth user experience, a clean interface, and full functionality for ordering and managing meals. ",
    image: food,
    primaryTech: { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
    status: "Live",
    stats: { duration: "still in dev", team: "only me", role: "Lead" },
    technologies: [
      { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
      { name: "Vuetify", icon: "mdi-vuetify", color: "green-darken-2" },
      { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
    ],
    liveUrl: "https://vercel.com/iseeu-theres-projects/food-app-xuzu",
    gitUrl: "",
  },
  {
    title: "Save Bean",
    description:
      "My first Game that make it after 30 min from learn how use JS for games development , You have pass the Boxes and Keep the Score Count , You can Control Bean by using space for jumb, and left / right for makes him move , but be carful if he moves out off screen u will lose , ENJOY ",
    image: firstgame,
    primaryTech: { name: "Vanilla.js", icon: "mdi-vuejs", color: "yellow" },
    status: "Live",
    stats: { duration: "Done", team: "only me", role: "Lead" },
    technologies: [
      { name: "vanilla.js", icon: "mdi-vuejs", color: "yellow" },
      { name: "Kaplay", icon: "mdi-kaplay", color: "green-darken-2" },
      { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
    ],
    liveUrl: "https://save-bean.vercel.app/",
    gitUrl: "https://github.com/ISeeu-There/save-bean",
  },
  {
    title: "E-Kadia",
    description:
      "Completed a 3-month internship focused on modern web development.Worked with Vue 3, TypeScript, and REST APIs to build and improve front-endapplications.Refactored a core project (E-Kadia): migrated the codebase from Vue 2 (JavaScript)to Vue 3 (TypeScript), improving maintainability and scalability.Collaborated with the development team to ensure code quality, best practices, andsmooth integration with backend services.Gained hands-on experience in frontend frameworks, API consumption, and project modernization",
    image: ekadia,
    primaryTech: { name: "Vuejs", icon: "mdi-vuejs", color: "green" },
    status: "Live",
    stats: { duration: " 4 weeks", team: "only me", role: "lead" },
    technologies: [
      { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
      { name: "Vuetify", icon: "mdi-vuetify", color: "blue" },
      { name: "Firebase", icon: "mdi-firebase", color: "blue" },

      { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
    ],
  },
  {
    title: "E-Football Site Web",
    description:
      "A sleek and responsive web platform for e-football enthusiasts, built with Next.js and Node.js. The site allows users to explore football content, stay updated with the latest matches, and enjoy a smooth and interactive browsing experience.",
    image: canubeatme,
    primaryTech: { name: "Next.js", icon: "mdi-react", color: "green" },
    status: "Completed",
    stats: { duration: " 1 week", team: "only me", role: "Lead" },
    technologies: [
      { name: "Next.js", icon: "mdi-vuejs", color: "green" },
      { name: "Node.js", icon: "mdi-nodejs", color: "green-darken-2" },
    ],
    liveUrl: "https://game-awwards.vercel.app/",
    gitUrl: "https://github.com/ISeeu-There/game-awwards",
  },
  {
    title: "Real Estat Agency",
    description:
      "A modern real estate web application built with Vue.js, Vuetify, Firebase, Node.js, and TypeScript. The platform allows users to browse properties with ease, while an integrated admin dashboard enables full management of listings, users, and transactions in real-time.",
    image: realestateagency,
    primaryTech: { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
    status: "In Progress",
    stats: { duration: "2 week", team: "only me", role: "Lead" },
    technologies: [
      { name: "Vue.js", icon: "mdi-vuejs", color: "green" },
      { name: "Node.js", icon: "mdi-nodejs", color: "green-darken-2" },
      { name: "Firebase", icon: "mdi-firebase", color: "green-darken-3" },
      { name: "Vuetify", icon: "mdi-vuetify", color: "blue" },
      { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
    ],
    liveUrl: "https://real-estate-agency-tawny.vercel.app/",
    gitUrl: "https://github.com/ISeeu-There/real-estate-agency",
  },
  {
    title: "My Portfolio Created with React",
    description:
      "Creative portfolio website showcasing artistic works with interactive 3D elements, smooth animations, and immersive user experience using cutting-edge web technologies.",
    image: myportfolio,
    primaryTech: { name: "React", icon: "mdi-react", color: "blue" },
    status: "Completed",
    stats: { duration: "2 Mo", team: "2", role: "Dev" },
    technologies: [
      { name: "React", icon: "mdi-react", color: "blue" },
      { name: "Three.js", icon: "mdi-cube-outline", color: "purple" },
      { name: "GSAP", icon: "mdi-animation", color: "green" },
      { name: "WebGL", icon: "mdi-triangle", color: "orange" },
    ],
    gitUrl: "https://github.com/ISeeu-There/My-Portfolio",
  },
  {
    title: "To Do List",
    description:
      "A clean and responsive To-Do List app built with Vue 3 and TypeScript, featuring task creation, editing, deletion, and completion tracking with a modern UI.",
    image: todo,
    primaryTech: { name: "vue", icon: "mdi-vuejs", color: "green" },
    status: "Completed",
    stats: { duration: "1 week", team: "only me", role: "lead" },
    technologies: [
      { name: "Vue", icon: "mdi-vuejs", color: "green" },
      { name: "TypeScript", icon: "mdi-language-typescript", color: "blue" },
    ],
    gitUrl: "https://github.com/ISeeu-There/to-do-list-",
  },
];

const onCardHover = (index: number, isHovered: boolean) => {
  hoveredCard.value = isHovered ? index : null;
};

const getStatusIcon = (status: string): string => {
  switch (status) {
    case "Live":
      return "mdi-web";
    case "In Progress":
      return "mdi-progress-clock";
    case "Completed":
      return "mdi-check-circle";
    default:
      return "mdi-help-circle";
  }
};
</script>

<style scoped>
.resume-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}
.line-height-relaxed {
  line-height: 1.8;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-badge {
  animation: float 3s ease-in-out infinite;
}

.project-card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(20px);
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15) !important;
  border-color: transparent;
}

.card-bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #ff9800, #ff5722);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.card-bg-gradient.active {
  opacity: 0.03;
}

.image-container {
  overflow: hidden;
}

.project-image {
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.preview-btn {
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.preview-btn.show {
  transform: translateY(0);
}

.status-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
}

.project-title {
  transition: color 0.3s ease;
  position: relative;
  color: cyan;
  z-index: 2;
}

.project-card:hover .project-title {
  background: linear-gradient(135deg, cyan);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.project-stats {
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-item {
  transition: transform 0.2s ease;
}

.project-card:hover .stat-item {
  transform: translateY(-2px);
}

.technologies {
  position: relative;
  z-index: 2;
}

.tech-chip {
  transition: all 0.2s ease;
}

.tech-chip:hover {
  transform: translateY(-2px);
}

.button-group {
  position: relative;
  z-index: 3;
}

.project-btn-primary {
  background-color: cyan;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 152, 0, 0.3);
}

.project-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 152, 0, 0.4);
}

.project-btn-secondary {
  transition: all 0.3s ease;
}

.card-number {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 4rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.02);
  z-index: 1;
  transition: all 0.3s ease;
}

.project-card:hover .card-number {
  color: rgba(255, 152, 0, 0.1);
  transform: scale(1.1);
}

.floating-decoration {
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 1;
}

.decoration-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 8px 0;
  opacity: 0;
  transition: all 0.4s ease;
}

.floating-decoration.animate .decoration-dot {
  opacity: 0.6;
  animation: float-dots 2s ease-in-out infinite;
}

.floating-decoration.animate .decoration-dot:nth-child(2) {
  animation-delay: 0.7s;
}

.floating-decoration.animate .decoration-dot:nth-child(3) {
  animation-delay: 1.4s;
}

/* CTA Section */
.cta-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(248, 250, 252, 0.95)
  ) !important;
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%23FF9800" opacity="0.1"/><circle cx="80" cy="30" r="1.5" fill="%232196F3" opacity="0.1"/><circle cx="40" cy="70" r="1" fill="%234CAF50" opacity="0.1"/></svg>');
}

.cta-content {
  z-index: 2;
}

.cta-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15) !important;
}

.trust-indicators {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 2rem;
}

.trust-item {
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.trust-item:hover {
  opacity: 1;
}

.gap-2 {
  gap: 8px;
}

/* Animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes float-dots {
  0%,
  100% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(10px);
  }
}

/* Responsive Design */
@media (max-width: 960px) {
  .project-card {
    margin-bottom: 2rem;
  }

  .card-number {
    font-size: 3rem;
    top: 15px;
    left: 15px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons .v-btn {
    width: 100%;
    margin: 0 0 1rem 0 !important;
  }
}

@media (max-width: 600px) {
  .project-card .pa-6 {
    padding: 1.5rem !important;
  }

  .project-stats {
    padding: 12px;
  }

  .trust-indicators {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
