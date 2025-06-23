# GitHub User Finder

A clean, responsive React application for searching GitHub users and viewing their profiles and repositories.

## Screenshot
<img width="1449" alt="Screenshot 2025-06-23 at 4 14 11 PM" src="https://github.com/user-attachments/assets/fd029072-3d02-4231-ae96-3966175f4b15" />



## 🚀 Features

- Search for any GitHub user by username

- View user profile information including:

- Avatar image

- Bio/description

- Follower/following counts

- Browse user repositories

- Direct links to GitHub profiles and repositories

## Technologies Used
React (Vite)

Material UI for UI components

GitHub REST API

CSS Modules for styling

---
## 📁 Project Structure
```bash
github-user-finder/
├── public/ # Static assets
├── src/
│ ├── components/ # React components
│ │ ├── Repos.jsx # Repository list component
│ │ ├── Repos.css # Repository styles
│ │ ├── SearchBar.jsx # Search functionality
│ │ ├── SearchBar.css # Search bar styles
│ │ ├── UserData.jsx # User profile component
│ │ └── UserData.css # User profile styles
│ ├── fetchData.js # API calls
│ ├── App.jsx # Main application
│ ├── App.css # Global app styles
│ ├── main.jsx # Entry point
│ └── index.css # Base styles
├── package.json
├── vite.config.js
└── README.md
```
---

## 📦 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone git clone https://github.com/your-username/github-user-finder.git
   cd github-user-finder

2. **Install Dependencies**
```bash
npm install
```
3. **Run the development server**
```bash
npm run dev
```
