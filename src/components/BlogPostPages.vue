<template>
  <v-container class="blog-post-page py-12 mt-10">
    <template v-if="post">
      <!-- Back Button -->
      <v-row>
        <v-col cols="12">
          <v-btn
            color="cyan"
            variant="text"
            prepend-icon="mdi-arrow-left"
            @click="router.push('/blog')"
          >
            Back to Blog
          </v-btn>
        </v-col>
      </v-row>

      <!-- Post Header -->
      <v-row class="mt-4">
        <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
          <v-chip color="primary" class="mb-10">{{ post.category }}</v-chip>

          <h1 class="text-h3 font-weight-bold mb-4 text-cyan">
            {{ post.title }}
          </h1>

          <div class="d-flex align-center mb-6 text-medium-emphasis">
            <v-avatar size="40" color="primary" class="mr-3">
              <span class="text-white">{{ post.author[0] }}</span>
            </v-avatar>
            <div>
              <div class="font-weight-medium text-cyan">{{ post.author }}</div>
              <div class="text-caption text-cyan">
                {{ formatDate(post.publishedDate) }} · {{ post.readTime }} min
                read
              </div>
            </div>
          </div>

          <v-img
            :src="post.thumbnail"
            max-height="400"
            class="rounded mb-8 p-5 bg-black"
          />

          <!-- Post Description -->
          <p class="text-h6 mb-8 text-cyan">{{ post.description }}</p>

          <!-- Tags -->
          <v-chip-group class="mb-8">
            <v-chip
              v-for="tag in post.tags"
              :key="tag"
              color="primary"
              variant="outlined"
              class="text-cyan"
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>

      <!-- Installation Steps -->
      <v-row class="instalation">
        <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
          <h2 class="text-h4 font-weight-bold mb-6 text-cyan">
            Installation Guide
          </h2>

          <v-timeline side="end" align="start">
            <v-timeline-item
              v-for="(step, index) in post.installation"
              :key="index"
              :dot-color="index === 0 ? 'cyan' : 'grey'"
              size="small"
            >
              <template #opposite>
                <div class="text-caption font-weight-bold text-cyan">
                  Step {{ index + 1 }}
                </div>
              </template>

              <v-card class="step-cards mb-4">
                <v-card-title class="text-h6 text-cyan">{{
                  step.title
                }}</v-card-title>
                <v-card-text>
                  <p class="mb-4 text-cyan">{{ step.description }}</p>

                  <v-card
                    v-if="step.code"
                    variant="outlined"
                    class="code-block"
                  >
                    <v-card-text class="pa-0">
                      <div
                        class="d-flex justify-space-between align-center px-4 py-2 bg-grey-darken-4"
                      >
                        <v-chip size="small" variant="flat">{{
                          step.language
                        }}</v-chip>
                        <v-btn
                          icon="mdi-content-copy"
                          size="small"
                          variant="text"
                          @click="copyCode(step.code!)"
                        />
                      </div>
                      <pre class="px-4 py-3"><code>{{ step.code }}</code></pre>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>

      <!-- Video Tutorial -->
      <v-row v-if="post.videoUrl" class="mt-8">
        <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
          <h2 class="text-h4 font-weight-bold mb-6 text-cyan">
            Video Tutorial
          </h2>

          <v-card>
            <div class="video-container">
              <iframe
                :src="getEmbedUrl(post.videoUrl)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Post Content -->
      <v-row class="mt-8">
        <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
          <v-divider class="my-8" />
          <div class="post-content text-cyan" v-html="post.content" />
        </v-col>
      </v-row>

      <!-- Share Section -->
      <v-row class="mt-8">
        <v-col cols="12" md="10" offset-md="1" lg="8" offset-lg="2">
          <v-divider class="my-8" />
          <div class="text-center">
            <h3 class="text-h5 mb-4 text-cyan">Share this post</h3>
            <v-btn-group color="cyan">
              <v-btn @click="copyLink">
                <v-icon size="28" color="white">mdi-link</v-icon></v-btn
              >
            </v-btn-group>
          </div>
        </v-col>
      </v-row>
    </template>

    <!-- Not Found -->
    <v-row v-else>
      <v-col cols="12" class="text-center py-12">
        <v-icon size="64" color="grey-lighten-1"
          >mdi-alert-circle-outline</v-icon
        >
        <h2 class="text-h4 mt-4">Post not found</h2>
        <v-btn class="mt-4" to="/blog" color="primary">Go to Blog</v-btn>
      </v-col>
    </v-row>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" :timeout="2000" color="success">
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { blogPosts } from "../data/blogData";

const route = useRoute();
const router = useRouter();

const snackbar = ref(false);
const snackbarText = ref("");

const post = computed(() => {
  const slug = route.params.slug as string;
  return blogPosts.find((p) => p.slug === slug);
});
const getEmbedUrl = (url: string) => {
  if (!url) return "";
  return url.includes("watch?v=") ? url.replace("watch?v=", "embed/") : url;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const copyCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code);
    snackbarText.value = "Code copied to clipboard!";
    snackbar.value = true;
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    snackbarText.value = "Link copied to clipboard!";
    snackbar.value = true;
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};
</script>

<style scoped>
.blog-post-page {
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #44403c 0%, #0c0a09 100%);
}

.code-block {
  background: #1e1e1e;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: "Roboto Mono", monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #d4d4d4;
}

.code-block code {
  display: block;
  white-space: pre;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.post-content {
  font-size: 1.1rem;
  line-height: 1.8;
}

.post-content :deep(h2) {
  font-size: 1.75rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
}

.post-content :deep(h3) {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1.5rem 0 0.75rem;
}

.post-content :deep(p) {
  margin-bottom: 1rem;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin: 1rem 0;
  padding-left: 2rem;
}

.post-content :deep(li) {
  margin-bottom: 0.5rem;
}
.step-cards {
  background: rgba(255, 255, 255, 0.03) !important;
}
@media (max-width: 920px) {
  .instalation {
    display: flex;
    flex-direction: column;
  }
  .instalation .v-timeline {
    display: flex;
    flex-direction: column;
    justify-self: start;
    width: 250px;
  }
  .instalation .v-timeline .v-card-text {
    display: flex;
    flex-direction: column;
    justify-self: start;
    width: 350px;
  }
}
</style>
