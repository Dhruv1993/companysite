# Softpeak Labs Website

## Project Overview

This project is a modern, responsive company website for **Softpeak Labs**, a software development company specializing in custom software, hardware, 3D printing, integrated circuits, and related technologies. The website is built using **React.js** with **Material UI** for a sleek, professional design and is optimized for hosting on **Firebase**. It includes email-sending capabilities for user inquiries.

## Features

- **Three Main Pages**:
  - **Home**: Highlights the company's mission, services, and key offerings.
  - **Services**: Details expertise in custom software development, hardware, 3D printing, and integrated circuits.
  - **Contact**: Features a form for inquiries with email-sending functionality.
- **Top Navigation Bar**: Consistent across all pages for seamless navigation.
- **Material UI Design**: Implements a modern, professional Material Design aesthetic.
- **Custom Color Theme**: Uses a distinct, non-gradient color scheme for a clean look.
- **Email Functionality**: Integrates a library (e.g., EmailJS) for sending emails directly from the website.
- **React-Bits Library**: Utilizes React-Bits for reusable UI components and enhanced functionality.
- **Firebase Hosting**: Optimized for easy deployment and scalability on Firebase.
- **Responsive Design**: Ensures compatibility across desktop, tablet, and mobile devices.
- **Killer UI/UX**: Modern, out-of-the-world design with a focus on aesthetics and user experience.

## Tech Stack

- **Frontend**: React.js, Material UI, React-Bits
- **Email Sending**: EmailJS (or similar library for sending emails)
- **Hosting**: Firebase
- **Styling**: Custom non-gradient color theme, Material UI components
- **Routing**: React Router for navigation between pages
- **Build Tool**: Vite (or Create React App) for development and builds

## Project Structure

```
/softpeak-labs-website
  /public
    - favicon.ico
    - index.html
  /src
    /components
      - Navbar.js          # Top navigation bar component
      - Footer.js          # Footer component
      - ContactForm.js     # Email-sending contact form
    /pages
      - Home.js            # Home page
      - Services.js        # Services page
      - Contact.js         # Contact page
    /styles
      - theme.js           # Custom Material UI theme with color scheme
      - App.css            # Global styles
    - App.js               # Main app component with routing
    - index.js             # Entry point
  - firebase.json          # Firebase hosting configuration
  - .firebaserc           # Firebase project configuration
  - package.json          # Project dependencies and scripts
  - README.md             # This file
```

## Color Theme

- **Primary**: #1976D2 (Deep Blue)
- **Secondary**: #F50057 (Vivid Pink)
- **Background**: #F5F5F5 (Light Gray)
- **Text**: #212121 (Dark Gray)
- **Accent**: #FFCA28 (Amber)
- Non-gradient, flat design for a clean and modern aesthetic.

## Development Guidelines

- Use **React-Bits** for reusable components (e.g., buttons, cards, modals).
- Follow Material UI guidelines for consistent styling.
- Ensure the website is responsive and tested across multiple devices.
- Optimize images and assets for fast loading times.
- Implement accessibility best practices (e.g., ARIA labels, keyboard navigation).
- Test email functionality thoroughly to ensure reliable delivery.
- Keep the design modern, professional, and visually striking without gradients.
