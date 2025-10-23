"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Star,
  Clock,
  Share2,
  Trash2,
  ChevronRight,
  ChevronDown,
  Image,
  FileText,
  Video,
  Music,
  Archive,
  Folder,
  Plus,
  Users,
  Calendar,
  HardDrive,
  Upload,
  Cloud,
  Box,
  Github
} from "lucide-react";

// Mock data for different panels
const mockFavoriteItems = [
  { id: 1, name: "Project Presentation.pptx", type: "presentation", icon: FileText, color: "text-orange-400" },
  { id: 2, name: "Team Photo.jpg", type: "image", icon: Image, color: "text-blue-400" },
  { id: 3, name: "Documents", type: "folder", icon: Folder, color: "text-emerald-400" },
];

const mockRecentItems = [
  { id: 1, name: "Budget 2024.xlsx", type: "spreadsheet", modified: "2 hours ago", icon: FileText, color: "text-emerald-400" },
  { id: 2, name: "Meeting Recording.mp4", type: "video", modified: "5 hours ago", icon: Video, color: "text-purple-400" },
  { id: 3, name: "Design Assets.zip", type: "archive", modified: "1 day ago", icon: Archive, color: "text-gray-400" },
  { id: 4, name: "Contract Draft.pdf", type: "pdf", modified: "2 days ago", icon: FileText, color: "text-red-400" },
];

const mockStarredItems = [
  { id: 1, name: "Important Document.pdf", type: "pdf", starred: true, icon: FileText, color: "text-red-400" },
  { id: 2, name: "Q3 Report.xlsx", type: "spreadsheet", starred: true, icon: FileText, color: "text-emerald-400" },
  { id: 3, name: "Company Logo.png", type: "image", starred: true, icon: Image, color: "text-blue-400" },
];

const mockSharedItems = [
  { id: 1, name: "Marketing Materials", type: "folder", shared: true, sharedWith: "team@company.com", icon: Folder, color: "text-emerald-400" },
  { id: 2, name: "Product Roadmap.pdf", type: "pdf", shared: true, sharedWith: "john@example.com", icon: FileText, color: "text-red-400" },
  { id: 3, name: "Demo Video.mp4", type: "video", shared: true, sharedWith: "clients@partner.com", icon: Video, color: "text-purple-400" },
];

const mockTrashItems = [
  { id: 1, name: "Old Presentation.pptx", type: "presentation", deleted: "3 days ago", icon: FileText, color: "text-orange-400" },
  { id: 2, name: "Temp Files", type: "folder", deleted: "1 week ago", icon: Folder, color: "text-emerald-400" },
  { id: 3, name: "Backup.zip", type: "archive", deleted: "2 weeks ago", icon: Archive, color: "text-gray-400" },
];

function getFileIcon(type: string) {
  switch (type) {
    case "presentation": return <FileText className="w-4 h-4 text-orange-400" />;
    case "spreadsheet": return <FileText className="w-4 h-4 text-emerald-400" />;
    case "image": return <Image className="w-4 h-4 text-blue-400" />;
    case "video": return <Video className="w-4 h-4 text-purple-400" />;
    case "pdf": return <FileText className="w-4 h-4 text-red-400" />;
    case "archive": return <Archive className="w-4 h-4 text-gray-400" />;
    case "folder": return <Folder className="w-4 h-4 text-emerald-400" />;
    default: return <FileText className="w-4 h-4 text-gray-400" />;
  }
}

interface SecondarySidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activePanel: 'favorites' | 'recent' | 'starred' | 'shared' | 'trash' | 'upload' | 'new-folder';
  onOpenNewFolder?: () => void;
}

