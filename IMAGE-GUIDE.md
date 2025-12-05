# 📸 IMAGE PLACEMENT GUIDE - Hárika Creative

## 📂 Mappestruktur

```
C:\Users\Marianna\Projects\
│
├── harika-creative/                    ← DIN HOVEDSIDE
│   └── public/
│       └── images/
│           ├── hero-image.webp        ✅ Allerede på plass
│           ├── about-harika-1.webp    ✅ Allerede på plass
│           ├── about-harika-2.webp    ✅ Allerede på plass
│           ├── logo-harikacreative.png ✅ Allerede på plass
│           │
│           └── mockups/               ← LEGG MOCKUP SCREENSHOTS HER
│               ├── secret-place-hero.jpg      ⏳ TRE...NGS
│               └── eventyrtur-hero.jpg        ⏳ TRENGER DETTE
│
├── mockup-demos/                       ← SEPARATE MOCKUP PROSJEKTER
│   ├── secret-place/                  ← Mockup 4 (Standard Package)
│   │   └── public/
│   │       └── images/
│   │           ├── hero-bg.jpg        ⏳ Plasser Secret Place bilder her
│   │           ├── villa-1.jpg
│   │           ├── villa-2.jpg
│   │           ├── villa-3.jpg
│   │           ├── villa-4.jpg
│   │           └── villa-5.jpg
│   │
│   └── eventyrtur/                    ← Mockup 5 (Advanced Package)
│       └── public/
│           └── images/
│               ├── norwegian-mountains.jpg  ⏳ Plasser Eventyrtur bilder her
│               ├── trolltunga.jpg
│               ├── geirangerfjord.jpg
│               ├── preikestolen.jpg
│               └── lofoten.jpg
```

---

## 🎯 STEG-FOR-STEG INSTRUKSJONER

### **1. Screenshots for Hárika Creative Mockups-siden**

Disse vises på `/en/mockups` og `/no/mockups` sidene.

**Hvor:**
```
harika-creative/public/images/mockups/
```

**Hva:**
- `secret-place-hero.jpg` - Screenshot av Secret Place hero section
- `eventyrtur-hero.jpg` - Screenshot av Eventyrtur homepage

**Størrelse:**
- Bredde: 1920px (eller større)
- Høyde: 1080px
- Format: JPG eller WebP
- Kvalitet: Høy (80-90%)

**Hvordan ta screenshots:**
1. Åpne mockup-en i fullscreen
2. Bruk Snipping Tool eller browser developer tools
3. Ta screenshot av hero section eller hele siden
4. Lagre som JPG med høy kvalitet
5. Flytt til `harika-creative/public/images/mockups/`

---

### **2. Secret Place Villa Bilder (Mockup 4)**

**Hvor:**
```
mockup-demos/secret-place/public/images/
```

**Hva du trenger (6 bilder):**

| Filnavn | Beskrivelse | Størrelse |
|---------|-------------|-----------|
| `hero-bg.jpg` | Hovedbilde - villa exterior eller pool view | 1920x1080px |
| `villa-1.jpg` | Pool area fra oven | 1200x800px |
| `villa-2.jpg` | Living room interior | 1200x800px |
| `villa-3.jpg` | Bedroom | 1200x800px |
| `villa-4.jpg` | Dining area eller terrace | 1200x800px |
| `villa-5.jpg` | Sunset view eller exterior | 1200x800px |

**Erstatt disse linjene i koden:**
```typescript
// I components/Hero.tsx
backgroundImage: 'url(/images/hero-bg.jpg)'

// I components/ImageGallery.tsx
images: [
  '/images/villa-1.jpg',
  '/images/villa-2.jpg',
  '/images/villa-3.jpg',
  '/images/villa-4.jpg',
  '/images/villa-5.jpg'
]
```

---

### **3. Eventyrtur Norwegian Adventure Bilder (Mockup 5)**

**Hvor:**
```
mockup-demos/eventyrtur/public/images/
```

**Hva du trenger (9 bilder):**

