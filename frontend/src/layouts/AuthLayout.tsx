import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Database, Sparkles, BarChart3, Workflow } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col lg:flex-row overflow-hidden relative selection:bg-primary/20">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      {/* Left Column - Editorial Hero */}
      <div className="hidden lg:flex flex-1 flex-col justify-between p-16 xl:p-24 relative z-10">
        
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] border border-black/[0.05] mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium tracking-wide">V1.0 Now Available</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero leading-[1.1] mb-6"
          >
            AI Analytics.<br />
            Powered by<br />
            Intelligence.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-text-muted max-w-md leading-relaxed font-light"
          >
            A perfectly balanced synergy of raw database power and effortless artificial intelligence. The ultimate analytical experience is here.
          </motion.p>
        </div>

        {/* 2.5D Floating Composition */}
        <div className="relative h-[40vh] w-full mt-12 perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 10, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Center Main Floating Card */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute z-20 w-72 h-48 bg-white/80 backdrop-blur-3xl border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-[32px] p-6 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                <Database className="text-white w-6 h-6" />
              </div>
              <div>
                <div className="h-2 w-24 bg-black/5 rounded-full mb-2"></div>
                <div className="h-2 w-32 bg-black/5 rounded-full"></div>
              </div>
            </motion.div>

            {/* Left Floating Element */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute z-10 -left-12 bottom-12 w-48 h-56 bg-white/50 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-[28px] p-5 flex flex-col gap-3"
            >
               <BarChart3 className="text-text-muted w-6 h-6 mb-2" />
               <div className="w-full h-8 bg-black/5 rounded-lg"></div>
               <div className="w-3/4 h-8 bg-black/5 rounded-lg"></div>
               <div className="w-full h-8 bg-black/5 rounded-lg"></div>
            </motion.div>

            {/* Right Floating Element */}
            <motion.div 
              animate={{ y: [-5, 15, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute z-30 -right-4 top-4 w-40 h-40 bg-white/70 backdrop-blur-2xl border border-white/50 shadow-[0_15px_50px_rgba(0,0,0,0.06)] rounded-full flex items-center justify-center"
            >
               <Workflow className="text-primary w-12 h-12 opacity-80" />
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Right Column - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[440px]"
        >
          <Outlet />
        </motion.div>
      </div>

    </div>
  );
};

export default AuthLayout;
