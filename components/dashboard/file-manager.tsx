"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Grid3X3,
  List,
  Star,
  Clock,
  Trash2,
  Share2,
  Download,
  MoreHorizontal,
  Plus,
  Upload,
  Home,
  ChevronRight,
  Image,
  FileText,
  Video,
  Music,
  Archive,
  Folder
} from "lucide-react";

// Mock data for files and folders
const mockFiles = [
  { id: 1, name: "Project Presentation.pptx", type: "presentation", size: "2.4 MB", modified: "2 hours ago", starred: true },
  { id: 2, name: "Budget 2024.xlsx", type: "spreadsheet", size: "856 KB", modified: "1 day ago", starred: false },
  { id: 3, name: "Team Photo.jpg", type: "image", size: "3.2 MB", modified: "3 days ago", starred: true },
  { id: 4, name: "Meeting Recording.mp4", type: "video", size: "124 MB", modified: "1 week ago", starred: false },
  { id: 5, name: "Contract Draft.pdf", type: "pdf", size: "1.2 MB", modified: "2 weeks ago", starred: false },
  { id: 6, name: "Design Assets.zip", type: "archive", size: "45 MB", modified: "1 month ago", starred: true },
];

const mockFolders = [
  { id: 101, name: "Documents", count: 24, color: "bg-blue-500" },
  { id: 102, name: "Images", count: 156, color: "bg-emerald-500" },
  { id: 103, name: "Videos", count: 12, color: "bg-purple-500" },
  { id: 104, name: "Projects", count: 8, color: "bg-orange-500" },
];

const quickActions = [
  { icon: Plus, label: "New Folder", color: "text-blue-400" },
  { icon: Upload, label: "Upload Files", color: "text-emerald-400" },
  { icon: Share2, label: "Share", color: "text-purple-400" },
  { icon: Star, label: "Starred", color: "text-yellow-400" },
];

function getFileIcon(type: string) {
  switch (type) {
    case "presentation": return <FileText className="w-5 h-5 text-orange-400" />;
    case "spreadsheet": return <FileText className="w-5 h-5 text-emerald-400" />;
    case "image": return <Image className="w-5 h-5 text-blue-400" />;
    case "video": return <Video className="w-5 h-5 text-purple-400" />;
    case "pdf": return <FileText className="w-5 h-5 text-red-400" />;
    case "archive": return <Archive className="w-5 h-5 text-gray-400" />;
    case "folder": return <Folder className="w-5 h-5 text-emerald-400" />;
    default: return <FileText className="w-5 h-5 text-gray-400" />;
  }
}

interface FileManagerProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  searchQuery: string;
}