| Filnavn | Beskrivelse | Plassering i koden | Størrelse |
|---------|-------------|-------------------|-----------|
| `norwegian-mountains.jpg` | Hero background | Hero.tsx | 1920x1080px |
| `trolltunga.jpg` | Trolltunga location | MagicPlaces.tsx | 1200x800px |
| `geirangerfjord.jpg` | Geirangerfjord | MagicPlaces.tsx | 1200x800px |
| `preikestolen.jpg` | Preikestolen | MagicPlaces.tsx | 1200x800px |
| `lofoten.jpg` | Lofoten Islands | MagicPlaces.tsx | 1200x800px |
| `spring.jpg` | Spring wildflowers | SeasonsGallery.tsx | 1000x1200px |
| `summer.jpg` | Midnight sun landscape | SeasonsGallery.tsx | 1000x1200px |
| `autumn.jpg` | Fall colors in mountains | SeasonsGallery.tsx | 1000x1200px |
| `winter.jpg` | Northern lights | SeasonsGallery.tsx | 1000x1200px |

**OBS:** Eventyrtur bruker for øyeblikket Unsplash placeholder URLs.  
Disse fungerer fint, men du kan erstatte med egne bilder hvis du vil.

**Erstatt disse linjene i koden:**
```typescript
// I components/Hero.tsx
backgroundImage: 'url(/images/norwegian-mountains.jpg)'

// I components/MagicPlaces.tsx
image: '/images/trolltunga.jpg'
image: '/images/geirangerfjord.jpg'
// etc...

// I components/SeasonsGallery.tsx
image: '/images/spring.jpg'
image: '/images/summer.jpg'
// etc...
```

---

## 💡 TIPS FOR BILDEHÅNDTERING

### **Optimaliser bilder før opplasting:**

**Online tools:**
- TinyPNG (https://tinypng.com/) - Komprimer PNG/JPG
- Squoosh (https://squoosh.app/) - Avansert komprimering
- CloudConvert - Konverter til WebP

**Kommandolinje (hvis du har ImageMagick):**
```bash
# Resize og optimaliser
magick input.jpg -resize 1920x1080 -quality 85 output.jpg

# Konverter til WebP
magick input.jpg -quality 80 output.webp
```

### **Anbefalte formater:**
- **Hero bilder**: WebP (best) eller JPG (god komprimering)
- **Gallery bilder**: WebP eller JPG
- **Screenshots**: PNG (for skarphet) eller JPG

### **Filstørrelser:**
- Hero bilder: < 300 KB
- Gallery bilder: < 200 KB hver
- Screenshots: < 500 KB

---

## 🚀 DEPLOYMENT WORKFLOW

### **Når du har bildene klare:**

1. **Plasser bilder i riktige mapper** (som beskrevet over)
2. **Test lokalt:**
   ```bash
   npm run dev
   ```
3. **Verifiser at alle bilder vises korrekt**
4. **Deploy til Vercel/Netlify**

### **For Vercel deployment:**
```bash
# I hver mockup-mappe
cd mockup-demos/secret-place
vercel

cd ../eventyrtur  
vercel
```

---

## ❓ VANLIGE SPØRSMÅL

**Q: Må jeg bruke nøyaktig disse filnavnene?**  
A: Ja, hvis du vil unngå å endre koden. Eller du kan endre filnavnene i komponentene.

**Q: Kan jeg bruke PNG i stedet for JPG?**  
A: Ja, men JPG/WebP er bedre for fotografier (mindre filstørrelse).

**Q: Hva hvis jeg ikke har alle bildene ennå?**  
A: Mockup'ene fungerer med placeholder-bildene. Erstatt når du har egne bilder.

**Q: Hvor finner jeg gratis høykvalitets bilder?**  
A: 
- Unsplash (https://unsplash.com/)
- Pexels (https://pexels.com/)
- Pixabay (https://pixabay.com/)

**Q: Trenger jeg å oppdatere koden når jeg endrer bilder?**  
A: Ikke hvis du bruker samme filnavn. Bare erstatt bildefilen.

---

## ✅ SJEKKLISTE

Før deployment, verifiser:

- [ ] Screenshot av Secret Place mockup lagt til
- [ ] Screenshot av Eventyrtur mockup lagt til
- [ ] Secret Place villa-bilder på plass (6 stk)
- [ ] Eventyrtur norske landskap-bilder på plass (9 stk) - VALGFRITT
- [ ] Alle bilder er optimalisert (< 300 KB)
- [ ] Bilder fungerer på localhost
- [ ] Bilder fungerer etter deployment

---

**🎨 Lykke til med bildene!**

Hvis du har spørsmål eller trenger hjelp, bare spør! 🚀
