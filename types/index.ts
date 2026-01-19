export interface User {
  id: string;
  name: string;
  avatar?: string;
  username?: string;
}

export interface FeedPost {
  id: string;
  user: User;
  content: string;
  media?: string[];
  timestamp: string;
  likes?: number;
  comments?: number;
  shares?: number;
}

export interface SubscriberPost extends FeedPost {
  isSubscriber?: boolean;
  confetti?: boolean;
}

export type SidebarState = "normal" | "blur" | "locked";

export interface DayOption {
  id: string;
  label: string;
  date?: string;
}
