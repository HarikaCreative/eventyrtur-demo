# 🏔️ Eventyrtur - Norwegian Fairytale Adventures

**Complete Mockup 5 - Advanced Package Demo**  
Showcasing bilingual (EN/NO), booking calendar, dual currency pricing, and production-ready code.

---

## 📋 Project Overview

**Eventyrtur** is a demonstration website for Hárika Creative's **Advanced Package (€3,300)**, showcasing:

- ✅ **Bilingual functionality** (English / Norwegian)
- ✅ **Booking calendar** with recurring events
- ✅ **Dual currency pricing** (EUR / NOK)
- ✅ **Mobile-first responsive design**
- ✅ **WCAG 2.1 accessibility compliance**
- ✅ **Norwegian fairytale storytelling integration**
- ✅ **Production-ready code structure**

---

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
eventyrtur-mockup/
├── app/
│   ├── page.tsx           # Main homepage with navigation
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── Hero.tsx           # Hero section with background image
│   ├── FairyTales.tsx     # Three classic Norwegian fairytales
│   ├── MagicPlaces.tsx    # Four magical Norwegian locations
│   ├── SeasonsGallery.tsx # Four seasons photo gallery
│   ├── BookingSection.tsx # Booking calendar + pricing
│   └── ContactSection.tsx # Contact form
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind CSS config
├── next.config.js         # Next.js config
└── README.md             # This file
```

---

## 🎨 Design Features

### Color Palette
- **Primary**: Emerald Green (`#10b981`)
- **Secondary**: Blue (`#3b82f6`)
- **Neutral**: Slate Gray
- **Gradients**: Emerald-to-Blue throughout

### Typography
- **System fonts** for optimal performance
- **Responsive sizing**: 5xl on desktop, 4xl on mobile
- **Font weights**: Regular (400), Semibold (600), Bold (700)

### Components

#### 1. Hero Section
- Full-screen background image (Norwegian mountains)
- Animated fade-in title
- Bilingual headline and CTA button
- Scroll indicator animation

#### 2. Fairy Tales Section
- Grid layout: 3 columns desktop, 1 column mobile
- Story excerpts from:
  - **Three Billy Goats Gruff** (De Tre Bukkene Bruse)
  - **East of the Sun, West of the Moon** (Østenfor Sol og Vestenfor Måne)
  - **The Princess and the Trolls** (Prinsessen og Trollene)
- Location tags and duration indicators

#### 3. Magic Places Section
- 2-column grid (responsive)
- Image overlays with gradient
- Featured locations:
  - Trolltunga
  - Geirangerfjord
  - Preikestolen
  - Lofoten Islands

#### 4. Seasons Gallery
- 4-column grid (responsive to 1 column mobile)
- Seasonal color-coded badges
- Spring, Summer, Autumn, Winter themes

#### 5. Booking Section
- **Currency toggle**: EUR ↔ NOK
- **Date selection**: Recurring events for each adventure
- **Price display**: Updates based on currency
- **Book button**: Disabled until date selected
- Stripe integration note (ready for implementation)

#### 6. Contact Section
- **Contact form**: Name, Email, Phone, Message
- **Validation**: Required fields
- **Status messages**: Success/Error feedback
- **Contact info**: Email, Phone, Location
- Decorative Norwegian landscape image

---

## 🌍 Bilingual System

### Language Toggle
Located in navigation header:
- 🇬🇧 EN / 🇳🇴 NO toggle button
- Updates all content dynamically
- Preserved throughout session

### Translated Content
All sections fully translated:
- Navigation menu
- Hero headlines
- Fairy tale stories
- Location descriptions
- Booking interface
- Contact form labels
- Footer links

---

## 💳 Booking & Pricing

### Adventures Available

| Adventure | Duration | EUR | NOK |
|-----------|----------|-----|-----|
| Three Billy Goats Gruff Trail | 3 hours | €89 | 950 kr |
| East of the Sun Journey | 5 hours | €149 | 1,590 kr |
| Troll Caves Expedition | 4 hours | €119 | 1,270 kr |

### Recurring Dates
Each adventure has 3 recurring dates per month (example dates shown).

### Payment Integration
**Stripe** integration is commented and ready:
- Replace `alert()` in BookingSection.tsx
- Add Stripe public key to `.env.local`
- Uncomment Stripe checkout code

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Hamburger menu (ready for implementation)
- Stacked layouts
- Touch-friendly buttons (min 44px height)
- Optimized image sizes

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- ✅ Color contrast ratios > 4.5:1
- ✅ Keyboard navigation support
- ✅ ARIA labels on interactive elements
- ✅ Semantic HTML structure
- ✅ Focus indicators on all interactive elements
- ✅ Alt text on all images

### Screen Reader Support
- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive link text
- Form labels properly associated

---

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: SVG (inline)
- **Images**: Unsplash (placeholder URLs)
- **Fonts**: System fonts

---

## 📝 Content Management

### Image Placeholders
All images use Unsplash URLs. Replace with actual images:

```typescript
// Example in Hero.tsx
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)'
```

### Text Content
Easily editable in component `content` objects:

```typescript
const content = {
  en: {
    title: 'Your English Title',
    // ...
  },
  no: {
    title: 'Din Norske Tittel',
    // ...
  }
};
```

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy /out folder
```

### Self-Hosted
```bash
npm run build
npm start
# Runs on port 3000
```

---

## 🔜 Future Enhancements

### Phase 1 - Add-ons
- [ ] Stripe payment integration
- [ ] Email confirmation system
- [ ] User authentication
- [ ] Booking management dashboard

### Phase 2 - Features
- [ ] Multi-date booking calendar
- [ ] Group booking discounts
- [ ] Gift vouchers
- [ ] Customer reviews

### Phase 3 - Content
- [ ] Blog with adventure stories
- [ ] Photo gallery from past tours
- [ ] Video testimonials
- [ ] Newsletter signup

---

## 📄 License

This is a **demonstration mockup** for Hárika Creative's portfolio.  
Not for commercial use without permission.

---

## 🤝 Credits

**Built by**: Hárika Creative  
**Designer**: Marianna  
**Date**: December 2024  
**Package**: Advanced (€3,300)

---

## 📞 Support

For questions or customizations:
- **Email**: contact@harikacreative.com
- **Web**: www.harikacreative.com

---

**🇳🇴 Built with Norwegian precision × 🇬🇷 Greek warmth**  
*Pixel in place, built for presence* ✨
