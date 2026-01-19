/**
 * Application constants
 * Centralized location for magic numbers and configuration values
 */

// Confetti Configuration
export const CONFETTI_CONFIG = {
  PARTICLE_COUNT: 50,
  COLORS: [
    "bg-yellow-400",
    "bg-pink-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-red-400",
    "bg-orange-400",
  ],
  MIN_SIZE: 2,
  MAX_SIZE: 5,
  MIN_DURATION: 3,
  MAX_DURATION: 6,
  ANIMATION_DELAY_MULTIPLIER: 0.05,
} as const;

// Layout Constants
export const LAYOUT_CONFIG = {
  SIDEBAR_WIDTH: 256, // w-64 = 256px
  HEADER_HEIGHT: 60,
  SUB_HEADER_HEIGHT: 48,
  TOTAL_HEADER_HEIGHT: 108, // 60 + 48
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 200,
  SLOW: 300,
  VERY_SLOW: 500,
} as const;
