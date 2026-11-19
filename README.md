# Tactyqal Labs — Full-Stack Web Platform & Custom Blog CMS
A modern single-page web application and custom blog backend built as a unified replacement for the legacy CodeIgniter homepage and separate WordPress blog. Designed with a responsive dark UI (**Kinetic Obsidian** theme: `#090A0F` base with `#FF6B00` accents) and backed by a RESTful API and MongoDB Atlas.
## Live Demo & Deployment
- **Frontend (Vercel):** `https://project-tactyqal.vercel.app/`
- **Backend API (Render):** `https://project-tactyqal-backend.onrender.com`
- **Database:** MongoDB Atlas
---
## Key Features
### 1. Redesigned Homepage & Responsive UI
- Built with **React**, **Vite**, and **Tailwind CSS**, featuring custom typography (`Plus Jakarta Sans` and `Inter`) and dark glassmorphic cards.
- Smooth section navigation across key landing areas (`Home`, `Success Stories`, `Program`, `Why Us`, `Tools`, `Knowledge Hub`, `Pricing`, `FAQ`, and `Consultation`).
- Mobile-responsive header, navigation drawer, and footer layout tuned for both desktop and mobile viewports, plus favicon and brand asset integration (`tactyqal-logo.svg`).
### 2. Custom Blog Backend & Content Management
- Replaces external WordPress blog management with a dedicated **Node.js / Express** API and **MongoDB Atlas** persistence.
- Supports full CRUD operations (Create, Retrieve, Update, Delete) for blog posts.
- Dynamic post detail routing (`/blog/:slug`) supporting dual slug/ID lookup, automatic scroll-to-top navigation, and shareable links.
- Protected admin routes and authentication flow for managing blog content.
---
## Tech Stack
- **Frontend:** React, Vite, React Router, Tailwind CSS, Axios, Lucide React
- **Backend:** Node.js, Express.js, Mongoose, RESTful API
- **Database:** MongoDB Atlas
- **Hosting / Deployment:** Vercel (Frontend), Render (Backend)
---
## Project Structure
```text
├── client/                  # React + Vite frontend
│   ├── public/              # Static assets (e.g., tactyqal-logo.svg)
│   └── src/
│       ├── components/      # Header, Footer, UI sections
│       ├── pages/           # Home, Blog list, BlogPostDetail, Admin views
│       └── App.jsx          # Route definitions
├── server/                  # Node.js + Express backend
│   ├── controllers/         # Blog & auth route handlers
│   ├── models/              # Mongoose schemas
│   ├── routes/              # API route definitions
│   └── index.js            # Express app & DB connection entry point
└── README.md
```
---
## Environment Variables
### Backend (`server/.env`)
Create a `.env` file in your backend directory (and configure these in your Render environment settings):
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

---
## Local Setup & Installation
### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```
### 2. Install & Run Backend
```bash
cd server
npm install
npm run dev
```
### 3. Install & Run Frontend
```bash
cd client
npm install
npm run dev
```
---
## API Endpoints Overview
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/blog` | Retrieve published blog posts |
| `GET` | `/api/blog/:slug` | Retrieve a single blog post by `slug` or `_id` |
| `POST` | `/api/blog` | Create a new blog post (Admin / Protected) |
| `PUT` / `PATCH` | `/api/blog/:id` | Update an existing blog post (Admin / Protected) |
| `DELETE` | `/api/blog/:id` | Delete a blog post (Admin / Protected) |
---
## Author
**Hemanth Kumar M** <br>
Full-Stack Web Developer (MERN) | Chennai, India <br>
Portfolio : `https://hemanth-portfolio-brown.vercel.app/`
