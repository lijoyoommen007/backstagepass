"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { FeedPost } from "@/types";
import { cn, formatTimestamp } from "@/lib/utils";

interface FeedPostCardProps {
  post: FeedPost;
  className?: string;
}

/**
 * FeedPostCard Component
 * Displays a feed post with user information, content, media, and interaction buttons
 * Optimized with React.memo to prevent unnecessary re-renders
 */
export const FeedPostCard: React.FC<FeedPostCardProps> = memo(
  ({ post, className }) => {

  return (
    <Card variant="elevated" className={cn("w-full", className)}>
      <CardHeader>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-secondary flex-shrink-0 ring-2 ring-border">
            {post.user.avatar ? (
              post.user.avatar.endsWith('.svg') || post.user.avatar.includes('dicebear') ? (
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={post.user.avatar}
                  alt={post.user.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-semibold text-base sm:text-lg">
                {post.user.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm sm:text-base text-foreground truncate leading-tight">
              {post.user.name}
            </h3>
            {post.user.username && (
              <p className="text-xs sm:text-sm text-muted-foreground truncate leading-tight mt-0.5">
                @{post.user.username}
              </p>
            )}
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap font-medium flex-shrink-0">
            {formatTimestamp(post.timestamp)}
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-foreground whitespace-pre-wrap break-words text-[15px] leading-relaxed">
          {post.content}
        </p>
        
        {post.media && post.media.length > 0 && (
          <div className="overflow-hidden -mx-3 sm:-mx-6 border-y border-light/20">
            <div className="relative w-full aspect-video bg-secondary">
              <Image
                src={post.media[0]}
                alt="Post media"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between gap-2 sm:gap-4 pt-3 px-3 sm:px-4 pb-3 border-t border-light">
          <button
            aria-label={`Like post by ${post.user.name}. ${post.likes || 0} likes`}
            className="inline-flex items-center gap-1 sm:gap-2 h-8 px-2 sm:px-3 text-xs sm:text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span className="font-medium">{post.likes || 0}</span>
          </button>
          
          <button
            aria-label={`Comment on post by ${post.user.name}. ${post.comments || 0} comments`}
            className="inline-flex items-center gap-1 sm:gap-2 h-8 px-2 sm:px-3 text-xs sm:text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span className="font-medium">{post.comments || 0}</span>
          </button>
          
          <button
            aria-label={`Share post by ${post.user.name}. ${post.shares || 0} shares`}
            className="inline-flex items-center gap-1 sm:gap-2 h-8 px-2 sm:px-3 text-xs sm:text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
          >
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span className="font-medium">{post.shares || 0}</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
  },
  (prevProps, nextProps) => {
    // Custom comparison function for better performance
    return (
      prevProps.post.id === nextProps.post.id &&
      prevProps.post.likes === nextProps.post.likes &&
      prevProps.post.comments === nextProps.post.comments &&
      prevProps.post.shares === nextProps.post.shares &&
      prevProps.className === nextProps.className
    );
  }
);

FeedPostCard.displayName = "FeedPostCard";
