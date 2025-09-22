import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { aliases, mdi } from "vuetify/iconsets/mdi"; // 👈 import mdi support
import App from "./App.vue";

const vuetify = createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#667eea",
          secondary: "#764ba2",
          orange: "#ff6b35",
          blue: "#4285f4",
          green: "#34a853",
          red: "#ea4335",
          pink: "#e91e63",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi", // 👈 enable mdi icons
    aliases,
    sets: { mdi },
  },
});

createApp(App).use(vuetify).mount("#app");
