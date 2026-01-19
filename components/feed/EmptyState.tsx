"use client";

import React from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

/**
 * Empty state component
 * Displays when there's no content to show
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No posts yet",
  description = "There are no posts for this day. Check back later!",
  icon,
}) => {
  const defaultIcon = (
    <Inbox className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
  );

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        {icon || defaultIcon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
