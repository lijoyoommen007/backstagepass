"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FeedWrapperProps {
  children: React.ReactNode;
  currentDay?: number;
  totalDays?: number;
  challengeTitle?: string;
  onBack?: () => void;
  className?: string;
}

export const FeedWrapper: React.FC<FeedWrapperProps> = ({
  children,
  // currentDay = 1,
  // totalDays = 9,
  // challengeTitle = "9-Day Fitness Challenge",
  // onBack,
  className,
}) => {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      {/* Feed Content - Constrained to max width */}
      <main className="w-full max-w-full lg:max-w-[75%] mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
};