export default function FileManager({ viewMode, onViewModeChange, searchQuery }: FileManagerProps) {
  const [draggedItem, setDraggedItem] = useState<any>(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  // Filter files based on search query
  const filteredFiles = mockFiles.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFolders = mockFolders.filter(folder =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: any) => {
    setDraggedItem(item);
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="flex-1 overflow-auto p-6">
      {/* Breadcrumb */}
      <motion.div
        custom={0}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-2 text-sm text-white/40 mb-6"
      >
        <Home className="w-4 h-4" />
        <ChevronRight className="w-4 h-4" />
        <span className="text-white">My Files</span>
      </motion.div>

      {/* Action Bar */}
      <motion.div
        custom={1}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between mb-6"
      >
        <h1 className="text-3xl font-bold text-white">My Files</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-xl p-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewModeChange("grid")}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                viewMode === "grid" ? "bg-white/[0.10] text-white" : "text-white/60 hover:text-white"
              )}
            >
              <Grid3X3 className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onViewModeChange("list")}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                viewMode === "list" ? "bg-white/[0.10] text-white" : "text-white/60 hover:text-white"
              )}
            >
              <List className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        custom={2}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {quickActions.map((action, index) => (
          <motion.button
            key={index}
            custom={3 + index}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] rounded-xl p-4 text-left transition-all duration-300 group"
          >
            <action.icon className={cn("w-6 h-6 mb-2", action.color)} />
            <div className="font-medium text-white">{action.label}</div>
          </motion.button>
        ))}
      </motion.div>

      {/* Folders */}
      {filteredFolders.length > 0 && (
        <motion.div
          custom={7}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Folders</h2>
          <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-4 gap-4" : "space-y-2"}>
            {filteredFolders.map((folder) => (
              <motion.div
                key={folder.id}
                whileHover={{ scale: 1.02 }}
                draggable
                onDragStart={(e) => handleDragStart(e as any, folder)}
                onDragEnd={handleDragEnd}
                className={cn(
                  "backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] rounded-xl p-4 cursor-pointer transition-all duration-300 group",
                  "hover:shadow-lg hover:shadow-blue-500/10",
                  draggedItem?.id === folder.id && "opacity-50 scale-95",
                  viewMode === "list" && "flex items-center justify-between"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", folder.color)}>
                    <Folder className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{folder.name}</div>
                    {viewMode === "grid" && (
                      <div className="text-sm text-white/40">{folder.count} items</div>
                    )}
                  </div>
                </div>
                {viewMode === "list" && (
                  <div className="text-sm text-white/40">{folder.count} items</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Files */}
      {filteredFiles.length > 0 && (
        <motion.div
          custom={8}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Recent Files</h2>
          <div className={viewMode === "grid" ? "grid grid-cols-2 md:grid-cols-4 gap-4" : "space-y-2"}>
            {filteredFiles.map((file) => (
              <motion.div
                key={file.id}
                whileHover={{ scale: 1.02 }}
                draggable
                onDragStart={(e) => handleDragStart(e as any, file)}
                onDragEnd={handleDragEnd}
                className={cn(
                  "backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] rounded-xl p-4 cursor-pointer transition-all duration-300 group",
                  "hover:shadow-lg hover:shadow-blue-500/10",
                  draggedItem?.id === file.id && "opacity-50 scale-95",
                  viewMode === "list" && "flex items-center justify-between"
                )}
              >
                <div className="flex items-center gap-3">
                  {getFileIcon(file.type)}
                  <div className="flex-1">
                    <div className="font-medium text-white truncate">{file.name}</div>
                    {viewMode === "grid" && (
                      <>
                        <div className="text-sm text-white/40">{file.size}</div>
                        <div className="text-xs text-white/30">{file.modified}</div>
                      </>
                    )}
                  </div>
                </div>
                {viewMode === "list" ? (
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-white/40">{file.size}</div>
                    <div className="text-sm text-white/40">{file.modified}</div>
                    <div className="flex items-center gap-1">
                      <button className="p-1 hover:bg-white/[0.10] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Download className="w-4 h-4 text-white/60" />
                      </button>
                      <button className="p-1 hover:bg-white/[0.10] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Share2 className="w-4 h-4 text-white/60" />
                      </button>
                      <button className="p-1 hover:bg-white/[0.10] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <MoreHorizontal className="w-4 h-4 text-white/60" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mt-2">
                    <button className={cn("p-1 hover:bg-white/[0.10] rounded-lg", file.starred && "text-yellow-400")}>
                      <Star className="w-4 h-4" fill={file.starred ? "currentColor" : "none"} />
                    </button>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="p-1 hover:bg-white/[0.10] rounded-lg">
                        <Download className="w-4 h-4 text-white/60" />
                      </button>
                      <button className="p-1 hover:bg-white/[0.10] rounded-lg">
                        <Share2 className="w-4 h-4 text-white/60" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Empty State */}
      {filteredFiles.length === 0 && filteredFolders.length === 0 && searchQuery && (
        <motion.div
          custom={9}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-center py-12"
        >
          <div className="text-white/60 mb-2">No files or folders found</div>
          <div className="text-white/40 text-sm">Try adjusting your search terms</div>
        </motion.div>
      )}

      {/* Drag Instructions */}
      <motion.div
        custom={10}
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        className="mt-8 p-4 backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-xl"
      >
        <div className="flex items-center gap-3 text-sm text-white/40">
          <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center">
            <Upload className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white/60 font-medium">Drag & Drop to Favorites</div>
            <div className="text-xs">Drag any file or folder to the favorites section in the sidebar to add quick access</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
