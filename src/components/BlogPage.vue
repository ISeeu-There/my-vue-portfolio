<template>
  <v-container class="blog-page py-12 mt-10">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h2 font-weight-bold mb-4 text-cyan text-center">
          Tech Blog
        </h1>
        <p class="p-field text-h6 text-center text-medium-emphasis mb-12">
          Discover new technologies, installation guides, and video tutorials
        </p>
      </v-col>
    </v-row>

    <!-- Search and Filter -->
    <v-row class="mb-8">
      <v-col cols="12" md="8">
        <v-text-field
          v-model="searchQuery"
          label="Search posts..."
          variant="outlined"
          density="comfortable"
          color="cyan"
          class="cyan-text-field"
          clearable
        >
          <template v-slot:prepend-inner>
            <v-icon color="cyan">mdi-magnify</v-icon>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          v-model="selectedCategory"
          :items="categories"
          label="Category"
          variant="outlined"
          density="comfortable"
          clearable
          color="cyan"
          class="category"
        />
      </v-col>
    </v-row>

    <!-- Blog Posts Grid -->
    <v-row>
      <v-col
        v-for="post in filteredPosts"
        :key="post.id"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          class="blog-card"
          elevation="2"
          hover
          @click="goToPost(post.slug)"
        >
          <v-img :src="post.thumbnail" height="200" cover>
            <div class="video-badge" v-if="post.videoUrl">
              <v-icon color="white">mdi-play-circle</v-icon>
            </div>
          </v-img>

          <v-card-title class="text-h6 text-cyan">
            {{ post.title }}
          </v-card-title>

          <v-card-subtitle class="mb-2">
            <v-icon color="cyan" size="small" class="mr-1">mdi-calendar</v-icon>
            <p class="text-cyan">
              {{ formatDate(post.publishedDate) }}
              <v-icon size="small" class="ml-3 mr-1">mdi-clock-outline</v-icon>
              {{ post.readTime }} min read
            </p>
          </v-card-subtitle>

          <v-card-text>
            <p class="text-body-2 mb-3 text-cyan">{{ post.description }}</p>

            <v-chip-group>
              <v-chip
                v-for="tag in post.tags.slice(0, 3)"
                :key="tag"
                size="small"
                variant="outlined"
                color="cyan"
              >
                <span class="text-cyan"> {{ tag }}</span>
              </v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="cyan" variant="text" append-icon="mdi-arrow-right">
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Empty State -->
    <v-row v-if="filteredPosts.length === 0">
      <v-col cols="12" class="text-center py-12">
        <v-icon size="64" color="grey-lighten-1"
          >mdi-file-document-outline</v-icon
        >
        <p class="text-h6 text-medium-emphasis mt-4 text-cyan">
          No posts found
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { blogPosts } from "../data/blogData";

const router = useRouter();

const searchQuery = ref("");
const selectedCategory = ref("");

const categories = [
  "All",
  "Authentication",
  "Databases",
  "UI Libraries",
  "Tools",
  "API",
];

const filteredPosts = computed(() => {
  let posts = blogPosts;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  if (selectedCategory.value && selectedCategory.value !== "All") {
    posts = posts.filter((post) => post.category === selectedCategory.value);
  }

  return posts;
});

const goToPost = (slug: string) => {
  router.push(`/blog/${slug}`);
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped>
.blog-page {
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #44403c 0%, #0c0a09 100%);
}

.blog-card {
  cursor: pointer;
  transition: transform 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03) !important;
}

.blog-card:hover {
  transform: translateY(-4px);
}

.video-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cyan-text-field {
  color: cyan;
}
.category {
  color: cyan;
}
</style>
