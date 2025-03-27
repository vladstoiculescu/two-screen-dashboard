
import { useState } from "react";
import { Menu, Search, Bell, User, LayoutDashboard, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#1a2232]">
      {/* Top Navbar */}
      <header className="border-b border-slate-700 bg-[#1a2232] text-white p-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SidebarTrigger>
          <div className="flex items-center gap-2">
            <div className="text-blue-400 rounded-full bg-blue-400/20 p-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 15C7.2 15 5 12.8 5 10C5 7.2 7.2 5 10 5C12.8 5 15 7.2 15 10C15 12.8 12.8 15 10 15Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="font-bold text-white">OPTICOMM</span>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Input 
              placeholder="Search" 
              className="bg-[#253041] border-[#354055] text-white pl-4 pr-10 rounded-md w-full"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center overflow-hidden">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="text-white text-sm hidden md:inline-block">Hello, Viviana!</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          className={cn(
            "bg-[#1a2232] border-r border-slate-700 transition-all duration-300 w-[220px] flex-shrink-0",
            !isSidebarOpen && "w-0"
          )}
        >
          <SidebarContent className="p-0">
            <div className="py-4">
              <div className="px-3 py-2 text-gray-400 uppercase text-xs font-medium">
                Navigation
              </div>
              <nav className="space-y-1 px-2">
                <a
                  href="/dashboard"
                  className="flex items-center gap-3 px-3 py-2 text-white hover:bg-blue-600/10 rounded-md group"
                >
                  <LayoutDashboard className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  <span>Demand Prediction</span>
                </a>
                <a
                  href="/action-center"
                  className="flex items-center gap-3 px-3 py-2 text-white hover:bg-blue-600/10 rounded-md group"
                >
                  <Activity className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  <span>Action Center</span>
                </a>
              </nav>
            </div>

            <div className="mt-auto py-4">
              <div className="px-3 py-2 text-gray-400 uppercase text-xs font-medium">
                User Management
              </div>
              <nav className="space-y-1 px-2">
                <a
                  href="/profile"
                  className="flex items-center gap-3 px-3 py-2 text-white hover:bg-blue-600/10 rounded-md group"
                >
                  <User className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  <span>Profile</span>
                </a>
                <a
                  href="/settings"
                  className="flex items-center gap-3 px-3 py-2 text-white hover:bg-blue-600/10 rounded-md group"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Settings</span>
                </a>
                <a
                  href="/helper"
                  className="flex items-center gap-3 px-3 py-2 text-white hover:bg-blue-600/10 rounded-md group"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Helper</span>
                </a>
              </nav>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <div></div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Data
              </Button>
            </div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
