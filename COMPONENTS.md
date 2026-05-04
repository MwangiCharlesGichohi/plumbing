# Component Architecture Guide

## Component Breakdown

### 1. **Navbar.tsx**
Fixed navigation with smooth animations and mobile responsiveness.

**Features:**
- Sticky positioning at top (z-50)
- Logo with gradient background
- Desktop navigation links with hover effects
- Mobile hamburger menu with slide animation
- CTA buttons and phone number

**Key Props & Customization:**
```typescript
// Navigation links defined in component
const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// Update internal links to match section IDs
```

**Tailwind Classes Used:**
- `fixed top-0 left-0 right-0 z-50` - Fixed positioning
- `md:hidden` - Hide on desktop, show on mobile
- `opacity-0 animate` - Framer Motion animations

---

### 2. **Hero.tsx**
Conversion-focused hero section with automated animations.

**Features:**
- Split layout: left content, right image
- Trust badges with icons
- Benefit-driven headline
- Trust indicators (Fast Response, Expert Team)
- Primary & Secondary CTAs
- Floating testimonial card with animation
- Decorative background shapes

**Key Elements to Customize:**
```typescript
// Headline - Most important for conversion
<h1>Professional Plumbing When You Need It Most</h1>

// Subheadline - Value proposition
<p>Same-day service, transparent pricing, and guaranteed workmanship...</p>

// Trust Indicators - Build confidence
<p className="font-semibold">Fast Response: 1-2 hour service window</p>

// Image URL - Replace with your photos
src="https://images.unsplash.com/photo-1585771724684-..."

// Call-to-action buttons
<button>Book Service</button>  // Primary action
<a href="tel:+254712345678">Call Now</a>  // Secondary action
```

**Tailwind Patterns:**
- `grid-cols-1 md:grid-cols-2` - Responsive grid
- `bg-gradient-to-b from-blue-50 to-white` - Gradient background
- `rounded-2xl overflow-hidden` - Image container styling

---

### 3. **Services.tsx**
Grid of 4 service cards with icons and features.

**Features:**
- Icon from lucide-react with hover color change
- Service title and description
- Feature list with checkmarks
- Hover animation (translateY)
- Staggered entrance animation

**Service Data Structure:**
```typescript
const services = [
  {
    icon: Droplet,  // lucide-react icon
    title: "Leak Repair",
    description: "Quick detection and repair...",
    features: [
      "Same-day service",
      "Non-invasive detection",
      "Warranty included"
    ],
  },
  // ... more services
];
```

**Key Customization Points:**
- Add/remove services by modifying the array
- Change icons from lucide-react
- Update feature list for each service
- Adjust colors: `bg-blue-100`, `text-blue-600`, hover color

**Tailwind Patterns:**
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` - Responsive columns
- `from-blue-50 to-white` - Gradient background
- `group-hover:bg-blue-600` - Group hover effects

---

### 4. **WhyChooseUs.tsx**
Dark background section with trust factors and statistics.

**Features:**
- Dark blue gradient background
- 4 trust factor cards with icons
- Statistics grid at bottom (500+ customers, 98% satisfaction, 15+ years)
- Backdrop blur effect
- Staggered animations

**Trust Factors:**
```typescript
const reasons = [
  {
    icon: Clock,
    title: "Rapid Response Time",
    description: "We arrive within 1-2 hours...",
  },
  // ... more factors
];
```

**Customization:**
- Update statistics numbers
- Change trust factors order/content
- Modify colors for dark theme
- Add or remove stats

**Tailwind Patterns:**
- `bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900` - Dark gradient
- `text-white` - Default text color
- `border-white/20` - Subtle borders
- `backdrop-blur-sm` - Frosted glass effect

---

### 5. **Testimonials.tsx**
Customer testimonial cards with 5-star ratings.

**Features:**
- Grid of 4 customer testimonials
- Star ratings (using lucide Star icon)
- Customer avatar images
- Name and role
- Scrollable on mobile, 2-column on tablet, 2x2 on desktop

**Testimonial Data:**
```typescript
const testimonials = [
  {
    name: "James Kariuki",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-...",
    content: "4-AquaFlow came within an hour...",
    rating: 5,
  },
  // ... more testimonials
];
```

**Key Updates:**
- Replace names and roles
- Update testimonial text
- Change image URLs (use professional headshots)
- Adjust grid columns as needed

**Tailwind Patterns:**
- `grid-cols-1 md:grid-cols-2` - 2 columns on tablet+
- `fill-yellow-400 text-yellow-400` - Star icon styling
- `rounded-full object-cover` - Avatar images

---

### 6. **CTABanner.tsx**
Final conversion push banner before footer.

**Features:**
- Large centered headline
- Trust statement at bottom
- Two CTA buttons (Call, Quote)
- Background pattern with decorative shapes
- Relative positioning for overlays

**Customizable Content:**
```typescript
<h2>Ready to Fix Your Plumbing?</h2>
<p>Don't wait for a small issue to become a major problem...</p>

