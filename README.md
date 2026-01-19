# BackstagePass UI - Machine Test

A pixel-perfect, responsive UI implementation for BackstagePass with support for light and dark modes. This project focuses purely on UI development with attention to visual finesse and responsive design.

## 📋 Project Overview

This project implements a specific page UI for the BackstagePass application based on the provided Figma design. The implementation emphasizes:

- **Pixel-perfect UI** matching the Figma design
- **Full responsiveness** across mobile, tablet, and desktop devices
- **Seamless light/dark mode** support
- **Visual finesse** with smooth animations and transitions
- **No API integrations** - UI development only

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Access to the Figma design (see Requirements section)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rhnmht30/backstage
   cd backstage
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_API_URL=https://testing-india.api.bpasses.com
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
meachinetest/
├── app/
│   ├── layout.tsx          # Root layout with theme provider and layout wrapper
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and CSS variables for themes
├── components/
│   ├── ui/                 # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   ├── feed/               # Feed-related components
│   │   ├── FeedPostCard.tsx    # Reusable feed post card component
│   │   ├── FeedWrapper.tsx     # Wrapper with header
│   │   └── EmptyState.tsx      # Empty state component
│   ├── subscriber/         # Subscriber components
│   │   └── SubscriberPostCard.tsx  # Post card with confetti header
│   ├── layout/             # Layout components
│   │   ├── Header.tsx          # Main application header
│   │   ├── ChallengeHeader.tsx # Challenge-specific header
│   │   ├── Sidebar.tsx         # Desktop sidebar with blur/locked states
│   │   ├── MobileSidebar.tsx   # Mobile sidebar drawer
│   │   └── LayoutWrapper.tsx   # Layout wrapper with context
│   ├── common/             # Common components
│   │   └── ErrorBoundary.tsx   # Error boundary component
│   ├── ThemeProvider.tsx   # Theme provider wrapper
│   └── ThemeToggle.tsx    # Theme toggle button
├── lib/
│   ├── utils.ts           # Utility functions (cn, formatTimestamp)
│   ├── constants.ts        # App constants
│   └── mock-data.ts       # Mock data for demonstration
├── types/
│   └── index.ts            # TypeScript type definitions
├── public/
│   └── images/            # Static images and assets
├── requirement/           # Project requirements and design files
│   ├── Project Brief for UI Development_.pdf
│   └── ❖ BackstagePass - Product Design System.fig
└── README.md              # This file
```

## 🎨 UI Components

### Feed Post Card
Reusable component for displaying feed posts with:
- User avatar and information
- Post content and media
- Interaction buttons (like, comment, share)
- Responsive design with proper spacing

### Wrapper with Header
Container component that wraps feed posts with:
- Sticky header positioning
- Responsive padding and spacing
- Consistent layout structure

### Subscriber Post Card
Special variant featuring:
- Animated confetti header effect
- Green background matching design
- Same interaction features as feed post card

### Sidebar UI
Interactive sidebar component with:
- **Normal state**: Fully interactive with day selection
- **Blur state**: Blurred overlay effect
- **Locked state**: Disabled state with visual indicators
- White indicator that changes when different days are clicked
- Smooth transitions and animations

## 🎯 Key Features

- ✅ **Feed Post Card UI** - Reused from existing codebase
- ✅ **Wrapper with Header** - Built as per Figma design
- ✅ **Subscriber Post Card** - With animated confetti header
- ✅ **Sidebar UI** - With blur and locked states, day selection indicator
- ✅ **Dark Mode Support** - Seamless theme switching using next-themes
- ✅ **Responsive Design** - Fully responsive across all devices
- ✅ **Accessibility** - Keyboard navigation, ARIA labels, focus indicators
- ✅ **Performance Optimized** - React.memo, useCallback, useMemo usage

## 🛠️ Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with CSS variables
- **next-themes** for theme management
- **React 18** with client components
- **Lucide React** for icons

## 🌓 Theme System

The project uses CSS variables for theme management, allowing seamless switching between light and dark modes. Colors are defined in `app/globals.css` using HSL values and can be customized easily.

### Toggling Theme

Use the theme toggle button in the header to switch between light and dark modes. The preference is persisted in localStorage.

## 📱 Responsive Design

The UI is built with a mobile-first approach:

- **Mobile** (< 768px): Single column layout, sidebar hidden, mobile drawer menu
- **Tablet** (768px - 1024px): Optimized spacing and layout
- **Desktop** (> 1024px): Full layout with visible sidebar

## 🔧 Environment Variables

The project uses `.env.local` for environment configuration:

```env
NEXT_PUBLIC_API_URL=https://testing-india.api.bpasses.com
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- This is a **UI-only implementation**. No API integrations are included.
- Mock data is used for demonstration purposes (located in `lib/mock-data.ts`).
- All components are fully typed with TypeScript.
- Animations are optimized for performance using CSS transforms.
- The project follows Next.js App Router best practices.

## 📚 Requirements

For detailed project requirements and design specifications, please refer to:

- **Project Brief**: `requirement/Project Brief for UI Development_.pdf`
- **Figma Design**: `requirement/❖ BackstagePass - Product Design System.fig`

> **Note**: Access to the Figma design requires being added to the project. Please share your GitHub username and Gmail email to be granted access.

## 📄 License

This project is created for interview/machine test purposes.
