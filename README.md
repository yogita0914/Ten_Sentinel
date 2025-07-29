# Ten Sentinel - Cybersecurity Solutions Platform

## 🛡️ Project Overview

**Ten Sentinel** is a comprehensive cybersecurity platform that provides consultation, training, and security services to businesses and organizations. The platform offers a modern, responsive web application built with React and Tailwind CSS, featuring multiple service offerings including cloud security, VAPT (Vulnerability Assessment and Penetration Testing), ISO 27001 certification, and employee training programs.

## 🚀 Live Demo

- **Live Demo**: [https://ten-sentinel-lilac.vercel.app/](https://ten-sentinel-lilac.vercel.app/)

### 🎯 Company Information
- **Company Name**: Ten Sentinel (It is a Internship Porject of The Entrepreneurship Network Pvt. Ltd.)
- **Location**: Noida 201301, UP, India
- **Corporate Address**: India Accelerator, Noida 201301, UP, India
- **Email**: info@entrepreneurshipnetwork.net
- **Website**: https://www.entrepreneurshipnetwork.net/
- **Services**: Cybersecurity consultation, training, and comprehensive security services

## 🎯 Key Features

### Core Services
- **Cloud Security Solutions**: AWS Sentinel Shield, Azure Guardian, GCP Fortify
- **VAPT Services**: Vulnerability Assessment and Penetration Testing (Web, Mobile, Network, API, Cloud)
- **ISO 27001 Certification**: Information Security Management System
- **Employee Training**: Cybersecurity awareness and professional development
- **Security Audits**: Comprehensive security assessments (SOC 2, GDPR, HIPAA, PCI DSS, NIST, RBI)
- **Data Privacy**: Privacy compliance and protection services
- **Web Design & Development**: Custom web development services
- **Digital Marketing**: Marketing and promotional services
- **Phishing Simulation**: Employee security awareness training
- **Cyber Attack Analysis**: Threat analysis and incident response

### Platform Features
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Blog System**: 12 educational cybersecurity articles with detailed content
- **Contact Forms**: Multiple consultation and inquiry forms with validation
- **Multi-page Architecture**: 19 dedicated pages for each service offering
- **Testimonials System**: Customer reviews with star ratings and avatars
- **FAQ Sections**: Expandable FAQ components across service pages
- **Newsletter Subscription**: Email subscription functionality
- **Free Trial/Consultation**: Modal-based consultation forms
- **Scroll-to-Top**: Automatic scroll restoration functionality
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Dropdown Navigation**: Service and career dropdown menus

## 🏗️ Project Structure

```
📦 Ten_Sentinel
├── 📂 Frontend/                          # Main React application
│   ├── 📂 src/
│   │   ├── 📂 assets/                    # Static assets and images
│   │   │   ├── 📂 aboutus.page.assets/   # About page images (15 files)
│   │   │   ├── 📂 AWS-Sentinel/          # AWS service assets (20 files)
│   │   │   ├── 📂 AzureGuardian/         # Azure service assets (1 file)
│   │   │   ├── 📂 BlogPage_Images/       # Blog post images (15 files)
│   │   │   ├── 📂 cloud-security/        # Cloud security assets (4 files)
│   │   │   ├── 📂 ContactUSPage/         # Contact page assets (2 files)
│   │   │   ├── 📂 Cyber attack analysis images/ # Analysis images (5 files)
│   │   │   ├── 📂 DataPrivacy/           # Data privacy assets (7 files)
│   │   │   ├── 📂 Development/           # Development page assets (3 files)
│   │   │   ├── 📂 employee training images/ # Training images (12 files)
│   │   │   ├── 📂 GCP/                   # GCP service assets (11 files)
│   │   │   ├── 📂 InternTrainee/         # Internship assets (12 files)
│   │   │   ├── 📂 IsoPage/               # ISO certification assets (20 files)
│   │   │   ├── 📂 LandingPage/           # Landing page assets (5 files)
│   │   │   ├── 📂 Marketing/             # Marketing assets (1 file)
│   │   │   ├── 📂 PhishingSimulation/    # Phishing simulation assets (6 files)
│   │   │   ├── 📂 privacy_images/        # Privacy page assets (8 files)
│   │   │   ├── 📂 security_audits/       # Security audits assets (20 files)
│   │   │   ├── 📂 Training_and_Certifications_images/ # Training images (13 files)
│   │   │   ├── 📂 Vapt/                  # VAPT service assets (6 files)
│   │   │   ├── 📂 WebDesignPage/         # Web design assets (15 files)
│   │   │   ├── blogData.js               # Blog content data (12 articles)
│   │   │   ├── logo.svg                  # Company logo
│   │   │   ├── HeroSectionBackground.webm # Hero video background
│   │   │   ├── ISO_logo_copie.png        # ISO certification logo
│   │   │   ├── GetInTouch.png            # Contact section image
│   │   │   ├── FAQ.png                   # FAQ section image
│   │   │   ├── security_bg.jpg           # Security background
│   │   │   ├── bgimg.jpg                 # Main background image
│   │   │   ├── peoples.jpg               # People section image
│   │   │   ├── Working_Professional_img.jpg # Professional training image
│   │   │   ├── Marketing.jpg             # Marketing section image
│   │   │   └── users-gear-solid.svg      # User gear icon
│   │   ├── 📂 components/                # Reusable React components
│   │   │   ├── 📂 AWS/                   # AWS service components (4 files)
│   │   │   ├── 📂 azureguardian/         # Azure service components (8 files)
│   │   │   ├── 📂 BlogComponents/        # Blog-related components (3 files)
│   │   │   ├── 📂 cloud-security/        # Cloud security components (7 files)
│   │   │   ├── 📂 Cyber_WorkingProfessional/ # Professional training components
│   │   │   ├── 📂 CyberAttackAnalysis/   # Cyber attack analysis components
│   │   │   ├── 📂 data/                  # Data files (cloudSecurity.js)
│   │   │   ├── 📂 DevelopmentPageComponent/ # Development components (15 files)
│   │   │   ├── 📂 EmployeeTraining/      # Training components (1 file)
│   │   │   ├── 📂 GCP/                   # GCP service components (4 files)
│   │   │   ├── 📂 InternTrainee/         # Internship components (9 files)
│   │   │   ├── 📂 IsoPage/               # ISO certification components (1 file)
│   │   │   ├── 📂 LandingPage/           # Landing page components (10 files)
│   │   │   ├── 📂 Marketing/             # Marketing components (3 files)
│   │   │   ├── 📂 Navbar/                # Navigation components (2 files)
│   │   │   ├── 📂 PhishingSimulation/    # Phishing simulation components (3 files)
│   │   │   ├── 📂 Security_Audits/       # Security audits components (3 files)
│   │   │   ├── 📂 Training_and_Certifications/ # Training components (3 files)
│   │   │   ├── 📂 VAPT_Components/       # VAPT service components (9 files)
│   │   │   ├── 📂 WebDesign/             # Web design components (8 files)
│   │   │   ├── Footer.jsx                # Footer component (182 lines)
│   │   │   └── Navbar.jsx                # Main navigation (296 lines)
│   │   ├── 📂 pages/                     # Page components (19 pages)
│   │   │   ├── AboutPage.jsx             # About us page (451 lines)
│   │   │   ├── AzureGuardian.jsx         # Azure service page (31 lines)
│   │   │   ├── BlogPage.jsx              # Blog listing page (31 lines)
│   │   │   ├── CloudSecurity.jsx         # Cloud security page (151 lines)
│   │   │   ├── ContactUsPage.jsx         # Contact page (252 lines)
│   │   │   ├── Cyber_WorkingProfessional.jsx # Professional training page (35 lines)
│   │   │   ├── DataPrivacy.jsx           # Data privacy page (246 lines)
│   │   │   ├── DevelopmentPage.jsx       # Development services page (68 lines)
│   │   │   ├── GCP.jsx                   # GCP service page (636 lines)
│   │   │   ├── InternTrainee.jsx         # Internship page (26 lines)
│   │   │   ├── LandingPage.jsx           # Home page (116 lines)
│   │   │   ├── Marketing.jsx             # Marketing page (19 lines)
│   │   │   ├── PhishingSimulation.jsx    # Phishing simulation page (38 lines)
│   │   │   ├── PrivacyPage.jsx           # Privacy policy page (218 lines)
│   │   │   ├── Security_Audits.jsx       # Security audits page (23 lines)
│   │   │   ├── Training_and_Certifications.jsx # Training page (28 lines)
│   │   │   ├── VAPT.jsx                  # VAPT service page (38 lines)
│   │   │   └── WebDesignPage.jsx         # Web design page (103 lines)
│   │   ├── App.css                       # Global styles (103 lines)
│   │   ├── App.jsx                       # Main app component (90 lines)
│   │   ├── index.css                     # Base styles (1 line - Tailwind import)
│   │   ├── main.jsx                      # Application entry point (12 lines)
│   │   └── swiper.css                    # Swiper carousel styles (24 lines)
│   ├── eslint.config.js                  # ESLint configuration (39 lines)
│   ├── index.html                        # HTML template (38 lines)
│   ├── package-lock.json                 # Dependency lock file (6200 lines)
│   ├── package.json                      # Project dependencies (56 lines)
│   ├── tailwind.config.js                # Tailwind CSS configuration (29 lines)
│   └── vite.config.js                    # Vite build configuration (8 lines)
├── package-lock.json                     # Root dependency lock file (7 lines)
├── .gitignore                            # Git ignore rules (25 lines)
└── README.md                             # Project documentation
```

## 🛠️ Technology Stack

### Frontend Technologies
- **React 19.0.0**: Modern React with latest features
- **Vite 6.3.5**: Fast build tool and development server
- **Tailwind CSS 4.1.4**: Utility-first CSS framework
- **Framer Motion 12.7.4**: Animation library for React
- **React Router DOM 7.5.1**: Client-side routing
- **React Icons 5.5.0**: Icon library
- **Lucide React 0.501.0**: Modern icon set
- **React Hot Toast 2.5.2**: Toast notifications
- **React CountUp 6.5.3**: Animated number counters
- **React Intersection Observer 9.16.0**: Scroll-based animations
- **Swiper 11.2.8**: Touch slider component
- **React Slick 0.30.3**: Carousel component

### Development Tools
- **ESLint 9.22.0**: Code linting and quality
- **TypeScript Support**: Type definitions for React
- **PostCSS 8.5.3**: CSS processing
- **Autoprefixer 10.4.21**: CSS vendor prefixing

### UI/UX Libraries
- **Bootstrap 5.3.5**: CSS framework components
- **React Bootstrap 2.10.9**: Bootstrap components for React
- **Class Variance Authority 0.7.1**: Component variant management
- **CLSX 2.1.1**: Conditional className utility
- **Tailwind Merge 3.2.0**: Tailwind class merging utility
- **Tailwind Scrollbar 4.0.2**: Custom scrollbar styling
- **Tailwind CSS Animate 1.0.7**: Animation utilities

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Package manager (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Ten_Sentinel
   ```

2. **Navigate to the Frontend directory**
   ```bash
   cd Frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint for code quality
- `npm run preview`: Preview production build

## 📱 Application Features

### Navigation System
- **Responsive Navbar**: Desktop and mobile navigation
- **Dropdown Menus**: Service and career dropdowns
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll-to-Top**: Automatic scroll restoration

### Service Pages
1. **Landing Page**: Hero section, services overview, testimonials
2. **Cloud Security**: AWS, Azure, and GCP security solutions
3. **VAPT**: Vulnerability Assessment and Penetration Testing
4. **ISO 27001**: Information Security Management System certification
5. **Training**: Employee cybersecurity training programs
6. **Security Audits**: Comprehensive security assessments
7. **Data Privacy**: Privacy compliance services
8. **Web Design**: Web development services
9. **Marketing**: Digital marketing services

### Interactive Components
- **Animated Counters**: Statistics with smooth animations
- **Testimonials Carousel**: Customer testimonials
- **FAQ Accordions**: Expandable FAQ sections
- **Contact Forms**: Multiple consultation forms
- **Blog System**: Educational content with detailed views

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive layouts for tablets
- **Desktop Optimization**: Enhanced desktop experience
- **Touch-Friendly**: Optimized for touch interactions

## 🎨 Design System

### Color Scheme
- **Primary**: Blue gradient (#3b82f6 to #1e40af)
- **Secondary**: Green accent (#10b981)
- **Background**: Gray to blue gradient
- **Text**: Dark gray (#1f2937) and white

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body Text**: Readable, medium-sized fonts
- **Buttons**: Bold, uppercase text for CTAs
- **Responsive Text**: Adaptive font sizes for different screen sizes

### Animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Hover Effects**: Interactive element feedback with scale and color changes
- **Scroll Animations**: Reveal animations on scroll with intersection observer
- **Loading States**: Skeleton loading and spinners
- **Carousel Animations**: Smooth testimonial and image carousels
- **Modal Animations**: Smooth modal open/close transitions
- **Button Animations**: Hover and click feedback animations

### Service Data
- **Cloud Security**: AWS, Azure, GCP specific solutions with platform-specific tools
- **VAPT Services**: Methodology, benefits, and comprehensive testing approaches
- **Training Programs**: Intern and professional courses with detailed curricula
- **Certification**: ISO 27001 process and benefits with compliance frameworks
- **Security Audits**: SOC 2, GDPR, HIPAA, PCI DSS, NIST, RBI, ACSC, ISM compliance
- **VAPT Platforms**: Web Application, Mobile Application, Network, API, Cloud VAPT

## 🔧 Configuration Files

### Tailwind Configuration
```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#10b981',
      },
      animation: {
        gradient: "gradient 5s ease infinite",
      },
    },
  },
  plugins: [],
}
```

### Vite Configuration
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### ESLint Configuration
```javascript
// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^([A-Z_]|motion$)',
          argsIgnorePattern: '^_'
        }
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
```

## 🚀 Deployment

### Build for Production
```bash
cd Frontend
npm run build
```

## 🔒 Security Features

### Frontend Security
- **Content Security Policy**: XSS protection
- **HTTPS Only**: Secure connections
- **Input Validation**: Form validation and sanitization
- **Error Handling**: Graceful error management

### Performance Optimization
- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Optimized asset delivery
- **Bundle Analysis**: Optimized bundle sizes
- **Caching**: Browser caching strategies

## 📈 Analytics and Monitoring

### Performance Metrics
- **Core Web Vitals**: LCP, FID, CLS optimization
- **Bundle Size**: Optimized JavaScript bundles
- **Loading Times**: Fast page load performance
- **Mobile Performance**: Mobile-optimized experience

## 🤝 Contributing

### Development Workflow
1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Run linting**: `npm run lint`
5. **Test your changes**
6. **Submit a pull request**

### Code Standards
- **ESLint**: Follow linting rules
- **Prettier**: Consistent code formatting
- **Component Structure**: Follow established patterns
- **Documentation**: Update documentation as needed

## 📞 Contact Information

### Company Details
- **Name**: Ten Sentinel (Part of The Entrepreneurship Network)
- **Location**: Noida 201301, UP, India
- **Corporate Address**: India Accelerator, Noida 201301, UP, India
- **Email**: info@entrepreneurshipnetwork.net
- **Website**: https://www.entrepreneurshipnetwork.net/
- **Services**: Cybersecurity consultation, training, and comprehensive security services

### Support Channels
- **Email**: Contact through website forms and direct email
- **LinkedIn**: Professional networking and updates
- **Blog**: Educational cybersecurity content and insights
- **Contact Forms**: Multiple consultation and inquiry forms across pages
- **Free Consultation**: Modal-based consultation booking system

## 📄 License

This project is proprietary software developed by Ten Sentinel. All rights reserved.

## 🔄 Version History

### Current Version: 0.0.0
- **Initial Release**: Complete cybersecurity platform
- **Features**: All core services and components (19 pages, 100+ components)
- **Technology**: Modern React stack with Tailwind CSS
- **Performance**: Optimized for production deployment
- **Content**: 12 blog posts, comprehensive service information
- **Assets**: 200+ images and media files
- **Components**: 100+ reusable React components
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization

---

**Ten Sentinel** - Empowering businesses with comprehensive cybersecurity solutions through innovative technology and expert consultation.