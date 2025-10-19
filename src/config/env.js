// Environment configuration
export const config = {
  // EmailJS Configuration
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },

  // Firebase Configuration
  firebase: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  },

  // Contact Information
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "contact@softpeaklabs.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "+1 (555) 123-4567",
    location: import.meta.env.VITE_CONTACT_LOCATION || "Melbourne, Australia",
  },

  // Company Information
  company: {
    name: import.meta.env.VITE_COMPANY_NAME || "Softpeak Labs",
    description:
      import.meta.env.VITE_COMPANY_DESCRIPTION ||
      "Custom Software, Hardware, 3D Printing, and Integrated Circuits",
  },
};

// Validation function to check if required environment variables are set
export const validateEnv = () => {
  const required = [
    "VITE_EMAILJS_SERVICE_ID",
    "VITE_EMAILJS_TEMPLATE_ID",
    "VITE_EMAILJS_PUBLIC_KEY",
  ];

  const missing = required.filter((key) => !import.meta.env[key]);

  if (missing.length > 0) {
    console.warn("Missing environment variables:", missing);
    console.warn(
      "Please check your .env file and ensure all required variables are set."
    );
    return false;
  }

  return true;
};

export default config;
