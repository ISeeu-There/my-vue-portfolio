<!-- src/components/ContactSection.vue -->
<template>
  <section id="contact" class="contact-section py-16">
    <v-container>
      <!-- Header Section with Animation -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="section-badge mb-6">
          <v-chip
            color="cyan"
            variant="outlined"
            size="large"
            class="px-6 py-2"
          >
            <v-icon icon="mdi-message-text" size="16" class="mr-2" />
            Get In Touch
          </v-chip>
        </div>

        <h2 class="text-h2 font-weight-bold mb-6 gradient-text">
          Let's Work
          <span class="text-cyan d-block">Together</span>
        </h2>

        <p
          class="text-h6 text-grey-lighten-1 mx-auto line-height-relaxed"
          style="max-width: 650px"
        >
          Ready to turn your vision into reality? I'd love to hear about your
          project and discuss how we can create something amazing together.
        </p>
      </div>

      <v-row class="justify-center">
        <!-- Contact Form -->
        <v-col cols="12" lg="8" xl="6">
          <v-card
            class="contact-form-card"
            elevation="0"
            rounded="xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <!-- Form Header -->
            <v-card-title class="pa-8 pb-4">
              <div class="d-flex align-center">
                <v-avatar color="cyan" size="50" class="mr-4">
                  <v-icon icon="mdi-email-edit" color="white" size="24" />
                </v-avatar>
                <div>
                  <h3 class="text-h4 font-weight-bold text-white">
                    Send Message
                  </h3>
                  <p class="text-body-2 text-grey-lighten-1 mb-0">
                    Fill out the form below
                  </p>
                </div>
              </div>
            </v-card-title>

            <v-card-text class="pa-8 pt-4">
              <v-form ref="contactForm" @submit.prevent="submitForm">
                <v-row>
                  <v-col cols="12" md="6">
                    <div class="input-wrapper">
                      <v-text-field
                        v-model="form.name"
                        label="Your Name"
                        variant="outlined"
                        color="cyan"
                        class="transparent-input"
                        :rules="nameRules"
                        prepend-inner-icon="mdi-account"
                        :focused="focusedField === 'name'"
                        @focus="focusedField = 'name'"
                        @blur="focusedField = null"
                        required
                      />
                    </div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <div class="input-wrapper">
                      <v-text-field
                        v-model="form.email"
                        label="Your Email"
                        variant="outlined"
                        color="cyan"
                        class="transparent-input"
                        :rules="emailRules"
                        prepend-inner-icon="mdi-email"
                        :focused="focusedField === 'email'"
                        @focus="focusedField = 'email'"
                        @blur="focusedField = null"
                        required
                      />
                    </div>
                  </v-col>
                </v-row>

                <div class="input-wrapper">
                  <v-text-field
                    v-model="form.subject"
                    label="Subject"
                    variant="outlined"
                    color="cyan"
                    class="transparent-input"
                    :rules="subjectRules"
                    prepend-inner-icon="mdi-subtitles"
                    :focused="focusedField === 'subject'"
                    @focus="focusedField = 'subject'"
                    @blur="focusedField = null"
                    required
                  />
                </div>

                <div class="input-wrapper">
                  <v-textarea
                    v-model="form.message"
                    label="Your Message"
                    variant="outlined"
                    color="cyan"
                    rows="6"
                    class="transparent-input"
                    :rules="messageRules"
                    prepend-inner-icon="mdi-message-text"
                    :focused="focusedField === 'message'"
                    @focus="focusedField = 'message'"
                    @blur="focusedField = null"
                    required
                  />
                </div>

                <!-- Form Statistics -->
                <div class="form-stats mb-6">
                  <v-row no-gutters>
                    <v-col cols="4" class="text-center">
                      <div class="stat-item">
                        <v-icon
                          icon="mdi-clock-outline"
                          color="cyan"
                          size="20"
                          class="mb-1"
                        />
                        <div class="text-caption text-grey-lighten-1">
                          24h Response
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="4" class="text-center">
                      <div class="stat-item">
                        <v-icon
                          icon="mdi-shield-check"
                          color="green"
                          size="20"
                          class="mb-1"
                        />
                        <div class="text-caption text-grey-lighten-1">
                          Secure Form
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="4" class="text-center">
                      <div class="stat-item">
                        <v-icon
                          icon="mdi-check-circle"
                          color="orange"
                          size="20"
                          class="mb-1"
                        />
                        <div class="text-caption text-grey-lighten-1">
                          Free Quote
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>

                <!-- Submit Button -->
                <div class="text-center">
                  <v-btn
                    type="submit"
                    color="cyan"
                    size="x-large"
                    variant="flat"
                    rounded="pill"
                    class="px-12 submit-btn"
                    :loading="isSubmitting"
                    append-icon="mdi-send"
                  >
                    <template v-if="!isSubmitting"> Send Message </template>
                    <template v-else> Sending... </template>
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>

            <!-- Floating Decoration -->
            <div class="form-decoration">
              <div class="decoration-dot cyan"></div>
              <div class="decoration-dot orange"></div>
              <div class="decoration-dot green"></div>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Contact Information Cards -->
      <div class="contact-info-section mt-16">
        <div class="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-h3 font-weight-bold text-white mb-4">
            Other Ways to <span class="text-cyan">Connect</span>
          </h3>
          <p class="text-h6 text-grey-lighten-1">
            Choose your preferred method of communication
          </p>
        </div>

        <v-row class="justify-center">
          <v-col
            v-for="(contact, index) in contactInfo"
            :key="contact.title"
            cols="12"
            sm="6"
            lg="4"
            class="mb-6"
            :data-aos="'fade-up'"
            :data-aos-delay="300 + index * 100"
          >
            <v-card
              class="contact-info-card h-100"
              elevation="0"
              rounded="xl"
              @mouseenter="onContactHover(index, true)"
              @mouseleave="onContactHover(index, false)"
            >
              <!-- Card Background Gradient -->
              <div
                class="contact-card-gradient"
                :class="[
                  `gradient-${contact.color}`,
                  { active: hoveredContact === index },
                ]"
              ></div>

              <v-card-text class="pa-8 text-center position-relative">
                <!-- Icon with Animation -->
                <div class="contact-icon-wrapper mb-6">
                  <v-avatar
                    :color="contact.color"
                    size="80"
                    class="contact-avatar"
                    :class="{ pulse: hoveredContact === index }"
                  >
                    <v-icon :icon="contact.icon" color="white" size="35" />
                  </v-avatar>

                  <!-- Floating rings -->
                  <div
                    class="floating-ring"
                    :class="{ animate: hoveredContact === index }"
                    :style="`border-color: ${getColorHex(contact.color)}`"
                  ></div>
                  <div
                    class="floating-ring ring-2"
                    :class="{ animate: hoveredContact === index }"
                    :style="`border-color: ${getColorHex(contact.color)}`"
                  ></div>
                </div>

                <!-- Contact Details -->
                <h4 class="text-h5 font-weight-bold text-white mb-3">
                  {{ contact.title }}
                </h4>

                <p class="text-h6 text-grey-lighten-1 mb-6">
                  {{ contact.value }}
                </p>

                <!-- Action Button -->
                <v-btn
                  :color="contact.color"
                  variant="outlined"
                  rounded="pill"
                  size="large"
                  class="contact-action-btn"
                  :append-icon="contact.actionIcon"
                >
                  {{ contact.actionText }}
                </v-btn>

                <!-- Background Pattern -->
                <div class="contact-pattern"></div>
              </v-card-text>

              <!-- Card Number -->
              <div class="contact-card-number">
                {{ String(index + 1).padStart(2, "0") }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Success Message -->
      <v-snackbar
        v-model="showSuccess"
        color="success"
        timeout="4000"
        location="top"
        rounded="pill"
      >
        <div class="d-flex align-center">
          <v-icon icon="mdi-check-circle" class="mr-2" />
          Message sent successfully! I'll get back to you soon.
        </div>
      </v-snackbar>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

interface ContactInfo {
  title: string;
  value: string;
  icon: string;
  color: string;
  actionText: string;
  actionIcon: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const isSubmitting = ref(false);
const showSuccess = ref(false);
const contactForm = ref();
const focusedField = ref<string | null>(null);
const hoveredContact = ref<number | null>(null);

const form = reactive<ContactForm>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contactInfo: ContactInfo[] = [
  {
    title: "Email Me",
    value: "atoutassem@gmail.com",
    icon: "mdi-email",
    color: "blue",
    actionText: "Send Email",
    actionIcon: "mdi-send",
  },
  {
    title: "Call Me",
    value: "+213 663869066",
    icon: "mdi-phone",
    color: "green",
    actionText: "Make Call",
    actionIcon: "mdi-phone",
  },
  {
    title: "Location",
    value: "Algeria, DZ",
    icon: "mdi-map-marker",
    color: "red",
    actionText: "View Map",
    actionIcon: "mdi-map",
  },
];

const nameRules = [
  (v: string) => !!v || "Name is required",
  (v: string) => v.length >= 2 || "Name must be at least 2 characters",
];

const emailRules = [
  (v: string) => !!v || "Email is required",
  (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const subjectRules = [(v: string) => !!v || "Subject is required"];

const messageRules = [
  (v: string) => !!v || "Message is required",
  (v: string) => v.length >= 10 || "Message must be at least 10 characters",
];

const onContactHover = (index: number, isHovered: boolean) => {
  hoveredContact.value = isHovered ? index : null;
};

const getColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    blue: "#2196F3",
    green: "#4CAF50",
    red: "#F44336",
    cyan: "#00BCD4",
    orange: "#FF9800",
  };
  return colorMap[color] || "#2196F3";
};

const submitForm = async () => {
  const { valid } = await contactForm.value.validate();

  if (valid) {
    isSubmitting.value = true;

    // Simulate form submission
    setTimeout(() => {
      isSubmitting.value = false;
      showSuccess.value = true;

      // Reset form
      Object.assign(form, {
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      contactForm.value.resetValidation();
    }, 2000);
  }
};
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="%2300BCD4" opacity="0.1"/><circle cx="80" cy="30" r="1.5" fill="%23FF9800" opacity="0.1"/><circle cx="40" cy="70" r="1" fill="%234CAF50" opacity="0.1"/></svg>');
}

.line-height-relaxed {
  line-height: 1.8;
}

.gradient-text {
  background: linear-gradient(135deg, #00bcd4 0%, #0097a7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-badge {
  animation: float 3s ease-in-out infinite;
}

/* Contact Form Styles */
.contact-form-card {
  background: rgba(55, 65, 81, 0.9) !important;
  backdrop-filter: blur(30px);
  border: 1px solid rgba(0, 188, 212, 0.2);
  position: relative;
  overflow: hidden;
}

.transparent-input {
  margin-bottom: 1.5rem;
}

.transparent-input :deep(.v-field) {
  background-color: transparent !important;
  border: 2px solid rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px !important;
  transition: all 0.3s ease !important;
}

.transparent-input :deep(.v-field:hover) {
  border-color: rgba(0, 188, 212, 0.5) !important;
  box-shadow: 0 4px 20px rgba(0, 188, 212, 0.1) !important;
}

.transparent-input :deep(.v-field--focused) {
  border-color: #00bcd4 !important;
  box-shadow: 0 0 0 2px rgba(0, 188, 212, 0.2) !important;
  transform: translateY(-2px) !important;
}

.transparent-input :deep(.v-field__input) {
  color: white !important;
  padding: 16px !important;
}

.transparent-input :deep(.v-label) {
  color: rgba(255, 255, 255, 0.7) !important;
  font-weight: 500 !important;
}

.transparent-input :deep(.v-field--focused .v-label) {
  color: #00bcd4 !important;
}

.transparent-input :deep(.v-field__prepend-inner) {
  color: rgba(255, 255, 255, 0.5) !important;
}

.transparent-input :deep(.v-field--focused .v-field__prepend-inner) {
  color: #00bcd4 !important;
}

.transparent-input :deep(.v-field__outline) {
  display: none !important;
}

.input-wrapper {
  position: relative;
  transition: transform 0.2s ease;
}

.input-wrapper:hover {
  transform: translateY(-1px);
}

.form-stats {
  background: rgba(0, 188, 212, 0.1);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(0, 188, 212, 0.2);
}

.stat-item {
  transition: transform 0.2s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
}

.submit-btn {
  transition: all 0.3s ease !important;
  box-shadow: 0 8px 32px rgba(0, 188, 212, 0.3) !important;
}

.submit-btn:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 40px rgba(0, 188, 212, 0.4) !important;
}

.form-decoration {
  position: absolute;
  top: 20px;
  right: 20px;
}

.decoration-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 8px 0;
  animation: float-dots 3s ease-in-out infinite;
}

.decoration-dot.cyan {
  background: #00bcd4;
}
.decoration-dot.orange {
  background: #ff9800;
  animation-delay: 1s;
}
.decoration-dot.green {
  background: #4caf50;
  animation-delay: 2s;
}

/* Contact Info Cards */
.contact-info-card {
  background: rgba(55, 65, 81, 0.8) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.contact-info-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2) !important;
  border-color: transparent;
}

.contact-card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.contact-card-gradient.active {
  opacity: 0.05;
}

.gradient-blue {
  background: linear-gradient(135deg, #2196f3, #21cbf3);
}
.gradient-green {
  background: linear-gradient(135deg, #4caf50, #8bc34a);
}
.gradient-red {
  background: linear-gradient(135deg, #f44336, #ff5722);
}

.contact-icon-wrapper {
  position: relative;
  display: inline-block;
}

.contact-avatar {
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.contact-avatar.pulse {
  animation: pulse 2s infinite;
}

.floating-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.4s ease;
}

.floating-ring.ring-2 {
  width: 120px;
  height: 120px;
  border-width: 1px;
}

.floating-ring.animate {
  opacity: 0.3;
  animation: ring-pulse 2s ease-in-out infinite;
}

.floating-ring.ring-2.animate {
  animation-delay: 0.5s;
}

.contact-action-btn {
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.contact-action-btn:hover {
  transform: translateY(-2px);
}

.contact-pattern {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="2" cy="2" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.05"/><circle cx="18" cy="18" r="1" fill="%23ffffff" opacity="0.05"/></svg>');
  opacity: 0.1;
}

.contact-card-number {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 3rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  z-index: 1;
  transition: all 0.3s ease;
}

.contact-info-card:hover .contact-card-number {
  color: rgba(255, 255, 255, 0.08);
  transform: scale(1.1);
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
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
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

@keyframes ring-pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
}

/* Responsive Design */
@media (max-width: 960px) {
  .contact-form-card {
    margin-bottom: 2rem;
  }

  .contact-card-number {
    font-size: 2rem;
    top: 15px;
    left: 15px;
  }
}

@media (max-width: 600px) {
  .contact-form-card .pa-8 {
    padding: 1.5rem !important;
  }

  .contact-info-card .pa-8 {
    padding: 1.5rem !important;
  }

  .transparent-input :deep(.v-field__input) {
    padding: 12px !important;
  }
}
</style>