// Trust statement
✓ No hidden fees
✓ Same-day service available
✓ 100% satisfaction guaranteed
```

**Updates for Your Business:**
- Change headline tone (urgent vs. reassuring)
- Update description text
- Modify trust statement bullets
- Adjust button colors or text

**Tailwind Patterns:**
- `bg-gradient-to-r from-blue-600 to-blue-800` - Blue gradient
- `flex flex-col sm:flex-row gap-4 justify-center` - Responsive button layout
- `w-full` - Full width on mobile, auto on desktop

---

### 7. **Footer.tsx**
Complete footer with contact info, links, and social media.

**Features:**
- 4-column layout on desktop, stacked on mobile
- Brand section with social icons
- Service links
- Company links
- Contact information with icons
- Copyright and legal links

**Contact Information:**
```typescript
// Update phone number
<span>+254 (0) 712 345 678</span>

// Update email
<a href="mailto:info@4aquaflow.com">

// Update location
<span>Nairobi, Kenya</span>
```

**Social Media Integration:**
```typescript
// Add social links
<a href="https://facebook.com/yourpage">
  <Facebook className="w-5 h-5" />
</a>
```

**Tailwind Patterns:**
- `bg-gray-900 text-gray-300` - Dark footer
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` - Column layout
- `border-t border-gray-800` - Divider line

---

## Animation Patterns

### Framer Motion Variants
All components use similar animation patterns:

```typescript
// Fade in + slide on scroll view
initial={{ opacity: 0, y: -20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}  // Animate only once per component lifecycle

// Hover animations (buttons, cards)
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Staggered children
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}
```

---

## Responsive Design Strategy

### Mobile First (xs)
- Single column layouts
- Full-width sections
- Larger touch targets
- Simplified navigation (hamburger menu)

### Tablet (md: 768px)
- Two-column grids
- Increased spacing
- Desktop nav begins showing
- Larger text sizes

### Desktop (lg: 1024px)
- Multi-column grids
- Full navigation
- Hero images prominent
- Hover effects visible

### Example:
```typescript
// Responsive classes
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
// 1 column on mobile, 2 on tablet, 4 on desktop
// Gap of 6 on mobile, 8 on tablet+
```

---

## Advanced Customization

### Changing the Color Scheme

1. Update `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    50: '#f0f7ff',
    600: '#0284c7',  // Main color
    700: '#0369a1',  // Hover state
    900: '#0c3d66',  // Dark state
  }
}
```

2. Replace all `bg-blue-600` with `bg-primary-600` in components

### Adding New Sections

1. Create new component: `src/components/NewSection.tsx`
2. Export default function with animations
3. Import in `page.tsx`
4. Add to render order
5. Update Navbar links if needed

### Image Optimization

Replace placeholder URLs:
```typescript
// Before
src="https://images.unsplash.com/photo-..."

// After - Use Next.js Image component
import Image from "next/image";

<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={600}
  height={400}
  priority  // For above-fold images
/>
```

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Navbar covers content | Ensure `<main className="pt-20">` in page.tsx |
| Images look blurry | Use `object-cover` and ensure correct aspect ratio |
| Animations don't work | Check "use client" directive at top of component |
| Colors don't match | Run `npm run dev` to rebuild Tailwind cache |
| Mobile menu doesn't close | Verify `onClick={() => setIsOpen(false)}` on links |

---

**Remember: Keep components focused, use Tailwind for styling, and always test on mobile first!**
