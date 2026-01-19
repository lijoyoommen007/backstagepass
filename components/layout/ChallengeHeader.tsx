"use client";

import React from "react";
import { Info, MoreVertical, ChevronLeft } from "lucide-react";

interface ChallengeHeaderProps {
  challengeTitle?: string;
  onBack?: () => void;
  onPublish?: () => void;
  onMoreOptions?: () => void;
  onInfoClick?: () => void;
}

/**
 * Challenge header component
 * Displays back button, challenge title, publish button, and more options
 */
export const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({
  challengeTitle = "9-Day Fitness Challenge",
  onBack,
  onPublish,
  onMoreOptions,
  onInfoClick,
}) => {
  return (
    <div className="sticky top-[60px] z-10 w-full bg-header-sub-bg border-b border-subtle">
      <div className="w-full pl-3 sm:pl-[18px] pr-3 sm:pr-6 py-0 h-12 flex items-center justify-between gap-2">
        {/* Left side: Back button, Challenge title with info icon */}
        <div className="flex items-center gap-2 sm:gap-4 h-full min-w-0 flex-1">
          <button
            onClick={onBack}
            className="flex items-center justify-center gap-1 sm:gap-2 h-full px-0 text-sm sm:text-base font-semibold text-text-primary hover:opacity-80 transition-opacity font-be-vietnam-pro leading-[1.5] flex-shrink-0"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
            <span className="text-sm sm:text-base font-semibold text-text-primary font-be-vietnam-pro leading-[1.5] truncate">
              {challengeTitle}
            </span>
            <button
              onClick={onInfoClick}
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-text-primary hover:opacity-80 transition-opacity flex items-center justify-center"
              aria-label="Challenge information"
            >
              <Info className="w-full h-full" />
            </button>
          </div>
        </div>

        {/* Right side: Publish button and kebab menu */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={onPublish}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-3xl bg-publish-button text-white font-semibold text-sm sm:text-base font-be-vietnam-pro leading-[1.5] hover:opacity-90 transition-opacity whitespace-nowrap"
            aria-label="Publish challenge"
          >
            Publish
          </button>
          <button
            onClick={onMoreOptions}
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-button hover:bg-secondary transition-colors text-text-primary"
            aria-label="More options"
          >
            <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
