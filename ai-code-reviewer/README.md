# AI Code Reviewer

A clean, responsive React app that allows developers to paste code and receive **AI-powered feedback** including suggestions, improvements, and best practices

## Screenshot
<img width="1470" alt="Screenshot 2025-06-30 at 8 59 20 PM" src="https://github.com/user-attachments/assets/6dbaa37e-faa7-47e3-85e5-76ce8e25588c" />

## 🚀 Features

- Paste your code and click **Analyze**
- Get real-time AI feedback:
  -  Code quality suggestions
  -  Performance tips
  -  Security warnings
  -  Best practice recommendations
- Displays input as a **chat bubble**
- Result shows up on the **right half of the screen**
- Modern, minimal chat-style interface

## Technologies Used

- **React (Vite)**
- **Material UI** – UI components
- **Cohere/OpenAI API** – AI analysis
- **CSS Modules** – Component-based styling
---
## 📁 Project Structure
```bash
ai-code-reviewer/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx     # Input bar (bottom-fixed)
│   │   ├── SearchBar.css     # Search bar styles
│   │   ├── Code.jsx          # Displays user's code input (left side)
│   │   ├── Code.css          # Styles for code bubble
│   │   ├── Result.jsx        # Displays AI response (right side)
│   │   └── Result.css        # Styles for AI output
│   ├── fetchData.js          # API call logic (OpenAI or Cohere)
│   ├── App.jsx               # Main application layout
│   ├── App.css               # Global layout styling
│   ├── main.jsx              # Entry point
│   └── index.css             # Base styling
├── .env                      # API key stored here
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
3. **Add your API key**
   ```bash
   VITE_API_KEY=your-api-key-here
   ```

5. **Run the development server**
```bash
npm run dev
```
