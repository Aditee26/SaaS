# SaaS Landing Page with Dashboard

A modern SaaS web application featuring a pixel-perfect landing page (from Figma), authentication, and an interactive dashboard with API integration.

## 🚀 Live Demo
[View Live Demo](your-vercel-url.vercel.app)
---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

git clone https://github.com/Aditee26/SaaS.git
cd saas-landing-dashboard
Install dependencies

bash
npm install
# or
yarn install
Run the development server

bash
npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:3000

Build for Production
bash
npm run build
npm start
Test Credentials
Since this uses fake authentication, you can use any credentials:

Email: any@email.com

Password: any password (minimum 6 characters)

✅ Features Checklist
Part A: Landing Page (Figma Match)
Header/Navigation

Squid Logo, Home link, Download Template button, Login & Register buttons

Hero Section

"Beautiful Landing Page Design for You" with subheading and CTA button

Features Section (6 Cards)

Fully Customizable, Smart Analytics, Secure Platform, Fast Performance, Cloud Integration, 24/7 Support

Each with icon and description matching Figma

Testimonials Section

3 client testimonial cards with names, titles, companies, and quotes

Pricing Section

3 tiers: Silver ($40), Golden ($70 with "Popular" badge), Premium ($120)

Feature lists and "Book Now" buttons

FAQ Section

Accordion-style with 8+ expandable questions

Companies Section

Client logos: Stratfor, Ethan, National, UAE, Africa

CTA Section

"15 Days Free Trial" promotion with "Learn More" button

Contact Section

Email, Name, Company input fields and "Get in Touch" button

Footer

Logo, description, social links, product links, company links, legal links, copyright

Design Accuracy

Exact spacing (px values from Figma)

Typography matches (font sizes, weights)

Button styles match (padding, border-radius)

Card shadows and borders

Hover states on all interactive elements

Focus states for accessibility

Part B: Authentication
Login Page (/login)

Email input, Password input, Sign In button, Link to Register

Register Page (/register)

Full Name, Email, Password, Confirm Password, Signup button

Social login options (Google, Twitter)

Auth Functionality

Fake auth with localStorage token storage

Protected dashboard routes

Redirect to login if unauthenticated

Logout clears token

Form validation

Part C: Dashboard
Dashboard Layout

Sidebar with icons (Dashboard, Users, Settings)

Welcome message with username

Theme toggle (Light/Dark)

Logout button

Dashboard Summary (/dashboard)

Stats Cards: Total Users (10), Active Companies (10), Cities (10), Avg. Response (2.4s)

Percentage change indicators

Recent activity table with first 5 users

Users Page (/dashboard/users) - Core Feature

Search: Filter by name or email

Sort: A-Z and Z-A by name

Table View: Name, Email, Company, City

Pagination: 5 items per page with Previous/Next

User Detail Modal: Full user info on click

Data from JSON Placeholder API

Settings Page (/dashboard/settings)

Profile form (Name, Email, Company)

Theme toggle (persists in localStorage)

Save button with feedback

Settings persist after reload

API Integration

Loading states with skeletons

Error handling with retry option

Empty states for no results

Part D: Quality Requirements
Component Structure

Reusable Button, Input, Modal, Table, Card components

Layout components (Header, Footer, DashboardLayout)

State Management

Auth context/provider

Theme context/provider

Users state with search/sort/pagination

Loading States

Skeleton loaders for tables

Button loading spinners

Page transition loaders

Error States

Error messages with retry

Empty search results

API failure handling

Mobile Responsive

No horizontal scroll

Stack cards on mobile

Hamburger menu for mobile dashboard

Accessibility

Semantic HTML (header, main, nav, section)

ARIA labels

Keyboard navigation

Visible focus states

## 📸 Screenshots