export default function SecondarySidebar({ isOpen, onClose, activePanel, onOpenNewFolder }: SecondarySidebarProps) {
  const [expanded, setExpanded] = useState(true);

  const getPanelData = () => {
    switch (activePanel) {
      case 'favorites':
        return {
          title: 'Favorites',
          icon: Star,
          color: 'text-yellow-400',
          gradient: 'from-yellow-500/[0.05] via-transparent to-orange-500/[0.05]',
          items: mockFavoriteItems,
          showDropZone: true
        };
      case 'recent':
        return {
          title: 'Recent',
          icon: Clock,
          color: 'text-blue-400',
          gradient: 'from-blue-500/[0.05] via-transparent to-cyan-500/[0.05]',
          items: mockRecentItems,
          showDropZone: false
        };
      case 'starred':
        return {
          title: 'Starred',
          icon: Star,
          color: 'text-purple-400',
          gradient: 'from-purple-500/[0.05] via-transparent to-pink-500/[0.05]',
          items: mockStarredItems,
          showDropZone: false
        };
      case 'shared':
        return {
          title: 'Shared',
          icon: Share2,
          color: 'text-emerald-400',
          gradient: 'from-emerald-500/[0.05] via-transparent to-teal-500/[0.05]',
          items: mockSharedItems,
          showDropZone: false
        };
      case 'trash':
        return {
          title: 'Trash',
          icon: Trash2,
          color: 'text-red-400',
          gradient: 'from-red-500/[0.05] via-transparent to-orange-500/[0.05]',
          items: mockTrashItems,
          showDropZone: false
        };
      case 'upload':
        return {
          title: 'Upload & Import',
          icon: Upload,
          color: 'text-blue-400',
          gradient: 'from-blue-500/[0.05] via-transparent to-emerald-500/[0.05]',
          items: [],
          showDropZone: false
        };
      case 'new-folder':
        return {
          title: 'New Folder',
          icon: Folder,
          color: 'text-emerald-400',
          gradient: 'from-emerald-500/[0.05] via-transparent to-teal-500/[0.05]',
          items: [],
          showDropZone: false
        };
      default:
        return {
          title: 'Favorites',
          icon: Star,
          color: 'text-yellow-400',
          gradient: 'from-yellow-500/[0.05] via-transparent to-orange-500/[0.05]',
          items: mockFavoriteItems,
          showDropZone: true
        };
    }
  };

  const panelData = getPanelData();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ 
        width: isOpen ? 280 : 0, 
        opacity: isOpen ? 1 : 0,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      className="relative backdrop-blur-xl bg-white/[0.03] border-r border-white/[0.08] flex flex-col transition-all duration-300 h-full overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${panelData.gradient}`} />
      
      {isOpen && (
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between h-[76px]">
            <div className="flex items-center gap-3">
              <panelData.icon className={cn("w-4 h-4", panelData.color)} />
              <h3 className="text-sm font-semibold text-white">{panelData.title}</h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onOpenNewFolder}
              className="p-3 hover:bg-white/[0.10] rounded-xl transition-colors"
            >
              <Plus className="w-4 h-4 text-emerald-400" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Expand/Collapse Toggle */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-between mb-4 p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
            >
              <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                {activePanel === 'favorites' ? 'Quick Access' : 'Items'}
              </span>
              {expanded ? (
                <ChevronDown className="w-3 h-3 text-white/40" />
              ) : (
                <ChevronRight className="w-3 h-3 text-white/40" />
              )}
            </button>

            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {/* Upload Panel Content */}
                {activePanel === 'upload' ? (
                  <div className="space-y-4">
                    {/* File Upload Area */}
                    <div className="border-2 border-dashed rounded-xl p-6 border-white/[0.10] hover:border-white/[0.20] transition-all duration-300 cursor-pointer">
                      <div className="flex flex-col items-center justify-center gap-3 text-center">
                        <Upload className="w-8 h-8 text-blue-400" />
                        <div>
                          <p className="text-sm font-medium text-white">Upload files</p>
                          <p className="text-xs text-white/40">Drag & drop or click to browse</p>
                        </div>
                        <button className="px-4 py-2 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                          Choose Files
                        </button>
                      </div>
                    </div>

                    {/* Cloud Storage Options */}
                    <div>
                      <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Import from Cloud</h4>
                      <div className="space-y-2">
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300 group">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <Cloud className="w-4 h-4 text-blue-400" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm text-white/80">Google Drive</div>
                            <div className="text-xs text-white/40">Import files from Drive</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/60" />
                        </button>

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300 group">
                          <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                            <Cloud className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm text-white/80">Dropbox</div>
                            <div className="text-xs text-white/40">Import files from Dropbox</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/60" />
                        </button>

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300 group">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <Cloud className="w-4 h-4 text-purple-400" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm text-white/80">OneDrive</div>
                            <div className="text-xs text-white/40">Import files from OneDrive</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/60" />
                        </button>

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300 group">
                          <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                            <Box className="w-4 h-4 text-orange-400" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm text-white/80">Box</div>
                            <div className="text-xs text-white/40">Import files from Box</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/60" />
                        </button>

                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300 group">
                          <div className="w-8 h-8 bg-gray-500/20 rounded-lg flex items-center justify-center">
                            <Github className="w-4 h-4 text-gray-400" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-sm text-white/80">GitHub</div>
                            <div className="text-xs text-white/40">Import repositories</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/60" />
                        </button>
                      </div>
                    </div>

                    {/* Upload Settings */}
                    <div>
                      <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Upload Settings</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/60">Auto-organize files</span>
                          <div className="w-10 h-5 bg-blue-500/30 rounded-full relative">
                            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform transform translate-x-5"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/60">Create folders by date</span>
                          <div className="w-10 h-5 bg-white/10 rounded-full relative">
                            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white/60 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/60">Convert to web format</span>
                          <div className="w-10 h-5 bg-white/10 rounded-full relative">
                            <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white/60 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : activePanel === 'new-folder' ? (
                  <div className="space-y-4">
                    {/* Folder Creation Form */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 block">Folder Name</label>
                        <input
                          type="text"
                          placeholder="Enter folder name..."
                          className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.08] rounded-lg 
                            focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50
                            transition-all duration-300 placeholder:text-white/30 text-white
                            hover:bg-white/[0.04]"
                        />
                      </div>

                      {/* Folder Color Selection */}
                      <div>
                        <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 block">Folder Color</label>
                        <div className="grid grid-cols-5 gap-2">
                          {[
                            { color: 'bg-blue-500', name: 'Blue' },
                            { color: 'bg-emerald-500', name: 'Green' },
                            { color: 'bg-purple-500', name: 'Purple' },
                            { color: 'bg-orange-500', name: 'Orange' },
                            { color: 'bg-red-500', name: 'Red' },
                            { color: 'bg-pink-500', name: 'Pink' },
                            { color: 'bg-yellow-500', name: 'Yellow' },
                            { color: 'bg-indigo-500', name: 'Indigo' },
                            { color: 'bg-gray-500', name: 'Gray' },
                            { color: 'bg-slate-500', name: 'Slate' }
                          ].map((colorOption, index) => (
                            <button
                              key={index}
                              className={`w-8 h-8 rounded-lg ${colorOption.color} hover:scale-110 transition-transform`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Folder Location */}
                      <div>
                        <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 block">Location</label>
                        <select className="w-full px-3 py-2 bg-white/[0.02] border border-white/[0.08] rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50
                          transition-all duration-300 text-white/80 hover:bg-white/[0.04]">
                          <option value="/">Root</option>
                          <option value="/documents">Documents</option>
                          <option value="/projects">Projects</option>
                          <option value="/media">Media</option>
                        </select>
                      </div>

                      {/* Folder Privacy */}
                      <div>
                        <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 block">Privacy</label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer">
                            <input type="radio" name="privacy" value="private" defaultChecked className="text-emerald-400" />
                            <span>Private - Only you can access</span>
                          </label>
                          <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer">
                            <input type="radio" name="privacy" value="shared" className="text-emerald-400" />
                            <span>Shared - Anyone with link can access</span>
                          </label>
                          <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer">
                            <input type="radio" name="privacy" value="team" className="text-emerald-400" />
                            <span>Team - Only team members can access</span>
                          </label>
                        </div>
                      </div>

                      {/* Advanced Options */}
                      <div>
                        <label className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 block">Advanced Options</label>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/60">Enable version history</span>
                            <div className="w-10 h-5 bg-emerald-500/30 rounded-full relative">
                              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform transform translate-x-5"></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/60">Auto-backup folder</span>
                            <div className="w-10 h-5 bg-emerald-500/30 rounded-full relative">
                              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform transform translate-x-5"></div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-white/60">Encrypt contents</span>
                            <div className="w-10 h-5 bg-white/10 rounded-full relative">
                              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white/60 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <button className="flex-1 px-4 py-2 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-lg border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors">
                          Create Folder
                        </button>
                        <button className="px-4 py-2 bg-white/[0.10] text-white/60 text-xs font-medium rounded-lg border border-white/[0.20] hover:bg-white/[0.15] transition-colors">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Drop Zone for Favorites */}
                    {panelData.showDropZone && (
                      <div className="border-2 border-dashed rounded-xl p-4 mb-4 border-white/[0.10] hover:border-white/[0.20] transition-all duration-300">
                        <div className="flex flex-col items-center justify-center gap-2 text-center">
                          <Plus className="w-4 h-4 text-white/40" />
                          <span className="text-xs text-white/40">Drag files & folders here</span>
                          <span className="text-xs text-white/20">Add to favorites</span>
                        </div>
                      </div>
                    )}

                    {/* Panel Items */}
                    {panelData.items.map((item: any) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          {getFileIcon(item.type)}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-white/80 truncate">{item.name}</div>
                            <div className="text-xs text-white/40">
                              {activePanel === 'recent' && item.modified}
                              {activePanel === 'shared' && `Shared with ${item.sharedWith}`}
                              {activePanel === 'trash' && `Deleted ${item.deleted}`}
                              {(activePanel === 'favorites' || activePanel === 'starred') && item.type}
                            </div>
                          </div>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/[0.10] rounded transition-all duration-300">
                          <Plus className="w-3 h-3 text-white/40 rotate-45" />
                        </button>
                      </motion.div>
                    ))}

                    {panelData.items.length === 0 && (
                      <div className="text-center py-8">
                        <panelData.icon className={cn("w-8 h-8 text-white/20 mx-auto mb-3")} />
                        <p className="text-xs text-white/30 mb-1">No {activePanel} items</p>
                        <p className="text-xs text-white/20">
                          {activePanel === 'favorites' && 'Drag files here to add quick access'}
                          {activePanel === 'recent' && 'Your recently accessed files will appear here'}
                          {activePanel === 'starred' && 'Star important files to find them quickly'}
                          {activePanel === 'shared' && 'Files you share with others will appear here'}
                          {activePanel === 'trash' && 'Deleted items will appear here'}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            )}

            {/* Panel-specific additional info */}
            <div className="mt-8">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                {activePanel === 'shared' ? 'Sharing Activity' : 'Statistics'}
              </h4>
              <div className="space-y-2">
                {activePanel === 'shared' && (
                  <>
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-xs text-white/60">Shared with 3 people</div>
                      <div className="text-xs text-white/30">Today</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-xs text-white/60">Viewed 5 times</div>
                      <div className="text-xs text-white/30">Yesterday</div>
                    </div>
                  </>
                )}
                {activePanel === 'trash' && (
                  <>
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-xs text-white/60">3 items in trash</div>
                      <div className="text-xs text-white/30">Auto-delete in 27 days</div>
                    </div>
                  </>
                )}
                {(activePanel === 'recent' || activePanel === 'starred' || activePanel === 'favorites') && (
                  <>
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-xs text-white/60">{panelData.items.length} items</div>
                      <div className="text-xs text-white/30">Last updated today</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Storage Info */}
          <div className="p-4 border-t border-white/[0.08]">
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/60">{panelData.title} Storage</span>
                <span className="text-white/60">
                  {activePanel === 'favorites' && '2.1 GB'}
                  {activePanel === 'recent' && '4.8 GB'}
                  {activePanel === 'starred' && '1.2 GB'}
                  {activePanel === 'shared' && '3.5 GB'}
                  {activePanel === 'trash' && '856 MB'}
                </span>
              </div>
              <div className="w-full bg-white/[0.10] rounded-full h-1.5">
                <div 
                  className={cn(
                    "h-1.5 rounded-full",
                    activePanel === 'favorites' && "bg-gradient-to-r from-yellow-500 to-orange-500",
                    activePanel === 'recent' && "bg-gradient-to-r from-blue-500 to-cyan-500",
                    activePanel === 'starred' && "bg-gradient-to-r from-purple-500 to-pink-500",
                    activePanel === 'shared' && "bg-gradient-to-r from-emerald-500 to-teal-500",
                    activePanel === 'trash' && "bg-gradient-to-r from-red-500 to-orange-500"
                  )} 
                  style={{ 
                    width: activePanel === 'favorites' ? "21%" : 
                           activePanel === 'recent' ? "48%" :
                           activePanel === 'starred' ? "12%" :
                           activePanel === 'shared' ? "35%" : "8%"
                  }} 
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-white/40">Quick access to</div>
              <div className="text-sm font-semibold text-white">{panelData.items.length} items</div>
            </div>
          </div>

        </div>
      )}
    </motion.div>
  );
}
