# 🕌 Dua Project Client

## Project Description

This repository contains the client-side application (front-end) for the Dua Project. The goal of this project is to provide users with a clean, accessible, and user-friendly interface for browsing, searching, and learning various Duas.

The application is designed to be fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices. It communicates with a separate backend API to fetch and manage the Dua data.

## ✨ Features

* **Categorized Browsing**: Easily navigate Duas organized by relevant categories (e.g., Morning/Evening, Travel, Sickness).
* **Search Functionality**: Fast, dynamic search for Duas based on category title.
* **Reading View**: Dedicated, distraction-free view for reading Duas with customizable font sizes and modes.
* **Responsive Design**: Optimized for usage on all screen sizes, from mobile phones to large monitors.

## 🛠️ Technology Stack

This project is built using modern web development tools:

* **Frontend Framework**: Next.js, Typescript
* **Styling**: Tailwind CSS 
* **State Management**: Zustand

## 🚀 Getting Started

Follow these steps to get a copy of the project running on your local machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kazisadman/dua-project-client.git
cd dua-project-client
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. **Environment Variables**: Create a `.env` file in the root of the project directory and define the required environment variables. At minimum, you will need the API endpoint for your backend.

```env
# Example .env file
VITE_API_BASE_URL="http://localhost:5000/api/v1"
```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```
The application should now be running and accessible at `http://localhost:3000` (or the port specified by your development environment).

---

Created with ❤️ by [Kazi Sadman](https://github.com/kazisadman).
