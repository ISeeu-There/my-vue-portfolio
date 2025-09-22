<template>
  <section id="services" class="resume py-16">
    <v-container>
      <!-- Header Section with Animation -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="section-badge mb-6">
          <v-chip
            color="orange"
            variant="outlined"
            size="large"
            class="px-6 py-2"
          >
            <v-icon icon="mdi-star" size="16" class="mr-2" />
            What I Do
          </v-chip>
        </div>

        <h2 class="text-h2 font-weight-bold mb-6 gradient-text">
          My Awesome
          <span class="text-orange d-block">Services</span>
        </h2>

        <p
          class="text-h6 text-grey-darken-1 mx-auto line-height-relaxed"
          style="max-width: 650px"
        >
          I offer a comprehensive range of digital services designed to
          transform your ideas into exceptional digital experiences that drive
          results and exceed expectations.
        </p>
      </div>

      <!-- Services Grid -->
      <v-row class="justify-center">
        <v-col
          v-for="(service, index) in services"
          :key="service.title"
          cols="12"
          sm="6"
          lg="4"
          class="mb-8"
          :data-aos="'fade-up'"
          :data-aos-delay="index * 100"
        >
          <v-card
            class="service-card h-100 position-relative overflow-hidden"
            elevation="0"
            rounded="xl"
            hover
            @mouseenter="onCardHover(index, true)"
            @mouseleave="onCardHover(index, false)"
          >
            <!-- Animated Background Gradient -->
            <div
              class="card-bg-gradient"
              :class="[
                `gradient-${service.color}`,
                { active: hoveredCard === index },
              ]"
            ></div>

            <!-- Card Content -->
            <v-card-text class="pa-10 text-center position-relative">
              <!-- Icon with Pulse Animation -->
              <div class="icon-container mb-8">
                <v-avatar
                  :color="service.color"
                  size="100"
                  class="icon-wrapper"
                  :class="{ pulse: hoveredCard === index }"
                >
                  <v-icon :icon="service.icon" color="white" size="50" />
                </v-avatar>

                <!-- Floating Decoration -->
                <div
                  class="floating-dots"
                  :class="{ animate: hoveredCard === index }"
                >
                  <div
                    class="dot"
                    :style="`background: ${getColorHex(service.color)}`"
                  ></div>
                  <div
                    class="dot"
                    :style="`background: ${getColorHex(service.color)}`"
                  ></div>
                  <div
                    class="dot"
                    :style="`background: ${getColorHex(service.color)}`"
                  ></div>
                </div>
              </div>

              <!-- Service Title -->
              <h3 class="text-h4 font-weight-bold mb-4 service-title">
                {{ service.title }}
              </h3>

              <!-- Service Description -->
              <p class="text-body-1 mb-8 line-height-relaxed">
                {{ service.description }}
              </p>

              <!-- Enhanced Buttons -->
              <div class="button-group">
                <v-btn
                  :color="service.color"
                  variant="flat"
                  rounded="pill"
                  size="large"
                  class="mb-3 service-btn-primary"
                  append-icon="mdi-arrow-right"
                >
                  Learn More
                </v-btn>

                <br />

                <v-btn
                  :color="service.color"
                  variant="outlined"
                  rounded="pill"
                  size="default"
                  class="service-btn-secondary"
                >
                  View Portfolio
                </v-btn>
              </div>

              <!-- Service Features -->
              <div class="service-features mt-6" v-if="service.features">
                <div class="d-flex justify-center flex-wrap gap-2">
                  <v-chip
                    v-for="feature in service.features"
                    :key="feature"
                    size="small"
                    :color="service.color"
                    variant="tonal"
                    class="ma-1"
                  >
                    {{ feature }}
                  </v-chip>
                </div>
              </div>
            </v-card-text>

            <!-- Card Number -->
            <div class="card-number">
              {{ String(index + 1).padStart(2, "0") }}
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Call to Action -->
      <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
        <v-card
          class="cta-card mx-auto pa-8"
          elevation="8"
          rounded="xl"
          max-width="600"
        >
          <h3 class="text-h4 font-weight-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="text-body-1 text-white mb-6">
            Let's discuss how we can bring your vision to life with exceptional
            results.
          </p>
          <v-btn
            color="cyan"
            size="x-large"
            variant="flat"
            rounded="pill"
            class="px-8 text-white"
            append-icon="mdi-rocket-launch"
          >
            Get Started Today
          </v-btn>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

