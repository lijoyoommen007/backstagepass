"use client";

import React from "react";
import { Menu, Bell } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
  onMenuClick?: () => void;
  notificationCount?: number;
  userAvatar?: string;
  userAvatarAlt?: string;
}

/**
 * Main application header component
 * Displays logo, navigation menu, notifications, theme toggle, and user avatar
 */
export const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  notificationCount = 30,
  userAvatar = "/images/user-avatar-15e413.png",
  userAvatarAlt = "User Avatar",
}) => {
  return (
    <header className="sticky top-0 z-20 w-full bg-header-bg">
      <div className="w-full px-3 sm:px-4 md:px-6 py-[14px] h-[60px] flex items-center justify-between gap-2">
        {/* Left side: Mobile Menu Button + Logo + Text */}
        <div className="flex items-center gap-3 lg:gap-[9.6px]">
          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-button hover:bg-secondary transition-colors flex-shrink-0"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-text-primary" />
          </button>
          <img
            src="/images/backstagepass-logo.svg"
            alt="BackstagePass Logo"
            className="w-[32.47px] h-6 flex-shrink-0"
          />
          <h1 className="text-[20px] sm:text-[24px] font-bold tracking-tight leading-[1.3] font-sarabun whitespace-nowrap">
            <span className="text-text-primary">Backstage</span>
            <span className="text-publish-button">Pass</span>
          </h1>
        </div>

        {/* Right side: Notification badge, Bell icon, Theme Toggle, Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notification Badge - Hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full bg-notification-bg">
            <img
              src="/images/notification-icon.svg"
              alt="Notifications"
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
            />
            <span className="text-sm sm:text-base font-medium text-text-primary leading-[1.5] font-be-vietnam-pro">
              {notificationCount}
            </span>
          </div>

          {/* Bell Icon Button - Show on mobile instead of badge */}
          <button
            className="sm:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-button hover:bg-secondary transition-colors flex-shrink-0 relative"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 text-text-primary" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>

          {/* Bell Icon Button - Desktop */}
          <button
            className="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg border border-button hover:bg-secondary transition-colors flex-shrink-0"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4 text-text-primary" />
          </button>

          {/* Theme Toggle - Hidden on mobile, shown on desktop */}
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {/* User Avatar */}
          <button
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-2 ring-border hover:ring-primary/50 transition-colors flex-shrink-0"
            aria-label="User menu"
          >
            <img
              src={userAvatar}
              alt={userAvatarAlt}
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
