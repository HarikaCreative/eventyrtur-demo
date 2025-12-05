# 🛠️ Installation Guide - Eventyrtur Mockup

Complete step-by-step guide for setting up and running the Eventyrtur mockup locally.

---

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v18.0.0 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **npm** (comes with Node.js)
   - Verify: `npm --version`

3. **Git** (optional, for version control)
   - Download: https://git-scm.com/
   - Verify: `git --version`

---

## Step 1: Extract Project Files

Extract the project archive to your desired location:

```bash
# Example locations:
# Windows: C:\Users\YourName\Projects\eventyrtur
# Mac/Linux: ~/Projects/eventyrtur
```

Navigate to the project directory:

```bash
cd eventyrtur-mockup
```

---

## Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- All development dependencies

**Expected time**: 2-5 minutes depending on internet speed.

---

## Step 3: Run Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:

```
▲ Next.js 14.0.0
- Local:        http://localhost:3000
- Ready in 2.3s
```

---

## Step 4: Open in Browser

Open your web browser and navigate to:

```
http://localhost:3000
```

You should see the Eventyrtur homepage!

---

## Troubleshooting

### Issue: Port 3000 already in use

**Solution**: Kill the process or use a different port:

```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or run on different port
npm run dev -- -p 3001
```

### Issue: Module not found errors

**Solution**: Delete node_modules and reinstall:

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution**: Ensure TypeScript is installed:

```bash
npm install --save-dev typescript @types/react @types/node
```

### Issue: Tailwind styles not loading

**Solution**: Check that globals.css is imported in layout.tsx:

```typescript
// app/layout.tsx
import './globals.css'  // ← Make sure this line exists
```

---

## Development Workflow

### Making Changes

1. **Edit files** in your code editor
2. **Save** - changes are hot-reloaded automatically
3. **Check browser** - updates appear instantly

### Recommended Code Editors

- **VS Code** (recommended)
  - Install extensions:
    - ESLint
    - Prettier
    - Tailwind CSS IntelliSense
- **WebStorm**
- **Sublime Text**

---

## Building for Production

### Step 1: Create Production Build

```bash
npm run build
```

This creates an optimized production build in `.next` folder.

### Step 2: Test Production Build Locally

```bash
npm start
```

Opens production server on `http://localhost:3000`

### Step 3: Deploy

See deployment options in main README.md.

---

## Project Structure Overview

```
eventyrtur-mockup/
│
├── app/                      # Next.js App Router
│   ├── page.tsx             # Homepage (main entry)
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
│
├── components/              # React components
│   ├── Hero.tsx            # Hero section
│   ├── FairyTales.tsx      # Tales section
│   ├── MagicPlaces.tsx     # Places section
│   ├── SeasonsGallery.tsx  # Seasons section
│   ├── BookingSection.tsx  # Booking calendar
│   └── ContactSection.tsx  # Contact form
│
├── public/                  # Static files (create if needed)
│   └── images/             # Your images go here
│
├── node_modules/           # Dependencies (created by npm install)
│
├── package.json            # Project dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind config
├── next.config.js         # Next.js config
├── postcss.config.js      # PostCSS config
└── README.md              # Documentation
```

---

## Customization Quick Start

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'brand-primary': '#YOUR_COLOR',
      'brand-secondary': '#YOUR_COLOR',
    },
  },
},
```

### Change Content

Edit content objects in components:

```typescript
// Example: components/Hero.tsx
const content = {
  en: {
    title: 'Your New Title',
    subtitle: 'Your new subtitle',
  },
  // ...
};
```

### Add New Images

1. Place images in `public/images/`
2. Reference them: `/images/your-image.jpg`

```typescript
// Example
<img src="/images/hero-background.jpg" alt="Hero" />
```

---

## Performance Tips

### Development
- Keep dev server running while coding
- Use hot reload instead of restarting
- Clear browser cache if styles don't update

### Production
- Always run `npm run build` before deploying
- Optimize images (use WebP format)
- Enable gzip compression on server

---

## Environment Variables (Optional)

Create `.env.local` for sensitive data:

```bash
# .env.local
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
NEXT_PUBLIC_GA_TRACKING_ID=G-...
```

**Important**: Never commit `.env.local` to Git!

---

## Getting Help

### Resources
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs

### Common Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

---

## Next Steps

After successful installation:

1. ✅ Familiarize yourself with project structure
2. ✅ Test all pages and features
3. ✅ Replace placeholder images
4. ✅ Customize content and colors
5. ✅ Add your own branding
6. ✅ Test on mobile devices
7. ✅ Deploy to production

---

**Happy coding! 🚀**

If you encounter any issues not covered here, contact:
- Email: contact@harikacreative.com
- Web: www.harikacreative.com
