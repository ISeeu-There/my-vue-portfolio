<template>
  <section id="projects" class="py-16">
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-4">
          Perfect Solution <br />
          <span class="text-orange">For Your Business</span>
        </h2>
        <p class="text-h6 text-grey-darken-1 mx-auto" style="max-width: 600px">
          Explore my recent projects that showcase innovative solutions and
          creative approaches to modern business challenges.
        </p>
      </div>

      <div class="mb-8">
        <h3 class="text-h4 font-weight-bold mb-6">Recent Projects</h3>

        <v-row>
          <v-col
            v-for="project in projects"
            :key="project.title"
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card class="project-card h-100" elevation="2" rounded="xl" hover>
              <v-img :src="project.image" height="200" cover />

              <v-card-text class="pa-6">
                <h4 class="text-h6 font-weight-bold mb-3">
                  {{ project.title }}
                </h4>
                <p class="text-body-2 text-grey-darken-1 mb-4">
                  {{ project.description }}
                </p>

                <div class="d-flex flex-wrap gap-2 mb-4">
                  <v-chip
                    v-for="tech in project.technologies"
                    :key="tech"
                    size="small"
                    color="orange"
                    variant="outlined"
                  >
                    {{ tech }}
                  </v-chip>
                </div>

                <v-btn
                  color="orange"
                  variant="text"
                  append-icon="mdi-arrow-right"
                >
                  View Project
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="text-center">
        <h3 class="text-h5 font-weight-bold mb-4">Ready To Get Started?</h3>
        <p class="text-body-1 text-grey-darken-1 mb-6">
          Let's work together to bring your vision to life
        </p>
        <v-btn color="orange" size="large" variant="flat">
          Start Your Project
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Modern e-commerce solution with advanced features and seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    title: "Bryan Lore",
    description:
      "Creative portfolio website showcasing artistic works with interactive elements.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    technologies: ["React", "Three.js", "GSAP"],
  },
  {
    title: "Dashboard Analytics",
    description:
      "Comprehensive analytics dashboard with real-time data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    technologies: ["Angular", "D3.js", "Firebase"],
  },
];
</script>

<style scoped>
.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1) !important;
}

.gap-2 {
  gap: 8px;
}
</style>
