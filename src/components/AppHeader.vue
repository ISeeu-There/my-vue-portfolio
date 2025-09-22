<template>
  <v-app-bar
    app
    elevation="0"
    class="px-4 transition-colors"
    :style="{
      backdropFilter: 'blur(10px)',
      backgroundColor: '#44403c',
    }"
  >
    <!-- Toolbar title with dynamic text color -->
    <v-toolbar-title class="title"> Assem ... </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Menu buttons -->
    <v-btn
      v-for="item in menuItems"
      :key="item.title"
      variant="text"
      class="mx-2 items"
      @click="scrollTo(item.target)"
    >
      {{ item.title }}
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface MenuItem {
  title: string;
  target: string;
}

// Scroll state
const isScrolling = ref(false);

// Menu items
const menuItems: MenuItem[] = [
  { title: "Home", target: "#hero" },
  { title: "About", target: "#about" },
  { title: "Services", target: "#services" },
  { title: "Projects", target: "#projects" },
];

// Smooth scroll function
const scrollTo = (target: string) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Detect scrolling
const handleScroll = () => {
  isScrolling.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Smooth transition for color changes */
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=Jaro:opsz@6..72&family=Luckiest+Guy&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");

.v-app-bar,
.v-toolbar-title {
  transition: background-color 0.3s, color 0.3s;
}
.title {
  color: cyan;
  font-weight: bold;
}
.items {
  color: cyan;
  font-weight: bold;
}
@media (max-width: 960px) {
  .items {
    display: flex;
    justify-content: center;
    width: 10px;
  }
}
</style>
