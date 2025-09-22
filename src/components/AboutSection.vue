<template>
  <section class="resume-section py-16" id="resume">
    <v-container>
      <div class="resume-container">
        <v-row>
          <!-- Tab Navigation -->
          <v-col cols="12" xl="4" class="mb-8 mb-xl-0">
            <div class="tab-navigation">
              <v-card
                class="tab-nav-card"
                elevation="8"
                rounded="xl"
                color="grey-darken-3"
              >
                <v-card-text class="pa-6">
                  <v-tabs
                    v-model="activeTab"
                    direction="vertical"
                    color="cyan"
                    class="custom-tabs"
                    show-arrows
                  >
                    <v-tab
                      v-for="tab in tabs"
                      :key="tab.value"
                      :value="tab.value"
                      class="tab-item"
                    >
                      <v-icon :icon="tab.icon" size="24" class="mr-3" />
                      <span class="tab-text">{{ tab.label }}</span>
                    </v-tab>
                  </v-tabs>
                </v-card-text>
              </v-card>
            </div>
          </v-col>

          <!-- Tab Content -->
          <v-col cols="12" xl="8">
            <div class="tab-content-wrapper">
              <v-window v-model="activeTab" class="custom-window">
                <!-- Education Tab -->
                <v-window-item value="education">
                  <div class="section-content" data-aos="fade-left">
                    <div class="section-header mb-8">
                      <div class="d-flex align-center mb-4">
                        <v-avatar color="cyan" size="50" class="mr-4">
                          <v-icon icon="mdi-school" color="white" size="24" />
                        </v-avatar>
                        <h2 class="text-h3 font-weight-bold text-white">
                          {{ education.title }}
                        </h2>
                      </div>
                      <p class="text-h6 text-grey-lighten-1 max-width-600">
                        {{ education.description }}
                      </p>
                    </div>

                    <v-card
                      class="content-card"
                      elevation="4"
                      rounded="xl"
                      color="grey-darken-2"
                    >
                      <v-card-text class="pa-6">
                        <div
                          class="scroll-container"
                          style="max-height: 400px; overflow-y: auto"
                        >
                          <v-row>
                            <v-col
                              v-for="(item, index) in education.items"
                              :key="index"
                              cols="12"
                              lg="6"
                              class="mb-4"
                            >
                              <v-card
                                class="education-item"
                                elevation="2"
                                rounded="lg"
                                color="grey-darken-3"
                                hover
                              >
                                <v-card-text class="pa-4">
                                  <div class="d-flex flex-column h-100">
                                    <v-chip
                                      color="cyan"
                                      size="small"
                                      class="mb-3 align-self-start"
                                    >
                                      {{ item.duration }}
                                    </v-chip>
                                    <h4
                                      class="text-h6 font-weight-bold text-white mb-2"
                                    >
                                      {{ item.degree }}
                                    </h4>
                                    <p class="text-body-2 text-grey-lighten-1">
                                      {{ item.institution }}
                                    </p>
                                  </div>
                                </v-card-text>
                              </v-card>
                            </v-col>
                          </v-row>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-window-item>

                <!-- Skills Tab -->
                <v-window-item value="skills">
                  <div class="section-content" data-aos="fade-left">
                    <div class="section-header mb-8">
                      <div class="d-flex align-center mb-4">
                        <v-avatar color="cyan" size="50" class="mr-4">
                          <v-icon icon="mdi-cog" color="white" size="24" />
                        </v-avatar>
                        <h2 class="text-h3 font-weight-bold text-white">
                          {{ skills.title }}
                        </h2>
                      </div>
                      <p class="text-h6 text-grey-lighten-1 max-width-600">
                        {{ skills.description }}
                      </p>
                    </div>

                    <v-card
                      class="content-card"
                      elevation="4"
                      rounded="xl"
                      color="grey-darken-2"
                    >
                      <v-card-text class="pa-6">
                        <div
                          class="scroll-container"
                          style="max-height: 400px; overflow-y: auto"
                        >
                          <v-row>
                            <v-col
                              v-for="(skill, index) in skills.skillsList"
                              :key="index"
                              cols="6"
                              sm="4"
                              lg="3"
                              class="mb-4"
                            >
                              <v-card
                                class="skill-item"
                                elevation="2"
                                rounded="lg"
                                color="grey-darken-3"
                                hover
                                @mouseenter="animateSkill(index)"
                              >
                                <v-card-text class="pa-4 text-center">
                                  <v-avatar
                                    :color="skill.color || 'cyan'"
                                    size="40"
                                    class="mb-3"
                                  >
                                    <v-icon
                                      :icon="skill.icon"
                                      color="white"
                                      size="20"
                                    />
                                  </v-avatar>
                                  <p
                                    class="text-body-2 text-white font-weight-medium"
                                  >
                                    {{ skill.name }}
                                  </p>
                                </v-card-text>
                              </v-card>
                            </v-col>
                          </v-row>
                        </div>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-window-item>

                <!-- About Tab -->
                <v-window-item value="about">
                  <div class="section-content" data-aos="fade-left">
                    <div class="section-header mb-8">
                      <div class="d-flex align-center mb-4">
                        <v-avatar color="cyan" size="50" class="mr-4">
                          <v-icon icon="mdi-account" color="white" size="24" />
                        </v-avatar>
                        <h2 class="text-h3 font-weight-bold text-white">
                          {{ about.title }}
                        </h2>
                      </div>
                      <p class="text-h6 text-grey-lighten-1 max-width-600">
                        {{ about.description }}
                      </p>
                    </div>

                    <v-card
                      class="content-card"
                      elevation="4"
                      rounded="xl"
                      color="grey-darken-2"
                    >
                      <v-card-text class="pa-6">
                        <v-row>
                          <v-col
                            v-for="(info, index) in about.info"
                            :key="index"
                            cols="12"
                            lg="6"
                            class="mb-4"
                          >
                            <v-card
                              class="info-item"
                              elevation="2"
                              rounded="lg"
                              color="grey-darken-3"
                              hover
                            >
                              <v-card-text class="pa-4">
                                <div
                                  class="d-flex justify-space-between align-center"
                                >
                                  <div class="info-label">
                                    <v-chip
                                      color="cyan"
                                      size="small"
                                      class="mr-2"
                                    >
                                      {{ info.fieldName }}
                                    </v-chip>
                                  </div>
                                  <div class="info-value text-white">
                                    <template
                                      v-if="Array.isArray(info.fieldValue)"
                                    >
                                      <div
                                        v-for="(value, i) in info.fieldValue"
                                        :key="i"
                                        class="text-body-2"
                                      >
                                        {{ value }}
                                      </div>
                                    </template>
                                    <template v-else>
                                      <span class="text-body-1">{{
                                        info.fieldValue
                                      }}</span>
                                    </template>
                                  </div>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-window-item>
              </v-window>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// TypeScript Interfaces
