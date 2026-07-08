import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { LayoutDashboard, Upload, Settings, LogOut, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Upload Data', path: '/upload', icon: Upload },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-bg-base text-text-base flex flex-col relative overflow-hidden font-sans">
      
      {/* Abstract Background for Main Layout */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[140px] pointer-events-none z-0" />

      {/* Floating Apple-inspired Top Navigation */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-50">
        <div className="bg-bg-glass backdrop-blur-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-[32px] px-6 py-3 flex items-center justify-between">
          
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Database className="text-white w-5 h-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-text-base to-text-muted">
              Analytics
            </span>
          </Link>

          {/* Navigation Centered */}
          <nav className="hidden md:flex items-center gap-2 bg-black/[0.03] p-1.5 rounded-[24px] border border-black/[0.04]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-5 py-2.5 rounded-[20px] text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-text-base' : 'text-text-muted hover:text-text-base hover:bg-black/[0.02]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white rounded-[20px] shadow-sm border border-black/[0.04] z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive && <item.icon size={16} className="text-primary" />}
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile Right */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end mr-2">
              <span className="text-sm font-semibold tracking-tight">{user?.name}</span>
              <span className="text-xs text-text-muted">{user?.email}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="p-3 rounded-2xl bg-black/[0.03] hover:bg-red-50 text-text-muted hover:text-red-500 transition-colors border border-transparent hover:border-red-100"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Area - Generous 80px Padding */}
      <main className="flex-1 relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1600px] w-full mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={location.pathname}
            initial={{ opacity: 0, y: 15, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
    </div>
  );
};

export default MainLayout;
