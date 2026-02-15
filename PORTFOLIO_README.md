# Professional Dark-Themed Portfolio 🚀

A cutting-edge, fully animated personal portfolio website built with modern web technologies. Features smooth animations, interactive 3D elements, and a glassmorphism dark theme design.

## ✨ Features

### 🎨 Design
- **Dark Theme**: Modern dark background with red/neon gradient accents
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Responsive**: Fully responsive on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered page transitions and interactions
- **3D Elements**: Three.js 3D animated icons in hero section

### 📱 Sections
1. **Navbar** - Animated navigation with smooth hover effects and mobile menu
2. **Hero** - Animated greeting with 3D icons and interactive particle background
3. **About** - Professional bio with tech stack showcase
4. **Skills** - Circular progress animations for technical expertise
5. **Projects** - Glassmorphism cards with hover animations and tech tags
6. **Experience** - Timeline-based work experience with smooth reveals
7. **Contact** - Animated form with validation and success state

### 🎯 Key Technologies
- **React** - Component-based UI with hooks
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Advanced smooth animations
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **tsParticles** - Interactive particle background
- **CSS** - Custom styling with gradients and effects

## 🚀 Getting Started

### Installation
```bash
# Clone the repository
git clone https://github.com/velmuruganff2006-ship-it/vel_protfolio.git

# Navigate to project
cd vel_protfolio/protfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

The portfolio will open at `http://localhost:5173/` (or next available port)

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Animated navigation bar
│   ├── Hero.jsx            # Hero section with 3D
│   ├── Skills.jsx          # Skills with circular progress
│   ├── Projects.jsx        # Project showcase cards
│   ├── Contact.jsx         # Contact form
│   ├── Scene3D.jsx         # Three.js 3D scene
│   └── ParticleBackground.jsx # Particle effects
├── pages/
│   ├── About.jsx           # About section
│   └── Experience.jsx      # Work experience timeline
├── animations/
│   └── variants.js         # Framer Motion animation variants
├── styles/
│   ├── globals.css         # Global styles and animations
│   └── responsive.css      # Media queries for all devices
├── assets/
│   └── icons/              # Icon assets
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.html              # HTML template
```

## 🎨 Design Highlights

### Color Palette
- **Primary**: #ff2e63 (Vibrant Red)
- **Secondary**: #ff7b54 (Coral Orange)
- **Background**: #0a0e27 (Deep Navy)
- **Text**: #e0e0e0 (Light Gray)

### Animations
- **Page Transitions**: Smooth fade and slide-up animations
- **Hover Effects**: Scale, glow, and color transitions
- **Scroll Triggers**: reveal animations on viewport intersection
- **Particle System**: Interactive background that responds to mouse movement

### Glassmorphism Effect
- Frosted glass cards with backdrop blur
- Semi-transparent backgrounds with gradient borders
- Soft glowing shadows

## 📱 Responsive Breakpoints

- **Desktop** (1024px+) - Full layout with side-by-side sections
- **Tablet** (768px-1024px) - Grid layout with adjusted spacing
- **Mobile** (480px-768px) - Single column layout with hamburger menu
- **Small Mobile** (<480px) - Optimized for small screens with minimal padding

## 🔧 Customization

### Update Personal Info
Edit the following files to personalize the portfolio:
- **Navbar.jsx** - Update navigation items
- **Hero.jsx** - Change greeting and description
- **About.jsx** - Update bio and skills
- **Projects.jsx** - Add your projects
- **Experience.jsx** - Add your work history
- **Contact.jsx** - Update contact methods

### Change Colors
Edit `src/styles/globals.css` and update the gradient colors:
```css
background: linear-gradient(135deg, #ff2e63 0%, #ff7b54 100%);
```

### Modify Animations
Edit `src/animations/variants.js` to customize Framer Motion animations

## 📊 Performance

- **Optimized Bundle**: Tree-shaking and code splitting
- **Lazy Loading**: Components load only when visible
- **Smooth FPS**: 60fps animations with GPU acceleration
- **Particle Performance**: Adjustable particle count based on device

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push the 'dist' folder contents to gh-pages branch
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📧 Contact

**Email**: alex@email.com  
**GitHub**: [velmuruganff2006-ship-it](https://github.com/velmuruganff2006-ship-it)

---

**Built with ❤️ using React, Framer Motion, and Three.js**