const hoveredCard = ref<number | null>(null);

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "I create modern, responsive websites and web applications using cutting-edge technologies like Vue.js, React, and Node.js with focus on performance and user experience.",
    icon: "mdi-code-tags",
    color: "blue",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Modern Frameworks",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that enhance user experience and reflect your brand identity perfectly. I focus on creating designs that convert visitors into customers.",
    icon: "mdi-palette",
    color: "purple",
    features: ["User Research", "Prototyping", "Brand Identity"],
  },
  {
    title: "SEO & Marketing",
    description:
      "Optimize your digital presence for search engines and implement marketing strategies that increase visibility, drive organic traffic, and boost your business growth.",
    icon: "mdi-chart-line",
    color: "green",
    features: ["Technical SEO", "Content Strategy", "Analytics"],
  },
];

const onCardHover = (index: number, isHovered: boolean) => {
  hoveredCard.value = isHovered ? index : null;
};

const getColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    blue: "#2196F3",
    purple: "#9C27B0",
    green: "#4CAF50",
    orange: "#FF9800",
    red: "#F44336",
  };
  return colorMap[color] || "#2196F3";
};
</script>

<style scoped>
.resume {
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

.service-card {
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  color: cyan;
}

.service-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15) !important;
  border-color: transparent;
}

.card-bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.card-bg-gradient.active {
  opacity: 0.05;
}

.gradient-blue {
  background: linear-gradient(135deg, #2196f3, #21cbf3);
}

.gradient-purple {
  background: linear-gradient(135deg, #9c27b0, #e91e63);
}

.gradient-green {
  background: linear-gradient(135deg, #4caf50, #8bc34a);
}

.icon-container {
  position: relative;
  display: inline-block;
}

.icon-wrapper {
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.icon-wrapper.pulse {
  animation: pulse 2s infinite;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.floating-dots {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.floating-dots .dot {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease;
}

.floating-dots .dot:nth-child(1) {
  top: -60px;
  left: -30px;
}

.floating-dots .dot:nth-child(2) {
  top: -30px;
  right: -60px;
}

.floating-dots .dot:nth-child(3) {
  bottom: -60px;
  left: 30px;
}

.floating-dots.animate .dot {
  opacity: 0.6;
  animation: float-dots 2s ease-in-out infinite;
}

.service-title {
  transition: color 0.3s ease;
}

.service-card:hover .service-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.button-group {
  position: relative;
  z-index: 3;
}

.service-btn-primary {
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.service-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.service-btn-secondary {
  transition: all 0.3s ease;
}

.service-features {
  position: relative;
  z-index: 3;
}

.card-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.03);
  z-index: 1;
  transition: all 0.3s ease;
}

.service-card:hover .card-number {
  color: rgba(0, 0, 0, 0.08);
  transform: scale(1.1);
}

.cta-card {
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03) !important;
  color: cyan;

  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.1) !important;
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
    transform: translateY(-6px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes float-dots {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Responsive Design */
@media (max-width: 960px) {
  .service-card {
    margin-bottom: 2rem;
  }

  .card-number {
    font-size: 2rem;
    top: 15px;
    right: 15px;
  }
}

@media (max-width: 600px) {
  .service-card .pa-10 {
    padding: 2rem !important;
  }

  .icon-wrapper {
    width: 80px !important;
    height: 80px !important;
  }

  .icon-wrapper .v-icon {
    font-size: 40px !important;
  }
}
</style>