interface TabItem {
  value: string;
  label: string;
  icon: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

interface Education {
  title: string;
  description: string;
  items: EducationItem[];
}

interface SkillItem {
  icon: string;
  name: string;
  color?: string;
}

interface Skills {
  title: string;
  description: string;
  skillsList: SkillItem[];
}

interface InfoItem {
  fieldName: string;
  fieldValue: string | string[];
}

interface About {
  title: string;
  description: string;
  info: InfoItem[];
}

// Reactive Data
const activeTab = ref<string>("education");

// Tab Configuration
const tabs: TabItem[] = [
  {
    value: "education",
    label: "Education",
    icon: "mdi-school",
  },
  {
    value: "skills",
    label: "Skills",
    icon: "mdi-cog",
  },
  {
    value: "about",
    label: "About Me",
    icon: "mdi-account",
  },
];

// About Data
const about: About = {
  title: "About Me",
  description:
    "I am a passionate and dedicated individual with a strong focus on web development.",
  info: [
    { fieldName: "Name", fieldValue: "Atout Mouloud Assem" },
    { fieldName: "Phone", fieldValue: "(+213 663869066)" },
    { fieldName: "Experience", fieldValue: "2 Years" },
    { fieldName: "LinkedIn", fieldValue: "Assem Atout" },
    { fieldName: "Nationality", fieldValue: "Algerian" },
    { fieldName: "Email", fieldValue: "atoutassem@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    {
      fieldName: "Languages",
      fieldValue: ["Arabic 100%", "English 70%", "French 40%"],
    },
  ],
};

// Education Data
const education: Education = {
  title: "My Education",
  description: "The key milestones in my educational journey.",
  items: [
    {
      institution: "Sig-Service ",
      degree: "Dely Ibrahim",
      duration: "3 months",
    },
    {
      institution: "Malek Ben Nabi High School",
      degree: "Baccalaureate",
      duration: "2019 - 2020",
    },
    {
      institution: "Done ✔",
      degree: "National Service Card",
      duration: "2025",
    },
    {
      institution: "INSFP Bouismail",
      degree: "TS - Web Developer & Multimedia",
      duration: "2022 - 2024",
    },
    {
      institution: "JULANAR Staouali",
      degree: "Cabin Crew Training",
      duration: "60 H",
    },
  ],
};

// Skills Data
const skills: Skills = {
  title: "My Skills",
  description: "Technologies and tools I excel in.",
  skillsList: [
    { icon: "mdi-language-html5", name: "HTML5", color: "orange-darken-1" },
    { icon: "mdi-language-css3", name: "CSS3", color: "blue" },
    {
      icon: "mdi-language-javascript",
      name: "JavaScript",
      color: "yellow-darken-3",
    },
    { icon: "mdi-react", name: "React.js", color: "light-blue" },
    { icon: "mdi-nodejs", name: "Node.js", color: "green" },
    { icon: "mdi-git", name: "Git", color: "orange" },
    { icon: "mdi-wordpress", name: "WordPress", color: "blue-darken-2" },
    { icon: "mdi-linux", name: "Linux", color: "grey-darken-1" },
    { icon: "mdi-tailwind", name: "Tailwind CSS", color: "teal" },
    { icon: "mdi-nuxt", name: "Next.js", color: "grey-darken-3" },
    { icon: "mdi-database", name: "MySQL", color: "blue-darken-3" },
    { icon: "mdi-vuejs", name: "Vue.js", color: "green-darken-1" },
    { icon: "mdi-laravel", name: "Laravel", color: "red-darken-1" },
    { icon: "mdi-firebase", name: "Firebase", color: "orange-accent-3" },
  ],
};

// Methods
const animateSkill = (index: number) => {
  // Add skill animation logic here if needed
  console.log(`Animating skill: ${skills.skillsList[index].name}`);
};

// Lifecycle
onMounted(() => {
  // Initialize any animations or setup
  console.log("Resume section mounted");
});
</script>

<style scoped>
.resume-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 80vh;
  position: relative;
}

