import { FeedPost, SubscriberPost, DayOption } from "@/types";

/**
 * Mock data for demonstration purposes
 * In a real application, this would be fetched from an API
 */

export const mockDays: DayOption[] = [
  { id: "day-1", label: "Day - 1" },
  { id: "day-2", label: "Day - 2" },
  { id: "day-3", label: "Day - 3" },
  { id: "day-4", label: "Day - 4" },
  { id: "day-5", label: "Day - 5" },
  { id: "day-6", label: "Day - 6" },
  { id: "day-7", label: "Day - 7" },
  { id: "day-8", label: "Day - 8" },
  { id: "day-9", label: "Day - 9" },
];

/**
 * Mock posts organized by day
 */
export const mockFeedPostsByDay: Record<string, FeedPost[]> = {
  "day-1": [
    {
      id: "1",
      user: {
        id: "user-1",
        name: "John Doe",
        username: "johndoe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      content:
        "Just finished Day 1 of the fitness challenge! The workout was intense but rewarding. Can't wait for tomorrow! 🎯",
      media: [
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&h=600&fit=crop",
      ],
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      likes: 42,
      comments: 12,
      shares: 5,
    },
    {
      id: "2",
      user: {
        id: "user-2",
        name: "Jane Smith",
        username: "janesmith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      },
      content:
        "This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.",
      media: [
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      ],
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      likes: 89,
      comments: 23,
      shares: 18,
    },
  ],
  "day-2": [
    {
      id: "3",
      user: {
        id: "user-4",
        name: "Sarah Wilson",
        username: "sarahw",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      content:
        "Completed today's challenge workout, one step closer to my goal. 🏋️‍♀️",
      media: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      ],
      timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
      likes: 67,
      comments: 8,
      shares: 3,
    },
  ],
  "day-3": [
    {
      id: "4",
      user: {
        id: "user-5",
        name: "Mike Chen",
        username: "mikec",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      },
      content:
        "Taking part in the workout challenge and staying consistent. Day 3 done! 💯",
      media: [
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
      ],
      timestamp: new Date(Date.now() - 50 * 60 * 60 * 1000).toISOString(),
      likes: 124,
      comments: 31,
      shares: 12,
    },
  ],
  "day-4": [
    {
      id: "5",
      user: {
        id: "user-6",
        name: "Emily Davis",
        username: "emilyd",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      },
      content:
        "Feeling the burn! This challenge is pushing me to new limits. 🔥",
      media: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      ],
      timestamp: new Date(Date.now() - 74 * 60 * 60 * 1000).toISOString(),
      likes: 203,
      comments: 56,
      shares: 28,
    },
  ],
  "day-5": [],
  "day-6": [],
};

/**
 * Mock subscriber post with confetti header
 */
export const mockSubscriberPost: SubscriberPost = {
  id: "sub-1",
  user: {
    id: "user-3",
    name: "Alex Johnson",
    username: "alexj",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  content:
    "Today's challenge workout completed—feeling stronger already! 💪",
  media: [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
  ],
  timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  likes: 156,
  comments: 45,
  shares: 32,
  isSubscriber: true,
  confetti: true,
};
