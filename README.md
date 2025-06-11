# MERN Stack Template

A production-ready MERN (MongoDB, Express, React, Node.js) boilerplate with separate **backend** and **frontend** folders, integrated with Vite, React Router, Tailwind CSS, dark/light theming, and a host of best practices.

## Features

- 🚀 **Ready-to-Go Setup**  
  - Backend: Express + Mongoose, environment-based config, structured folders (`config/`, `models/`, `controllers/`, `routes/`, `middleware/`).  
  - Frontend: Vite + React + Tailwind CSS, React Router, context-based theme toggling (light/dark).

- 🔐 **Authentication & API Layer**  
  - Centralized API service for all HTTP calls.  
  - Easy JWT integration for protected routes.

- 🎨 **Responsive UI Components**  
  - Navbar with mobile toggle & theme switcher.  
  - Footer, Home, Dashboard, About pages.  
  - Tailwind-powered cards, grids, and utilities.

- ⚙️ **Extensible & Scalable**  
  - Plug in Redux, Zustand, React Query, PWA support, Docker, Storybook, CI/CD workflows with minimal effort.

- 🧪 **Quality & Testing**  
  - ESLint, Prettier, Husky pre-commit hooks.  
  - Jest + React Testing Library for component tests.  
  - GitHub Actions CI example.

## Folder Structure

```bash
mern-template/
├── backend/
│   ├── .env.example
│   ├── package.json
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── index.js
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    └── src/
        ├── components/
        ├── context/
        ├── pages/
        ├── services/
        ├── index.css
        ├── main.jsx
        └── App.jsx
```

## Getting Started

### Prerequisites

- Node.js v14+ & npm
- MongoDB (local or Atlas)

### Backend Setup

```bash
cd backend
cp .env.example .env
# Fill in MONGO_URI and PORT in .env
npm install
npm run dev     # starts server with nodemon on PORT
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev     # starts Vite dev server
```

Open your browser at [http://localhost:5173](http://localhost:5173).

## Scripts

### Backend

- `npm run dev` — Start backend in development mode (nodemon).
- `npm start` — Run production server.

### Frontend

- `npm run dev` — Start Vite dev server.
- `npm run build` — Build for production.
- `npm preview` — Preview the production build locally.

## Theming

- Toggle light/dark via the button in the navbar.  
- Preference stored in `localStorage` and follows system setting on first load.

## Environment Variables

| Name        | Description                              | Default                 |
| ----------- | ---------------------------------------- | ----------------------- |
| MONGO_URI   | MongoDB connection string                | mongodb://localhost/... |
| PORT        | Backend server port                      | 4000                    |
| VITE_API_URL| Frontend API base URL (e.g., `http://localhost:4000/api`) | `http://localhost:4000/api` |

## Deployment

- **Backend**: Deploy to Heroku, DigitalOcean, or AWS.  
- **Frontend**: Deploy to Vercel, Netlify, or serve with Nginx in Docker.

## Contributing

1. Fork the repo  
2. Create a feature branch  
3. Commit your changes  
4. Open a Pull Request