### Landing Page - Hero Section
![image alt](https://github.com/Aditee26/SaaS/blob/c332fb1f3fa7db8872bac9096bc564acba099c6a/Hero.png)

### Features Grid
<img width="1896" height="1015" alt="Feature_Boxes" src="https://github.com/user-attachments/assets/e0bf9b9b-6edc-45e4-a585-48cc629df701" />

### Pricing Plans
<img width="1908" height="1012" alt="Pricing" src="https://github.com/user-attachments/assets/cacef059-8fbe-4837-922e-411d3ec278cf" />

### Testimonials
<img width="1903" height="1016" alt="Testimonials" src="https://github.com/user-attachments/assets/9b2f0a56-6183-49d2-8089-2506aa3c8983" />

### FAQ Section
<img width="1893" height="1014" alt="FAQ" src="https://github.com/user-attachments/assets/033f3ebb-2941-46a3-8b74-9afa03b0cd90" />

### Authentication Pages
<img width="1904" height="1030" alt="Register" src="https://github.com/user-attachments/assets/698a480f-c4b3-49e1-a230-80c885c09024" />
<img width="1904" height="1010" alt="login" src="https://github.com/user-attachments/assets/0dc7f081-6b84-4bc1-a4e1-a70b8990aefd" />

### Dashboard Overview
<img width="1916" height="1032" alt="Dashboard" src="https://github.com/user-attachments/assets/1f70fa4b-9d52-4c81-9ea0-030c6cb4b4be" />

### Users Management
<img width="1901" height="1032" alt="users" src="https://github.com/user-attachments/assets/b38ea326-ff30-462b-9588-97779f1e2207" />

### Settings Page
<img width="1909" height="1024" alt="settings" src="https://github.com/user-attachments/assets/a8c2edca-1625-4001-a3fa-1f49b6861123" />


🤔 Decisions & Tradeoffs
1. Next.js over Create React App
Decision: Used Next.js for the landing page and dashboard

Why: Better SEO for marketing page, built-in routing without React Router, and easier deployment on Vercel

Tradeoff: Slightly more complex setup but worth it for performance and developer experience

2. Client-side Pagination
Decision: Implemented pagination on the frontend instead of API calls per page

Why: JSONPlaceholder API doesn't support server-side pagination parameters

Tradeoff: Not scalable for thousands of users, but acceptable for demo with only 10 users. In production, would need server-side pagination.

3. Local Storage for Authentication
Decision: Used localStorage to store fake auth token

Why: Project requirements specified "fake auth is okay" to focus on frontend

Tradeoff: Not secure for real applications, but perfect for this assessment scope. Real auth would need HTTP-only cookies.

4. Tailwind CSS for Styling
Decision: Used Tailwind for all styling

Why: Allows exact pixel measurements from Figma, rapid development, and built-in responsive utilities

Tradeoff: HTML can become verbose, but component extraction keeps it clean and reusable

5. No TypeScript
Decision: Used JavaScript instead of TypeScript

Why: Project requirements stated TypeScript is "bonus, not mandatory" - saved development time

Tradeoff: Less type safety and IDE autocomplete, but code is well-documented and structured

6. Reusable Component Library Approach
Decision: Built reusable UI primitives (Button, Input, Modal) before dashboard

Why: Ensures consistency and speeds up dashboard development

Tradeoff: Invested extra time upfront (2 hours) but saved time on users table and settings page

7. Figma Pixel-Perfect Priority
Decision: Spent 60% of time on landing page accuracy

Why: Project explicitly states "If homepage is off, score drops heavily"

Tradeoff: Dashboard has simpler design but meets all functional requirements. High score on landing page compensates.

8. Context API over Redux
Decision: Used React Context for auth and theme state

Why: Simple state needs didn't warrant Redux complexity

Tradeoff: Could face performance issues with larger apps, but fine for this scale

9. Static Companies Data
Decision: Derived companies from JSONPlaceholder users

Why: No companies API available, used unique company names from users data

Tradeoff: Companies count equals users count, but matches project requirement of "can be derived"

10. Modal for User Details
Decision: Used modal instead of separate route page

Why: Better UX for quick views, keeps users in context of the list

Tradeoff: Slightly more complex state management, but reusable Modal component makes it clean

11. CSS Modules + Tailwind Mix
Decision: Used Tailwind for most styling, CSS Modules only for complex components

Why: Tailwind for speed, CSS Modules when styles needed dynamic class generation

Tradeoff: Two styling approaches, but kept to minimum (only 2 components use CSS Modules)

12. Mobile-First Approach
Decision: Built mobile responsive from start, not as an afterthought

Why: Project requires "no horizontal overflow on mobile"

Tradeoff: Desktop styling needed overrides, but Tailwind's responsive prefixes made it easy

🔑 Key Learning & Challenges
Biggest Challenge
Matching Figma spacing exactly required inspecting every pixel value. Used Figma's inspect tool to get exact margin/padding values instead of eyeballing.

Smartest Decision
Building the reusable Table component early. Made the users page implementation 3x faster since sorting, pagination, and row clicking were all handled by props.

What I'd Improve
Given more time, I'd add unit tests for the dashboard components and implement server-side pagination with a mock API.

📝 Tech Stack
Framework: Next.js

Styling: Tailwind CSS

Icons: React Icons

API: JSONPlaceholder

Deployment: Vercel

Version Control: Git/GitHub

Contact: aditeesingh001@gmail.com

Project Link: https://github.com/Aditee26/SaaS
