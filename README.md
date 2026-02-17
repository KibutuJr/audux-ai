# Audux AI | User-Generated Content (UGC) Platform

**Author:** Fredrick Kibutu  
**Status:** In active development – finishing touches are underway  

---

## Table of Contents

- [Overview](#overview)  
- [Project Purpose](#project-purpose)  
- [Key Features](#key-features)  
- [How the Platform Works](#how-the-platform-works)  
- [Technical Architecture](#technical-architecture)  
- [Getting Started](#getting-started)  
- [Planned Features / Next Steps](#planned-features--next-steps)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Overview

**Audux AI** is an innovative platform designed to enable users to generate high-quality images and videos based on their ideas or prompts. The platform leverages AI technologies to convert user inputs into visually stunning content while providing a seamless subscription-based system that tracks user credits.  

The platform focuses on **User-Generated Content (UGC)**, empowering creators, marketers, and enthusiasts to bring their visions to life without needing advanced design or video editing skills.

---

## Project Purpose

The core purpose of Audux AI is to:

1. Enable users to create AI-generated images and videos quickly.
2. Offer a subscription model that grants credits to users depending on their plan.
3. Provide a UGC workflow where users can store, manage, and share their generated content.
4. Solve common content creation problems, such as lack of resources, time, or expertise, by providing AI-assisted tools.

This platform bridges the gap between creativity and accessibility by democratizing high-quality content generation.

---

## Key Features

- **AI Content Generation:** Generate images and videos from user-provided prompts.  
- **Credit System:** Users start with free credits and can upgrade to Pro or Premium plans to receive additional credits.  
- **Subscription Management:** Integrates with Clerk for authentication and payment handling.  
- **User Projects:** Store, view, and manage all generated content in one dashboard.  
- **Responsive Design:** Works seamlessly across devices (desktop, tablet, mobile).  
- **Future UGC Sharing:** Users will be able to publish and share generated content on the platform.

---

## How the Platform Works

1. **Sign Up / Log In**  
   Users register via Clerk, which handles secure authentication. Free users receive 20 starting credits.

2. **Select a Plan**  
   Users can upgrade to Pro or Premium plans. Credits are automatically updated in the system via Clerk webhook integration.

3. **Generate Content**  
   - Users provide a **prompt** describing the content they want.  
   - Specify **image or video type**, aspect ratio, and other preferences.  
   - AI generates content using backend APIs and stores it in the user’s project list.  

4. **Manage Projects**  
   - Users can view all generated content under **My Generations**.  
   - Options to **download**, **share**, or **publish** projects (future updates).  

5. **Subscription Credits**  
   - Credits are deducted per content generation:  
     - **Images:** 5 credits each  
     - **Videos:** 10 credits each  
   - Credits are incremented automatically upon upgrading the plan.  

---

## Technical Architecture

- **Frontend:**  
  - React + TypeScript  
  - TailwindCSS for styling  
  - Framer Motion for animations  
- **Backend:**  
  - Node.js + Express  
  - Prisma ORM with PostgreSQL  
  - Clerk for authentication and subscription handling  
- **Cloud / Storage:**  
  - Cloudinary (planned) for media storage  
- **Development Tools:**  
  - Vite, ESLint, TypeScript  
  - DevTunnels for local webhook testing  

---

## Getting Started

### Prerequisites
- Node.js >= 18.x
- PostgreSQL database
- GitHub account for cloning the repository

### Steps to Run Locally
1. Clone the repository:
```
git clone https://github.com/KibutuJr/audux-ai.git
cd audux-ai
```

2. Install dependencies for both client and server:

cd server
npm install
cd ../client
npm install


3. Set up .env files in both server and client directories with appropriate keys:

DATABASE_URL=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SIGNING_SECRET=
CLOUDINARY_URL=
GOOGLE_CLOUD_API_KEY=


4. Run the backend server:

cd server
npm run server


5. Run the frontend client:

cd client
npm run dev

Open the platform in your browser at http://localhost:5173

## Planned Features / Next Steps

1. Fixing robust credits update system via hybrid webhook + Clerk API verification.

2. Publish & share UGC: Allow users to share projects publicly.

3. Enhanced media management: Integrate Cloudinary or S3 storage for better scalability.

4. Analytics Dashboard: Track user activity and popular content trends.

5. Continuous UI/UX improvements to make the platform more vibrant and user-friendly.

## Contributing

I am currently working on completing and polishing the project. Contributions are welcome!

## If you want to contribute:

1. Fork the repository

2. Create a new branch for your feature or fix:

3. git checkout -b feature/your-feature-name


## Make changes and commit:

git commit -m "Add detailed feature description"


## Push to your branch:

git push origin feature/your-feature-name


Open a Pull Request

## License

This project is private / in development. License details will be provided upon public release.

Audux AI aims to empower creators, marketers, and enthusiasts by providing a seamless platform to generate AI-powered images and videos. Work is ongoing to make it fully functional and user-friendly.
