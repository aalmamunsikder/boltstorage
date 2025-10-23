"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Bell, 
  Menu,
  Upload,
  User,
  Settings,
  Palette,
  LogOut,
  HardDrive,
  Download,
  Share2,
  Trash2,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  CheckCircle,
  AlertCircle,
  Info,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onOpenUpload?: () => void;
}

export default function Header({ searchQuery, onSearchChange, onOpenUpload }: HeaderProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative backdrop-blur-xl bg-white/[0.03] border-b border-white/[0.08]"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05]" />
      
      <div className="relative z-10 px-6 py-4 h-[76px] flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Upload Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenUpload}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white 
              font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl
              hover:from-blue-600 hover:to-emerald-600 flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload
          </motion.button>

          {/* Search Bar */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search files and folders..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/[0.02] border border-white/[0.08] rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50
                transition-all duration-300 placeholder:text-white/30 text-white
                hover:bg-white/[0.04]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 hover:bg-white/[0.05] rounded-xl transition-all duration-300 group relative"
              >
                <Bell className="w-5 h-5 text-white/60 group-hover:text-white/80" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-96 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl shadow-2xl z-[60] max-h-[480px] overflow-hidden"
              sideOffset={8}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05] rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                {/* Notifications Header */}
                <div className="p-4 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-white/80" />
                    <span className="text-white font-semibold">Notifications</span>
                    <div className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs font-medium rounded-full border border-red-500/30">
                      5 new
                    </div>
                  </div>
                  <button className="text-white/60 hover:text-white/80 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Notifications List */}
                <div className="max-h-[320px] overflow-y-auto">
                  {/* Success Notification */}
                  <div className="p-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-white">Upload completed</p>
                            <p className="text-xs text-white/60 mt-1">presentation.pdf uploaded successfully</p>
                          </div>
                          <span className="text-xs text-white/40 whitespace-nowrap">2m ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Share Notification */}
                  <div className="p-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Share2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-white">File shared</p>
                            <p className="text-xs text-white/60 mt-1">Sarah shared 3 files with you</p>
                          </div>
                          <span className="text-xs text-white/40 whitespace-nowrap">15m ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Notification */}
                  <div className="p-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Download className="w-4 h-4 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-white">Download ready</p>
                            <p className="text-xs text-white/60 mt-1">Your archive.zip is ready to download</p>
                          </div>
                          <span className="text-xs text-white/40 whitespace-nowrap">1h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alert Notification */}
                  <div className="p-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-white">Storage warning</p>
                            <p className="text-xs text-white/60 mt-1">You're using 90% of your storage</p>
                          </div>
                          <span className="text-xs text-white/40 whitespace-nowrap">2h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Notification */}
                  <div className="p-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Info className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-white">System update</p>
                            <p className="text-xs text-white/60 mt-1">New features available in your dashboard</p>
                          </div>
                          <span className="text-xs text-white/40 whitespace-nowrap">3h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* File Type Notifications */}
                  <div className="p-4 border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Image className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-medium text-white">New images</p>
                            <p className="text-xs text-white/60 mt-1">12 images added to your gallery</p>
                          </div>
                          <span className="text-xs text-white/40 whitespace-nowrap">5h ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notifications Footer */}
                <div className="p-3 border-t border-white/[0.08]">
                  <button className="w-full text-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    View all notifications
                  </button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 hover:bg-white/[0.05] rounded-xl transition-all duration-300 group"
              >
                <Menu className="w-5 h-5 text-white/60 group-hover:text-white/80" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-80 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl shadow-2xl z-[60]"
              sideOffset={8}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-emerald-500/[0.05] rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                {/* User Profile Section */}
                <div className="p-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center ring-2 ring-white/[0.20] ring-offset-2 ring-offset-transparent">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white/[0.10] flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-lg font-semibold text-white">John Doe</div>
                        <div className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30">
                          Pro
                        </div>
                      </div>
                      <div className="text-sm text-white/60 mb-3">john@example.com</div>
                      
                      {/* Storage Section */}
                      <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.08] rounded-xl p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <HardDrive className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-white/80">Storage</span>
                          </div>
                          <span className="text-xs text-white/60">2 GB / 100 GB</span>
                        </div>
                        <div className="w-full bg-white/[0.10] rounded-full h-1.5">
                          <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-1.5 rounded-full transition-all duration-500" style={{ width: "2%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <DropdownMenuGroup className="p-2">
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-all duration-300 text-white/80 hover:text-white focus:bg-white/[0.05] focus:text-white">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-all duration-300 text-white/80 hover:text-white focus:bg-white/[0.05] focus:text-white">
                    <User className="w-5 h-5" />
                    <span>Manage account</span>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-all duration-300 text-white/80 hover:text-white focus:bg-white/[0.05] focus:text-white">
                    <Palette className="w-5 h-5" />
                    <span>Theme</span>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator className="bg-white/[0.08] my-2" />
                  
                  <DropdownMenuItem className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-white/80 hover:text-red-400 focus:bg-red-500/10 focus:text-red-400">
                    <LogOut className="w-5 h-5" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.div>
  );
}
