# Personal Portfolio Website

A modern and responsive personal portfolio website built using **React** and **Vite**. The project showcases my work, technical skills, and contact information, and includes a functional contact form integrated with **EmailJS** for direct email communication.

---

## Live Demo

View the live portfolio:
https://myportfolio-two-topaz-79.vercel.app/

---

## Preview

![Portfolio Screenshot](./preview.png)

---

## Tech Stack

* React
* Vite
* CSS / Tailwind CSS / SCSS 
* EmailJS
* Responsive Web Design

---

## Features

* Responsive layout for desktop, tablet, and mobile devices
* Project showcase section
* Skills and technologies section
* Contact form integrated with EmailJS
* Fast development and build process with Vite
* Clean and modular component structure

---

## Project Structure

```
portfolio/
│
├── public/
├── src/
│   ├── components/
│   ├── sections/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── vite.config.js
```

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

Navigate to the project directory:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## EmailJS Configuration

1. Create an account at https://www.emailjs.com
2. Create an Email Service and an Email Template
3. Obtain the following credentials:

   * Service ID
   * Template ID
   * Public Key

Add them to a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Production Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## License

This project is licensed under the MIT License.

---

