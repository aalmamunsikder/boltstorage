"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/components/dashboard/sidebar";
import SecondarySidebar from "@/components/dashboard/secondary-sidebar";
import Header from "@/components/dashboard/header";
import FileManager from "@/components/dashboard/file-manager";
import DashboardBackground from "@/components/dashboard/dashboard-background";

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [secondarySidebarOpen, setSecondarySidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05]">
      <DashboardBackground />
      
      <div className="relative z-10 w-full h-screen flex overflow-hidden">
        {/* Main Sidebar */}
          <Sidebar 
            collapsed={false} 
            onToggle={() => {}}
            onOpenSecondary={() => setSecondarySidebarOpen(!secondarySidebarOpen)}
          />

        {/* Secondary Sidebar */}
        <SecondarySidebar 
          isOpen={secondarySidebarOpen}
          onClose={() => setSecondarySidebarOpen(false)}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* File Manager */}
          <FileManager 
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
}
