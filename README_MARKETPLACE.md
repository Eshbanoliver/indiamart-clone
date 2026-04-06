# B2B Marketplace Frontend - Architecture & Walkthrough

I have built a premium, modern, and high-conversion B2B Marketplace frontend based on your requirement. Below is the breakdown of the pages and technical decisions made.

## 🎨 Design System
- **Colors**: Corporate Blue (`#004a99`), Deep Slate (`#1c2b3e`), Bright Gold/Accent (`#ff9900`), and Clean White.
- **Micro-animations**: Used `framer-motion` for page entrance effects, hover states on cards, and button transitions.
- **Glassmorphism**: Integrated subtle glass effects in headers and floating UI elements.
- **Responsive**: Fully optimized for Desktop, Tablet, and Mobile with adaptive layouts.

## 📁 Key Pages Built
| Page | Features |
| :--- | :--- |
| **Home Page** | Dynamic Hero with dual-search (Location/Product), Industry Tiles, Trending Product Recommendation Grid, Trust Stats & CTA for Lead Gen. |
| **Category Page** | Filter Sidebar (City, Material, Business Type), Grid/List view toggle, Search-within-results, Premium Supplier Highlights (Sponsored). |
| **Product Detail** | Multi-image gallery with hover-zoom, Technical Specifications table, Sticky Inquiry Form, Similar Product Carousel, and Supplier Snapshot. |
| **Supplier Profile** | Company Heritage/About Us, Trust Indicators (GST Verified, ISO tags), Product Catalog, Headquarters Info, and Direct Contact Sidebar. |
| **Auth Pages** | Corporate styled Login/Signup with role selection (Buyer vs. Seller) and brand storytelling sidebar. |

## ⚙️ Technical Highlights
- **Framework**: Next.js 16 (App Router) with TypeScript.
- **Styling**: Tailwind CSS 4.0 (Latest) utilizing CSS-in-JS design tokens.
- **Component Architecture**: Reusable Atomic components (`Button.tsx`, `Input.tsx`, `Badge.tsx`) in `src/components/ui`.
- **Utils**: `cn` helper for consistent tailwind class merging.
- **Icons**: Professional icon set from `lucide-react`.

## 🚀 How to Run
1. Ensure dependencies are installed: `npm install`
2. Run development server: `npm run dev`
3. Access the site at `http://localhost:3000`

> **Note**: I've optimized all imports and solved major Linter warnings to ensure "Production Ready" code. Backend integration points are prepared in the `InquiryForm` and `SupplierCard` components.
