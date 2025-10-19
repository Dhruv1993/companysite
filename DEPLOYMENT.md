# Deployment Guide - Softpeak Labs Website

## Prerequisites

1. **Node.js** (v16 or higher)
2. **npm** or **yarn**
3. **Firebase CLI** (install with `npm install -g firebase-tools`)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables Setup

#### A. Create Environment File

Copy the example environment file:

```bash
cp env.example .env
```

#### B. Configure Environment Variables

Edit `.env` file and update the following variables:

**Required Variables:**

```env
# EmailJS Configuration (Required for contact form)
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**Optional Variables (with defaults):**

```env
# Contact Information
VITE_CONTACT_EMAIL=contact@softpeaklabs.com
VITE_CONTACT_PHONE=+1 (555) 123-4567
VITE_CONTACT_LOCATION=San Francisco, CA

# Company Information
VITE_COMPANY_NAME=Softpeak Labs
VITE_COMPANY_DESCRIPTION=Custom Software, Hardware, 3D Printing, and Integrated Circuits

# Firebase Configuration (for future use)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. EmailJS Setup (for Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Sender's company
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name
4. Copy your credentials to `.env` file

### 4. Firebase Setup

#### A. Login to Firebase

```bash
firebase login
```

#### B. Initialize Firebase Project

```bash
firebase init hosting
```

- Select "Use an existing project" or create a new one
- Set public directory to: `dist`
- Configure as single-page app: `Yes`
- Don't overwrite index.html: `No`

#### C. Update Project ID

Edit `.firebaserc` and replace `softpeak-labs-website` with your actual Firebase project ID.

## Development

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Quick Deploy (Recommended)

After making any code changes, simply run the deployment script:

```bash
./scripts/deploy.sh company-b232c
```

This script automatically:

1. Installs dependencies (`npm ci`)
2. Builds the project (`npm run build`)
3. Deploys to Firebase (`firebase deploy --only hosting`)

### Manual Deployment

#### Deploy to Firebase

```bash
npm run deploy
```

#### Deploy Only Hosting

```bash
npm run deploy:hosting
```

### Live Site

Your website is deployed at: **https://softpeaklabs.com.au/**

**Firebase URLs:**

- Custom Domain: https://softpeaklabs.com.au/
- Default Firebase URL: https://company-b232c.web.app

To check deployment status:

```bash
firebase hosting:channel:list --project company-b232c
```

### Project Aliases

You have Firebase project aliases configured:

- **`default`** → `company-b232c`
- **`company-staging`** → `company-b232c` (currently active)

You can deploy using any of these commands:

```bash
# Using project ID directly
./scripts/deploy.sh company-b232c

# Using alias
./scripts/deploy.sh company-staging

# Using default (no argument needed since company-staging is active)
./scripts/deploy.sh
```

To check current aliases:

```bash
firebase use
```

To add new aliases:

```bash
firebase use --add
```

## Project Structure

```
/softpeak-labs-website
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx
│   │   ├── ContactHero.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MissionSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServiceDetail.jsx
│   │   └── ServicesOverview.jsx
│   ├── config/
│   │   └── env.js
│   ├── pages/
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx
├── firebase.json
├── .firebaserc
├── env.example
├── .env (create this file)
└── package.json
```

## Features

- ✅ Responsive design for all devices
- ✅ Modern Material UI components
- ✅ Smooth animations with Framer Motion
- ✅ Contact form with EmailJS integration
- ✅ Environment variable configuration
- ✅ Firebase hosting ready
- ✅ SEO optimized
- ✅ Mobile-first approach
- ✅ Performance optimized

## Custom Domain

Your website is configured with a custom domain: **https://softpeaklabs.com.au/**

The custom domain was set up through the Firebase Console and is fully functional. All deployments will automatically be available on your custom domain.

## Customization

### Environment Variables

All configurable content is now managed through environment variables:

- Company information
- Contact details
- EmailJS credentials
- Firebase configuration

### Colors

Edit `src/styles/theme.js` to customize the color scheme.

### Content

Update the content in respective component files:

- Home page: `src/pages/Home.jsx`
- Services: `src/pages/Services.jsx`
- Contact: `src/pages/Contact.jsx`

### Images

Replace placeholder images with your own images and update the URLs in the components.

## Troubleshooting

### Environment Variables

- Check if `.env` file exists in project root
- Verify all required variables are set
- Restart development server after changing `.env`

### Build Issues

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `npm run build -- --force`

### Firebase Issues

- Check Firebase CLI version: `firebase --version`
- Re-login to Firebase: `firebase logout && firebase login`

### EmailJS Issues

- Verify EmailJS credentials in `.env` file
- Check EmailJS service status
- Test with EmailJS dashboard

## Performance Tips

1. Optimize images before adding to the project
2. Use WebP format for better compression
3. Enable Firebase caching headers
4. Monitor Core Web Vitals in Firebase Analytics

## Security Notes

- Never commit `.env` file to version control
- Use environment variables for all sensitive data
- Regularly rotate API keys and credentials
- Monitor EmailJS usage and limits

## Support

For issues or questions, check:

1. Firebase documentation
2. EmailJS documentation
3. Material UI documentation
4. Vite documentation
