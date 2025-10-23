"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/logo";
import { 
  Home, 
  Clock, 
  Star, 
  Share2, 
  Trash2, 
  ChevronRight,
  Image,
  FileText,
  Video,
  Music,
  Archive,
  User,
  MoreHorizontal
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", hoverColor: 'hover:bg-gray-500/10 hover:text-white hover:border-gray-500/30' },
  { icon: Clock, label: "Recent", panel: 'recent' as const, hoverColor: 'hover:bg-blue-500/10 hover:text-white hover:border-blue-500/30' },
  { icon: Star, label: "Starred", panel: 'starred' as const, hoverColor: 'hover:bg-purple-500/10 hover:text-white hover:border-purple-500/30' },
  { icon: Share2, label: "Shared", panel: 'shared' as const, hoverColor: 'hover:bg-emerald-500/10 hover:text-white hover:border-emerald-500/30' },
  { icon: Star, label: "Favorites", panel: 'favorites' as const, isFavorite: true, hoverColor: 'hover:bg-yellow-500/10 hover:text-white hover:border-yellow-500/30' },
  { icon: Trash2, label: "Trash", panel: 'trash' as const, hoverColor: 'hover:bg-red-500/10 hover:text-white hover:border-red-500/30' },
];

const storageItems = [
  { icon: Image, label: "Images", size: "2.4 GB", color: "text-emerald-400" },
  { icon: FileText, label: "Documents", size: "1.8 GB", color: "text-blue-400" },
  { icon: Video, label: "Videos", size: "8.2 GB", color: "text-purple-400" },
  { icon: Music, label: "Audio", size: "456 MB", color: "text-orange-400" },
  { icon: Archive, label: "Archives", size: "1.2 GB", color: "text-gray-400" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onOpenSecondary: (panel: 'favorites' | 'recent' | 'starred' | 'shared' | 'trash') => void;
  activeItem: string;
}

export default function Sidebar({ collapsed, onToggle, onOpenSecondary, activeItem }: SidebarProps) {
  return (
    <div className="w-[280px] relative backdrop-blur-xl bg-white/[0.03] border-r border-white/[0.08] flex flex-col h-full">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05]" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Logo */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center h-[76px]">
          <Link href="/">
            <Logo size="sm" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => item.panel ? onOpenSecondary(item.panel) : undefined}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300",
                  activeItem === item.label
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : item.panel
                    ? `text-white/80 ${item.hoverColor}`
                    : "text-white/60 hover:bg-white/[0.05] hover:text-white hover:border-white/[0.10]"
                )}
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && <span>{item.label}</span>}
              </button>
            ))}
          </div>


          {!collapsed && (
            <div className="mt-8">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Storage</h3>
              <div className="space-y-3">
                {storageItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <item.icon className={cn("w-4 h-4", item.color)} />
                      <span className="text-sm text-white/60">{item.label}</span>
                    </div>
                    <span className="text-xs text-white/40">{item.size}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Storage Bar */}
        <div className="p-4 border-t border-white/[0.08]">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-white/60">Storage used</span>
            <span className="text-white/60">14.1 GB / 100 GB</span>
          </div>
          <div className="w-full bg-white/[0.10] rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{ width: "14.1%" }} />
          </div>
        </div>

        {/* User Menu - At Bottom */}
        <div className="mt-auto p-4 border-t border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">John Doe</div>
              <div className="text-xs text-white/40">john@example.com</div>
            </div>
            <button className="p-1 hover:bg-white/[0.10] rounded-lg transition-colors">
              <MoreHorizontal className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
