"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SidebarState, DayOption } from "@/types";

interface SidebarProps {
  days: DayOption[];
  onDaySelect?: (dayId: string) => void;
  selectedDay?: string;
  state?: SidebarState;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  days,
  onDaySelect,
  selectedDay,
  state = "normal",
  className,
}) => {
  return (
    <aside className={cn(
      "w-64 flex-shrink-0 hidden lg:flex flex-col h-[calc(100vh-112px)] sticky top-[112px]",
      // Define CSS variables for instant theme switching
      "[--swallow-color:#fff] dark:[--swallow-color:#000]",
      className
    )}>
      {/* 1. BACKGROUND IMAGES (Rotated 90 degrees) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className={cn(
            "absolute inset-0 bg-center transition-opacity duration-500 ",
            "bg-[url('/images/main_background_light.png')] dark:bg-[url('/images/main_background_dark.png')]"
          )} 
        />
      </div>

      {/* 2. THE BLURRED SKIN */}
      <div className={cn(
        "absolute inset-0 z-10 transition-all duration-300",
        "backdrop-blur-[50px] ",
        // "bg-gradient-to-r from-[rgba(253,252,253,0.3)] to-[#F7F6FC] dark:from-[rgba(20,20,25,0.3)] dark:to-[#141419]"
      )} />

      {/* 3. NAVIGATION */}
      <nav className="relative z-20 flex-1 overflow-x-hidden overflow-y-auto py-10 pl-4">
        <ul className="space-y-1">
          {days.map((day) => {
            const isSelected = selectedDay === day.id;

            return (
              <li key={day.id} className="relative">
                {isSelected && (
                  <>
                    {/* TOP CURVE - Using CSS Variable for instant color sync */}
                    <div className="absolute right-0 -top-[30px] w-[30px] h-[30px] pointer-events-none z-30
                      rounded-br-[25px] shadow-[10px_10px_0_0_var(--swallow-color)] transition-shadow duration-300" 
                    />
                    
                    {/* THE HOLE */}
                    <div className="absolute inset-0 bg-white dark:bg-black rounded-l-[30px] z-20 -mr-[1px] transition-colors duration-300" />

                    {/* BOTTOM CURVE */}
                    <div className="absolute right-0 -bottom-[30px] w-[30px] h-[30px] pointer-events-none z-30
                      rounded-tr-[25px] shadow-[10px_-10px_0_0_var(--swallow-color)] transition-shadow duration-300" 
                    />
                  </>
                )}

                <button
                  onClick={() => onDaySelect?.(day.id)}
                  disabled={state === "locked"}
                  className={cn(
                    "relative w-full text-left px-6 py-4 transition-all duration-300 z-40",
                    "focus:outline-none flex items-center gap-4",
                    isSelected 
                      ? "text-black dark:text-white" 
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-500",
                    isSelected ? "bg-blue-600 scale-125" : "bg-transparent scale-0"
                  )} />
                  
                  <div className="flex flex-col">
                    <span className="font-bold text-sm tracking-tight">{day.label}</span>
                    {day.date && (
                      <span className={cn(
                        "text-[10px] font-semibold uppercase opacity-50",
                        isSelected ? "text-slate-500" : "text-slate-500/50"
                      )}>
                        {day.date}
                      </span>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};