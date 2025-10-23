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
  const [activePanel, setActivePanel] = useState<'favorites' | 'recent' | 'starred' | 'shared' | 'trash' | 'upload' | 'new-folder'>('favorites');
  const [activeItem, setActiveItem] = useState("Home");

  const handleOpenUpload = () => {
    if (secondarySidebarOpen && activePanel === 'upload') {
      // Close the panel if it's already open
      setSecondarySidebarOpen(false);
    } else {
      // Open the upload panel
      setActivePanel('upload');
      setSecondarySidebarOpen(true);
      setActiveItem("Upload");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05]">
      <DashboardBackground />
      
      <div className="relative z-10 w-full h-screen flex overflow-hidden">
        {/* Main Sidebar */}
          <Sidebar 
            collapsed={false} 
            onToggle={() => {}}
            activeItem={activeItem}
            onOpenSecondary={(panel) => {
              if (secondarySidebarOpen && activePanel === panel) {
                // Close the panel if it's already open
                setSecondarySidebarOpen(false);
              } else {
                // Open the panel or switch to a different panel
                setActivePanel(panel);
                setSecondarySidebarOpen(true);
                // Update active item based on panel
                const panelToItemMap: Record<string, string> = {
                  'recent': 'Recent',
                  'starred': 'Starred',
                  'shared': 'Shared',
                  'favorites': 'Favorites',
                  'trash': 'Trash'
                };
                setActiveItem(panelToItemMap[panel]);
              }
            }}
          />

        {/* Secondary Sidebar */}
        <SecondarySidebar 
          isOpen={secondarySidebarOpen}
          onClose={() => setSecondarySidebarOpen(false)}
          activePanel={activePanel}
          onOpenNewFolder={() => {
            if (secondarySidebarOpen && activePanel === 'new-folder') {
              // Close the panel if it's already open
              setSecondarySidebarOpen(false);
            } else {
              // Open the new folder panel
              setActivePanel('new-folder');
              setSecondarySidebarOpen(true);
              setActiveItem("New Folder");
            }
          }}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onOpenUpload={handleOpenUpload}
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
