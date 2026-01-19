"use client";

import React, { useMemo } from "react";
import { FeedWrapper } from "@/components/feed/FeedWrapper";
import { FeedPostCard } from "@/components/feed/FeedPostCard";
import { SubscriberPostCard } from "@/components/subscriber/SubscriberPostCard";
import { EmptyState } from "@/components/feed/EmptyState";
import { useLayoutContext } from "@/components/layout/LayoutWrapper";
import {
  mockFeedPostsByDay,
  mockSubscriberPost,
} from "@/lib/mock-data";

export default function Home() {
  // Get selectedDay from layout context
  const { selectedDay } = useLayoutContext();

  // Get posts for the selected day - memoized to prevent recalculation
  const currentFeedPosts = useMemo(
    () => mockFeedPostsByDay[selectedDay] || [],
    [selectedDay]
  );

  return (
    <>
      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <FeedWrapper>
          {/* Subscriber Post with Confetti - Show only for today */}
          {selectedDay === "day-1" && (
            <SubscriberPostCard post={mockSubscriberPost} />
          )}

          {/* Regular Feed Posts for selected day */}
          {currentFeedPosts.length > 0 ? (
            currentFeedPosts.map((post) => (
              <FeedPostCard key={post.id} post={post} />
            ))
          ) : (
            <EmptyState />
          )}
        </FeedWrapper>
      </div>
    </>
  );
}
