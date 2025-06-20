# PipoX - Technology Consulting Landing Page

A high-performance, SEO-optimized landing page for PipoX Technology Consulting built with Next.js 15, Tailwind CSS, and TypeScript.

## 🚀 Features

- **High SEO Priority**: Comprehensive SEO optimization with structured data, meta tags, and sitemap
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS 4
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **Dark Mode Support**: Complete dark/light mode support
- **Contact Integration**: Direct phone number integration and contact forms

## 🎯 Business Services

- Digital Transformation
- Cloud Migration (AWS, Azure, Google Cloud)
- Custom Software Development
- Cybersecurity Consulting
- Performance Optimization
- Team Augmentation

## 📞 Contact Information

- **Phone**: 093-247-3600
- **Email**: contact@pipox.com
- **Location**: Bangkok, Thailand

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Runtime**: Bun
- **Deployment**: Docker-ready with GitHub Actions CI/CD

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Run the development server:**

   ```bash
   bun run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📈 SEO Optimization Features

### Meta Tags & Open Graph

- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card optimization
- Canonical URLs

### Structured Data (JSON-LD)

- ProfessionalService schema markup
- Organization information
- Service offerings
- Contact details
- Geographic targeting

### Technical SEO

- Dynamic sitemap generation (`/sitemap.xml`)
- Robots.txt optimization (`/robots.txt`)
- Semantic HTML structure
- Fast loading performance
- Mobile-first responsive design

### Content Optimization

- Keyword-rich content for tech consulting
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images
- Internal linking structure

## 🔧 SEO Setup Instructions

### 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://pipox.com)
3. Verify ownership using the verification code
4. Update the verification code in `app/layout.tsx`

### 2. Google Analytics

1. Create a Google Analytics account
2. Add the tracking code to your site
3. Set up goals for contact form submissions and phone calls

### 3. Google My Business

1. Create a Google My Business profile
2. Verify your business location
3. Add your services and contact information

### 4. Schema Markup

The site includes structured data for:

- Business information
- Services offered
- Contact details
- Reviews (ready for implementation)

### 5. Local SEO (Thailand Focus)

- Geo-targeted keywords
- Local business schema
- Thailand-specific content

## 📱 Performance Features

- Next.js App Router for optimal performance
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS
- Bundle optimization with Turbopack
- Server-side rendering (SSR)

## 🔄 Deployment

The project includes Docker configuration and GitHub Actions for automated deployment:

```bash
# Build Docker image
docker build -t pipox-landing .

# Run container
docker run -p 3000:3000 pipox-landing
```

## 📋 Customization

### Update Business Information

1. Edit contact details in `app/page.tsx`
2. Update structured data in `app/components/StructuredData.tsx`
3. Modify metadata in `app/layout.tsx`

### Add New Services

1. Add service cards in the Services section
2. Update structured data schema
3. Add relevant keywords to meta tags

### Customize Styling

- Colors: Update color palette in Tailwind config
- Fonts: Modify font imports in `app/layout.tsx`
- Layout: Adjust spacing and components in `app/page.tsx`

## 📊 Analytics & Tracking

Ready for integration with:

- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- LinkedIn Insight Tag
- Heat mapping tools (Hotjar, Crazy Egg)

## 🔒 Security Features

- Content Security Policy ready
- HTTPS enforcement
- Secure headers configuration
- Input validation for contact forms

## 📞 Lead Generation

- Prominent phone number display
- Multiple call-to-action buttons
- Contact form with business details
- Service-specific landing sections

## 🌐 Internationalization Ready

The codebase is prepared for:

- Multiple language support
- Thai language localization
- Regional content customization

## 📈 Conversion Optimization

- Clear value propositions
- Social proof sections
- Trust indicators
- Mobile-optimized contact forms
- Fast loading speeds

---

Built with ❤️ for PipoX Technology Consulting
