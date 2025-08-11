# Donnelly Tech Solutions Website

**Brave solutions, bold code, bright future.**

This is the official website for **Donnelly Tech Solutions**, a software engineering company owned and run solely by Andrew Donnelly. Built with [Next.js](https://nextjs.org/), [Material-UI (MUI)](https://mui.com/), and [TypeScript](https://www.typescriptlang.org/), the site showcases a Gryffindor-inspired theme featuring a portfolio of projects and a contact form powered by Resend email service.

---

## Features

- **Gryffindor-themed design:** Deep reds and golden yellows with a modern, dark mode feel.
- **Home page:** Introduction and company tagline.
- **Portfolio page:** Showcase of featured projects with links to live demos and source code.
- **Contact page:** Contact form integrated with [Resend](https://resend.com/) API for sending messages.
- **Responsive design:** Looks great on desktop and mobile.
- **Clean TypeScript codebase** with MUI theming via a centralized theme provider.

---

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repo:

```bash
git clone https://github.com/AndrewDonnelly93/donnelly-tech-solutions.git
cd donnelly-tech-solutions

2. Install dependencies

```bash
npm install

3. Setup environment variables

Create a .env.local file in the root directory and add your Resend API key:

env
RESEND_API_KEY=your_resend_api_key_here

4. Run the development server

```bash
npm run dev
Open http://localhost:3000 in your browser to see the site.

5. Deployment
Build the project for production:

```bash
npm run build
npm start

## Folder Structure
- **pages/ - Next.js pages including Home, Portfolio, Contact, and API routes.

- **src/theme.ts - MUI custom Gryffindor theme.

- **public/portfolio/ - Screenshots for portfolio projects.

- **Other standard Next.js files and folders.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests to improve the site.

## Contact
Andrew Donnelly
Email: contact@donnellytech.com
Phone: +353876072684
LinkedIn: linkedin.com/in/andrewdonnelly93