.resume-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="80" cy="30" r="1.5" fill="%23ffffff" opacity="0.05"/><circle cx="40" cy="70" r="1" fill="%23ffffff" opacity="0.05"/></svg>');
}

.resume-container {
  position: relative;
  z-index: 2;
}

.max-width-600 {
  max-width: 600px;
}

/* Tab Navigation Styles */
.tab-nav-card {
  background: rgba(55, 65, 81, 0.9) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-tabs {
  background: transparent;
}

.tab-item {
  min-height: 70px !important;
  justify-content: flex-start !important;
  text-transform: none !important;
  font-weight: 600 !important;
  font-size: 1.1rem !important;
  margin-bottom: 8px !important;
  border-radius: 12px !important;
  transition: all 0.3s ease !important;
}

.tab-item:hover {
  background: rgba(14, 165, 233, 0.1) !important;
  transform: translateX(8px);
}

.tab-item.v-tab--selected {
  background: rgba(14, 165, 233, 0.2) !important;
  color: #0ea5e9 !important;
}

.tab-text {
  font-size: 1.25rem;
  font-weight: 700;
}

/* Content Styles */
.content-card {
  background: rgba(55, 65, 81, 0.8) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-window {
  background: transparent;
}

.section-content {
  min-height: 500px;
}

.section-header h2 {
  background: linear-gradient(135deg, #0ea5e9, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Education Items */
.education-item {
  transition: all 0.3s ease;
  background: rgba(68, 78, 96, 0.8) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 100px;
}

.education-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.2) !important;
  border-color: rgba(14, 165, 233, 0.3);
}

/* Skill Items */
.skill-item {
  transition: all 0.3s ease;
  background: rgba(68, 78, 96, 0.8) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 100px;
}

.skill-item:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.2) !important;
  border-color: rgba(14, 165, 233, 0.3);
}

/* Info Items */
.info-item {
  transition: all 0.3s ease;
  background: rgba(68, 78, 96, 0.8) !important;
  border: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 60px;
}

.info-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.15) !important;
  border-color: rgba(14, 165, 233, 0.3);
}

.info-value {
  text-align: right;
  max-width: 60%;
}

/* Scroll Container */
.scroll-container {
  scrollbar-width: thin;
  scrollbar-color: rgba(14, 165, 233, 0.3) transparent;
}

.scroll-container::-webkit-scrollbar {
  width: 6px;
}

.scroll-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: rgba(14, 165, 233, 0.5);
  border-radius: 3px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background: rgba(14, 165, 233, 0.7);
}

/* Responsive Design */
@media (max-width: 1264px) {
  .tab-navigation {
    margin-bottom: 2rem;
  }

  .custom-tabs {
    flex-direction: row !important;
  }

  .tab-item {
    min-width: 120px;
    margin-bottom: 0 !important;
    margin-right: 8px !important;
  }
}

@media (max-width: 600px) {
  .tab-text {
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 1.75rem !important;
  }

  .info-value {
    max-width: 55%;
    font-size: 0.875rem;
  }
}
</style>
