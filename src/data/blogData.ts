import type { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Clerk Authentication",
    slug: "getting-started-clerk-auth",
    description:
      "Learn how to implement Clerk authentication in your Vue.js application with complete setup guide and video tutorial.",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    category: "Authentication",
    tags: ["Clerk", "Vue 3", "Authentication", "TypeScript"],
    content: `
      <h2>What is Clerk?</h2>
      <p>Clerk is a modern authentication and user management solution that provides a complete set of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.</p>
      
      <h2>Why Choose Clerk?</h2>
      <p>Clerk offers several advantages:</p>
      <ul>
        <li>Beautiful, customizable authentication UI components</li>
        <li>Support for multiple authentication methods (email, social, phone)</li>
        <li>Built-in user management dashboard</li>
        <li>Easy integration with modern frameworks</li>
        <li>Excellent TypeScript support</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Follow the installation steps above to integrate Clerk into your Vue 3 application. The process is straightforward and can be completed in just a few minutes.</p>
      
      <h2>Next Steps</h2>
      <p>After completing the installation, you can:</p>
      <ul>
        <li>Customize the appearance of authentication components</li>
        <li>Add protected routes to your application</li>
        <li>Implement user profile management</li>
        <li>Set up webhooks for user events</li>
      </ul>
    `,
    installation: [
      {
        title: "Install Clerk Vue Package",
        description:
          "First, install the Clerk Vue SDK in your project using npm or yarn.",
        code: "npm install @clerk/vue",
        language: "bash",
      },
      {
        title: "Set up Environment Variables",
        description:
          "Create a .env file in your project root and add your Clerk API keys. You can find these in your Clerk dashboard.",
        code: `VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
VITE_CLERK_SECRET_KEY=sk_test_your_secret_key_here`,
        language: "bash",
      },
      {
        title: "Configure Clerk Provider",
        description:
          "Wrap your app with ClerkProvider in main.ts to initialize Clerk throughout your application.",
        code: `import { createApp } from 'vue'
import { ClerkProvider } from '@clerk/vue'
import App from './App.vue'

const app = createApp(App)

app.use(ClerkProvider, {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
})

app.mount('#app')`,
        language: "typescript",
      },
      {
        title: "Add Authentication Components",
        description:
          "Use Clerk components in your views to add sign-in and sign-up functionality.",
        code: `<template>
  <div>
    <SignedIn>
      <UserButton />
      <p>Welcome back!</p>
    </SignedIn>
    <SignedOut>
      <SignInButton />
    </SignedOut>
  </div>
</template>

<script setup lang="ts">
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/vue'
</script>`,
        language: "vue",
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=QstMsE_HbgM",
    author: "Assem Atout",
    publishedDate: "2025-10-01",
    readTime: 8,
  },
  {
    id: "2",
    title: "Setting Up Prisma with PostgreSQL",
    slug: "prisma-postgresql-setup",
    description:
      "Complete guide to setting up Prisma ORM with PostgreSQL database in your Node.js application.",
    thumbnail:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
    category: "Databases",
    tags: ["Prisma", "PostgreSQL", "ORM", "Node.js"],
    content: `
      <h2>What is Prisma?</h2>
      <p>Prisma is a next-generation ORM that makes working with databases easy and type-safe. It consists of three main tools: Prisma Client, Prisma Migrate, and Prisma Studio.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Type-safe database queries</li>
        <li>Intuitive data modeling</li>
        <li>Automated migrations</li>
        <li>Visual database browser (Prisma Studio)</li>
      </ul>
      
      <h2>Database Schema</h2>
      <p>Prisma uses a declarative schema file to define your database structure. This makes it easy to understand and modify your data model.</p>
    `,
    installation: [
      {
        title: "Install Prisma",
        description:
          "Install Prisma CLI and Prisma Client as dependencies in your project.",
        code: "npm install prisma @prisma/client",
        language: "bash",
      },
      {
        title: "Initialize Prisma",
        description:
          "Initialize Prisma in your project. This creates a prisma folder with schema.prisma file.",
        code: "npx prisma init",
        language: "bash",
      },
      {
        title: "Configure Database Connection",
        description: "Add your PostgreSQL connection string to .env file.",
        code: 'DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"',
        language: "bash",
      },
      {
        title: "Define Your Schema",
        description: "Define your data models in prisma/schema.prisma file.",
        code: `model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
}`,
        language: "prisma",
      },
      {
        title: "Run Migrations",
        description:
          "Create and apply database migrations based on your schema.",
        code: "npx prisma migrate dev --name init",
        language: "bash",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    author: "Atout Assem",
    publishedDate: "2025-09-28",
    readTime: 10,
  },
  // Add more blog posts here...
];
