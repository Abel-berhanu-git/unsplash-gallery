# Abel Unsplash Gallery

A **React + Vite** project to search and display images from the **Unsplash API**.

## Features

* Dark / Light mode toggle with persistence
* Responsive image gallery
* Search form with real-time results
* Toast notifications using React-Toastify
* Axios + TanStack Query for API requests

---

**🔗 [Live Demo](https://your-live-link-here.com)**


## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Abel-berhanu-git/unsplash-gallery.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env.local` file in the root:

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_api_key
```

> Note: `.env.local` is gitignored to protect your API key.

### 4. Start the development server

```bash
npm run dev
```

---

## 📦 Project Structure

```text
src
 ├─ api
 │   └─ axiosInstance.js
 │   └─ fetchImages.js
 |
 ├─ components
 │   ├─ Gallery.jsx
 │   ├─ SearchForm.jsx
 │   └─ ThemeToggle.jsx
 |
 ├─ context
 │   └─ Context.jsx
 |
 └─ App.jsx
```

---

## ⚡ Key Implementations

### Dark Mode

* Uses `localStorage` to persist user preference
* Uses `window.matchMedia('(prefers-color-scheme: dark)')` for system preference
* Toggled via context API and applied using `document.body.classList.toggle`

### API Calls

* Axios instance configured with base URL and Authorization header
* TanStack Query used for fetching and caching image data
* GET requests use `params` for query parameters

### Responsive CSS

* Uses CSS variables for widths, colors, and transitions
* Media queries handle different screen sizes
* Grid layout for gallery adapts to mobile, tablet, and desktop

### Toast Notifications

* Implemented with `react-toastify`
* Positioned at top-right
* Can display success, error, or info messages

---

## 🔑 Environment Variables

| Variable                   | Description                            |
| -------------------------- | -------------------------------------- |
| `VITE_UNSPLASH_ACCESS_KEY` | Your Unsplash API key for image search |

> For deployment (Netlify, Vercel), set environment variables in the dashboard instead of `.env.local`

---

## 📚 Learning Notes

* **Axios**: `axios.create({ baseURL, headers, params })` for reusable instance
* **React Context**: Manage dark mode and search term globally
* **Dark Mode**: Store preference in `localStorage`, update `document.body.classList` in `useEffect`
* **Query vs Path Params**: Query params for GET requests, path params for resource identification
* **Responsive Design**: Use `width: 100%` + `max-width` with `box-sizing: border-box`

---

## License

This project is for personal learning and portfolio purposes. 🧑‍💼 **Abel**
