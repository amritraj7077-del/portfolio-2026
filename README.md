Amrit Raj — Portfolio
A personal portfolio built to present my work, skills, and journey in a clean and structured way. The focus is on simplicity, performance, and a smooth user experience rather than unnecessary visual noise.
What this project is
This is not just a portfolio UI — it’s a small system designed to make updates easy and consistent.
Instead of editing multiple components, most of the content is controlled from a single configuration file.
It reflects how I prefer to build things: simple architecture, clear structure, and maintainability first.
Tech Stack
Next.js 13 (App Router)
TypeScript
Tailwind CSS
Framer Motion
Key Highlights
Centralized content management (site.config.ts)
Minimal, distraction-free UI
Smooth and purposeful animations
Fully responsive layout
Clean component structure
Getting Started
Bash
git clone https://github.com/your-username/portfolio-2026.git
cd portfolio-2026
npm install
npm run dev
Open http://localhost:3000 in your browser.
How to Customize
All primary content is managed here:
Bash
site.config.ts
You can update:
Name, headline, and intro
Skills and technologies
Projects and descriptions
Timeline / journey
Contact details and social links
This approach keeps the project easy to scale and modify.
Project Structure

app/            → Routing and pages (Next.js App Router)
components/     → Reusable UI sections
public/         → Static assets
site.config.ts  → Central content configuration
Design Approach
The design philosophy is straightforward:
Keep it minimal
Focus on readability
Use animation only where it adds value
The goal is not to impress with effects, but to make the content stand out.
Deployment
This project is ready to be deployed on Vercel with zero configuration.
Bash
npm run build
Future Improvements
Better accessibility support
Performance optimization
Additional sections for deeper project insights
