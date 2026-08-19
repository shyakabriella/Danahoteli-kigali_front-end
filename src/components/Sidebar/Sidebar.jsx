import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard,
  Files,
  BedDouble,
  Compass,
  Settings,
  LogOut,
  X
} from 'lucide-react';

const Sidebar = ({ onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'CMS Overview', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { name: 'Pages', icon: <Files size={20} />, path: '/dashboard/pages' },
    { name: 'Rooms', icon: <BedDouble size={20} />, path: '/dashboard/rooms' },
    { name: 'Experiences', icon: <Compass size={20} />, path: '/dashboard/experiences' },
    { name: 'Site Settings', icon: <Settings size={20} />, path: '/dashboard/settings' },
  ];

  const baseLink = 'flex items-center gap-4 px-4 py-3.5 rounded-lg text-[0.95rem] font-medium text-[hsl(var(--sidebar-foreground))] transition-all duration-200 hover:bg-[hsl(var(--sidebar-accent))]';
  const activeLink = 'bg-gradient-to-br from-[hsl(24,98%,53%)] to-[hsl(24,98%,63%)] !text-white shadow-[0_4px_15px_-3px_hsl(24,98%,53%,0.3)]';

  function handleLogout() {
    logout();          // clears localStorage session
    onClose?.();
    navigate('/login');
  }

  return (
    <aside className="w-64 h-screen bg-[hsl(var(--sidebar-background))] border-r border-[hsl(var(--sidebar-border))] flex flex-col px-4 py-6 shrink-0">
      {/* Logo + close btn (mobile) */}
      <div className="mb-4 px-2 flex items-center justify-between">
        <div className="flex items-center justify-center flex-1">
          <img
            src="/DANA HOTEL.png"
            alt="Dana Kigali Hotel"
            className="w-[90px] h-[90px] object-contain"
          />
        </div>
        {/* Close button — only visible on mobile */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))] transition-colors"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col gap-1 list-none p-0 m-0">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === '/dashboard'}
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? `${baseLink} ${activeLink}` : baseLink
                }
              >
                <span className="flex items-center justify-center z-[1]">{item.icon}</span>
                <span className="z-[1]">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-6 border-t border-[hsl(var(--sidebar-border))]">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-4 px-4 py-3.5 rounded-lg text-[0.95rem] font-medium text-[hsl(var(--sidebar-foreground))] transition-all duration-200 hover:text-red-500 hover:bg-red-50"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
