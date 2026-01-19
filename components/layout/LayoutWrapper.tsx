"use client";

import React, { useState, createContext, useContext } from "react";
import { Header } from "@/components/layout/Header";
import { ChallengeHeader } from "@/components/layout/ChallengeHeader";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { SidebarState, DayOption } from "@/types";
import { mockDays } from "@/lib/mock-data";

interface LayoutContextType {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
  sidebarState: SidebarState;
  challengeTitle?: string;
  setChallengeTitle?: (title: string) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within LayoutWrapper");
  }
  return context;
};

interface LayoutWrapperProps {
  children: React.ReactNode;
  initialSelectedDay?: string;
  challengeTitle?: string;
}

/**
 * Layout wrapper component that manages Header, Sidebar, and MobileSidebar
 * Provides context for page components to access layout state
 */
export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  initialSelectedDay = "day-1",
  challengeTitle = "9-Day Fitness Challenge",
}) => {
  const [selectedDay, setSelectedDay] = useState<string>(initialSelectedDay);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [sidebarState] = useState<SidebarState>("normal");
  const [currentChallengeTitle, setCurrentChallengeTitle] = useState<string>(challengeTitle);

  const handleDaySelect = (dayId: string) => {
    setSelectedDay(dayId);
    // In a real app, this would trigger data fetching in the page component
  };

  // Challenge header handlers - defined within the client component
  const handleChallengeBack = () => {
    // Handle back navigation
    // In a real app, this would navigate to the previous page
  };

  const handleChallengePublish = () => {
    // Handle publish action
  };

  const handleChallengeMoreOptions = () => {
    // Handle more options
  };

  const handleChallengeInfoClick = () => {
    // Handle info click
  };

  return (
    <LayoutContext.Provider
      value={{
        selectedDay,
        setSelectedDay: handleDaySelect,
        mobileSidebarOpen,
        setMobileSidebarOpen,
        sidebarState,
        challengeTitle: currentChallengeTitle,
        setChallengeTitle: setCurrentChallengeTitle,
      }}
    >
      <div className="min-h-screen flex flex-col relative bg-app-bg">
        {/* Background overlay for glass effect */}
        <div className="fixed inset-0 -z-10" />

        {/* Top Bar - Full width header */}
        <Header onMenuClick={() => setMobileSidebarOpen(true)} />

        {/* Challenge Header - Below main header */}
        <ChallengeHeader
          challengeTitle={currentChallengeTitle}
          onBack={handleChallengeBack}
          onPublish={handleChallengePublish}
          onMoreOptions={handleChallengeMoreOptions}
          onInfoClick={handleChallengeInfoClick}
        />

        {/* Content Area - Sidebar and Main Content */}
        <div className="flex-1 flex min-w-0">
          {/* Sidebar - Static, doesn't scroll */}
          <div className="flex-shrink-0 relative">
            <Sidebar
              days={mockDays}
              onDaySelect={handleDaySelect}
              selectedDay={selectedDay}
              state={sidebarState}
            />
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {children}
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        <MobileSidebar
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
          days={mockDays}
          selectedDay={selectedDay}
          onDaySelect={handleDaySelect}
          sidebarState={sidebarState}
        />
      </div>
    </LayoutContext.Provider>
  );
};
