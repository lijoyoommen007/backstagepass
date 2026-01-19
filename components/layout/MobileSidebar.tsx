"use client";

import React from "react";
import { X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SidebarState, DayOption } from "@/types";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  days: DayOption[];
  selectedDay?: string;
  onDaySelect: (dayId: string) => void;
  sidebarState?: SidebarState;
}

/**
 * Mobile sidebar drawer component
 * Displays day navigation on mobile devices
 */
export const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  days,
  selectedDay,
  onDaySelect,
  sidebarState = "normal",
}) => {
  if (!isOpen) return null;

  const handleDayClick = (dayId: string) => {
    onDaySelect(dayId);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Drawer */}
      <div className="fixed inset-y-0 left-0 w-64 z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        <div className="h-full bg-header-bg border-r border-light/20 relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/sidebar-background.png')",
            }}
          />

          {/* Light mode overlay gradient */}
          <div
            className="absolute inset-0 backdrop-blur-[50px] dark:hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(253, 252, 253, 0.3) 0%, rgba(247, 246, 252, 1) 100%)",
            }}
          />

          {/* Dark mode overlay gradient */}
          <div
            className="absolute inset-0 backdrop-blur-[50px] hidden dark:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(20, 20, 25, 0.3) 0%, rgba(40, 40, 45, 1) 100%)",
            }}
          />

          {/* Mobile Sidebar Header */}
          <div className="relative z-10 px-5 py-4 border-b border-light/20 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Menu</h2>
            <div className="flex items-center gap-3">
              {/* Theme Toggle - Mobile only */}
              <div className="sm:hidden">
                <ThemeToggle />
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Mobile Sidebar Content */}
          <div className="relative z-10 flex-1 overflow-y-auto pl-3 pr-0 py-3 h-[calc(100vh-112px)]">
            <ul className="space-y-1">
              {days.map((day) => {
                const isSelected = selectedDay === day.id;

                return (
                  <li key={day.id}>
                    <button
                      onClick={() => handleDayClick(day.id)}
                      disabled={sidebarState === "locked"}
                      aria-current={isSelected ? "page" : undefined}
                      className={cn(
                        "relative w-full text-left px-3 py-2.5 transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-primary/50",
                        "disabled:cursor-not-allowed group",
                        isSelected
                          ? [
                              "bg-white dark:bg-black",
                              "backdrop-blur-sm",
                              "shadow-lg shadow-black/5 dark:shadow-black/20",
                              "border border-light/50",
                              "text-foreground",
                              "rounded-l-3xl rounded-r-none",
                              "-mr-3",
                              "border-r-0",
                            ]
                          : [
                              "rounded-3xl rounded-r-none",
                              "text-muted-foreground",
                              "hover:bg-secondary",
                              "hover:text-foreground",
                            ]
                      )}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          {/* Left indicator */}
                          <div className="relative w-2 flex-shrink-0">
                            {isSelected && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground shadow-sm" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">
                              {day.label}
                            </div>
                          </div>
                        </div>

                            {!isSelected && (
                              <ChevronRight
                                className="w-4 h-4 flex-shrink-0 transition-colors text-muted-foreground group-hover:text-foreground"
                                aria-hidden="true"
                              />
                            )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
