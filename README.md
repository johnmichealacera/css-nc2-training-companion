# CSS NC II Training Companion App

A comprehensive web application designed to help students and professionals master Computer Systems Servicing and prepare for TESDA NC II certification.

![CSS NC II Training](https://img.shields.io/badge/Version-2.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black.svg)
![React](https://img.shields.io/badge/React-19.0.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC.svg)

## 🎯 Overview

The CSS NC II Training Companion App is a modern, responsive web application that provides comprehensive training materials for Computer Systems Servicing NC II certification. Built with Next.js and React, it offers an intuitive learning experience with detailed modules covering all four core competencies required for TESDA certification.

## ✨ Features

### 📚 Comprehensive Learning Modules
- **COC 1**: Installing and Configuring Computer Systems
- **COC 2**: Setting up Computer Networks  
- **COC 3**: Setting up Computer Servers
- **COC 4**: Maintaining and Repairing Systems

### 🎓 Learning Resources
- Detailed module descriptions and learning objectives
- Step-by-step procedures and guidelines
- Practical exercises and hands-on activities
- Video resources and external links
- Comprehensive technical glossary with 50+ terms

### 💻 Modern Technology Stack
- **Frontend**: Next.js 15.3.3 with React 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript for type safety
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth interactions
- **Development**: ESLint for code quality, Turbopack for fast builds

### 📱 User Experience
- Responsive design for all device sizes
- Modern, professional UI with gradient backgrounds
- Intuitive navigation and layout
- Fast loading and optimized performance
- Cross-browser compatibility

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/css-nc2-training-app.git
   cd css-nc2-training-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📖 Usage

### Navigation
- **Home**: Overview of all core competencies and course information
- **COC 1-4**: Detailed learning modules for each competency
- **About**: Information about CSS NC II certification and benefits
- **Glossary**: Comprehensive technical reference guide
- **Contact**: Support and contact information

### Learning Path
1. Start with the **Home** page to understand the course structure
2. Navigate through **COC 1-4** modules in sequence
3. Use the **Glossary** for technical term definitions
4. Review the **About** page for certification information

## 🏗️ Project Structure

```
css-nc2-training-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── coc1/              # COC 1 module
│   │   ├── coc2/              # COC 2 module
│   │   ├── coc3/              # COC 3 module
│   │   ├── coc4/              # COC 4 module
│   │   ├── about/             # About page
│   │   ├── glossary/          # Glossary page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/            # Reusable components
│       └── Footer.tsx         # Footer component
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the design by modifying:
- `src/app/globals.css` - Global styles and Tailwind directives
- Component-specific classes in individual page files
- Color schemes and gradients in the navigation and hero sections

### Content
- Update module content in the respective COC page files
- Modify the glossary terms in `src/app/glossary/page.tsx`
- Update course information in `src/app/about/page.tsx`

## 📋 Core Competencies Covered

### COC 1: Installing and Configuring Computer Systems
- Computer hardware components and assembly
- Operating system installation and configuration
- BIOS/UEFI setup and configuration
- Application software installation
- System optimization and troubleshooting

### COC 2: Setting up Computer Networks
- Network infrastructure setup
- Cable creation and installation
- Router and switch configuration
- Wireless network setup
- Network troubleshooting

### COC 3: Setting up Computer Servers
- Server administration basics
- User access management
- Network services configuration
- Server security implementation
- Documentation procedures

### COC 4: Maintaining and Repairing Systems
- System maintenance procedures
- Preventive maintenance planning
- Hardware and software troubleshooting
- Repair and testing procedures
- Quality assurance processes

## 🌟 Benefits of CSS NC II Certification

- **Industry Recognition**: Based on industry needs and standards
- **TESDA Certified**: Recognized locally and internationally
- **Career Gateway**: Pathway to advanced IT courses and opportunities
- **Professional Growth**: Enhanced job prospects and earning potential

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**John Micheal Acera**
- Website: [johnmichealacera.com](https://www.johnmichealacera.com)
- Project: CSS NC II Training Companion App

## 🙏 Acknowledgments

- TESDA for the CSS NC II competency standards
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon set

---

**Version**: 2.0.0  
**Last Updated**: June 2025  
**Status**: Production Ready
