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
    <v-toolbar-title class="title" @click="goToHome" style="cursor: pointer">
      Assem ...
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Menu buttons -->
    <div class="d-none d-md-flex">
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        variant="text"
        class="mx-2 items"
        @click="handleNavigation(item)"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <!-- Mobile Menu -->
    <v-app-bar-nav-icon
      class="d-md-none"
      color="cyan"
      @click="drawer = !drawer"
    />
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    class="mobile-drawer"
  >
    <v-list density="compact" nav>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        @click="handleMobileNavigation(item)"
        class="mobile-menu-item"
      >
        <v-list-item-title class="text-cyan">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

interface MenuItem {
  title: string;
  target: string;
  isRoute?: boolean;
}

const router = useRouter();
const route = useRoute();
const drawer = ref(false);

// Scroll state
const isScrolling = ref(false);

// Menu items
const menuItems: MenuItem[] = [
  { title: "Home", target: "/", isRoute: true },
  { title: "About", target: "#about" },
  { title: "Services", target: "#services" },
  { title: "Projects", target: "#projects" },
  { title: "Contact", target: "#contact" },
  { title: "Blog", target: "/blog", isRoute: true },
];

// Handle navigation (scroll or route)
const handleNavigation = (item: MenuItem) => {
  if (item.isRoute) {
    router.push(item.target);
  } else {
    if (route.path !== "/") {
      router.push("/").then(() => {
        setTimeout(() => scrollTo(item.target), 300);
      });
    } else {
      scrollTo(item.target);
    }
  }
};

// Handle mobile navigation (closes drawer)
const handleMobileNavigation = (item: MenuItem) => {
  handleNavigation(item);
  drawer.value = false;
};

// Go to home
const goToHome = () => {
  if (route.path !== "/") {
    router.push("/");
  } else {
    scrollTo("#hero");
  }
};

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

/* Mobile Drawer Styles */
.mobile-drawer {
  background: #44403c !important;
}

.mobile-menu-item {
  margin: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-menu-item:hover {
  background: rgba(0, 255, 255, 0.1);
}

.text-cyan {
  color: cyan;
  font-weight: bold;
}

/* Desktop menu is hidden on mobile */
@media (max-width: 960px) {
  .items {
    display: none;
  }
}
</style>
