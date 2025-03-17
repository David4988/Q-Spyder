# Complete Next.js Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Core Concepts](#core-concepts)
3. [Routing](#routing)
4. [Data Fetching](#data-fetching)
5. [Styling](#styling)
6. [Advanced Features](#advanced-features)
7. [Deployment](#deployment)

## Getting Started

### Prerequisites
- Node.js 16.8 or later
- npm or yarn package manager
- Basic understanding of React

### Creating Your First Next.js App

```bash
# Create a new Next.js app
npx create-next-app@latest my-next-app

# Navigate to the project directory
cd my-next-app

# Start the development server
npm run dev
```

### Project Structure Explained

    my-next-app/
    ├── pages/              # All your pages go here
    │   ├── _app.js        # Custom App component
    │   ├── _document.js   # Custom Document component
    │   ├── index.js       # Home page
    │   └── api/           # API routes
    ├── public/            # Static files
    ├── styles/            # CSS files
    ├── components/        # Reusable components
    ├── lib/              # Utility functions
    ├── next.config.js    # Next.js configuration
    └── package.json      # Dependencies


## Core Concepts

### 1. Pages and Components

#### Basic Page Component
```jsx
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
    </div>
  )
}
```

#### Creating Reusable Components
```jsx
// components/Button.js
export default function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  )
}
```

### 2. Layouts

#### Creating a Layout Component
```jsx
// components/Layout.js
export default function Layout({ children }) {
  return (
    <div>
      <nav>
        {/* Navigation content */}
      </nav>
      <main>{children}</main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  )
}
```

#### Using Layouts
```jsx
// pages/index.js
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Next.js</h1>
    </Layout>
  )
}
```

## Routing

### 1. Basic Routing

#### Static Routes
```jsx
// pages/about.js
export default function About() {
  return <h1>About Page</h1>
}
```

#### Dynamic Routes
```jsx
// pages/posts/[id].js
export default function Post({ id }) {
  return <h1>Post: {id}</h1>
}
```

#### Nested Dynamic Routes
```jsx
// pages/posts/[id]/[comment].js
export default function Comment({ id, comment }) {
  return <h1>Comment {comment} on Post {id}</h1>
}
```

### 2. Navigation

#### Using Link Component
```jsx
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}
```

#### Programmatic Navigation
```jsx
import { useRouter } from 'next/router'

export default function NavigationButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/about')}>
      Go to About
    </button>
  )
}
```

## Data Fetching

### 1. getStaticProps
```jsx
// pages/posts/[id].js
export async function getStaticProps({ params }) {
  const post = await fetch(`https://api.example.com/posts/${params.id}`)
    .then(res => res.json())

  return {
    props: {
      post
    }
  }
}

export default function Post({ post }) {
  return <h1>{post.title}</h1>
}
```

### 2. getServerSideProps
```jsx
// pages/posts/[id].js
export async function getServerSideProps({ params, req }) {
  const post = await fetch(`https://api.example.com/posts/${params.id}`)
    .then(res => res.json())

  return {
    props: {
      post
    }
  }
}
```

### 3. getStaticPaths
```jsx
// pages/posts/[id].js
export async function getStaticPaths() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json())

  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}
```

## Styling

### 1. CSS Modules
```css
/* styles/Button.module.css */
.button {
  background: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
```

```jsx
// components/Button.js
import styles from '../styles/Button.module.css'

export default function Button({ children }) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}
```

### 2. Global Styles
```css
/* styles/globals.css */
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
```

### 3. Tailwind CSS
```jsx
// components/Card.js
export default function Card({ title, content }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}
```

## Advanced Features

### 1. API Routes
```jsx
// pages/api/hello.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request
    res.status(200).json({ message: 'Hello from POST' })
  } else {
    // Handle GET request
    res.status(200).json({ message: 'Hello from GET' })
  }
}
```

### 2. Environment Variables
```env
# .env.local
API_URL=https://api.example.com
```

```jsx
// Using environment variables
const apiUrl = process.env.API_URL
```

### 3. Image Optimization
```jsx
import Image from 'next/image'

export default function OptimizedImage() {
  return (
    <Image
      src="/images/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority
    />
  )
}
```

## Deployment

### 1. Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 2. Production Build
```bash
# Build the application
npm run build

# Start production server
npm start
```

## Best Practices

### 1. Code Organization
- Keep components in the `components` directory
- Use consistent file naming conventions
- Implement proper error boundaries

### 2. Performance Optimization
- Use Image component for images
- Implement proper caching strategies
- Use dynamic imports for large components

### 3. SEO
```jsx
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Head>
      <main>
        {/* Page content */}
      </main>
    </>
  )
}
```

## Common Issues and Solutions

### 1. Hot Reloading Not Working
- Clear `.next` folder
- Restart development server

### 2. Build Errors
- Check for syntax errors
- Verify all dependencies are installed
- Clear npm cache if needed

### 3. API Route Issues
- Ensure proper HTTP method handling
- Check request/response format
- Verify environment variables

## Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples) 