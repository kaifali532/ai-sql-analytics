import { useState } from 'react';

import { useForm as useRHForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import api from '../lib/api';
import { Loader2 } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [error, setError] = useState('');
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useRHForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      setError('');
      const response = await api.post('/auth/login', data);
      
      if (!response.data || !response.data.token || !response.data.user) {
        throw new Error('Invalid response from server. Please try again.');
      }
      
      login(response.data.user, response.data.token);
      navigate('/');
    } catch (err: any) {
      const errData = err.response?.data;
      let errorMessage = 'Failed to login';
      if (errData) {
        if (typeof errData.error === 'string') errorMessage = errData.error;
        else if (typeof errData.message === 'string') errorMessage = errData.message;
        else errorMessage = JSON.stringify(errData);
      } else if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="w-full glass-card p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-white/50">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-text-base mb-3 tracking-tight">Welcome Back</h1>
        <p className="text-text-muted font-light">Sign in to your AI SQL Analytics account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm border border-red-100 font-medium text-center">
            {error}
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-text-muted mb-2 px-1">Email</label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-5 py-4 bg-white/80 border border-black/5 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all text-text-base shadow-sm"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-2 px-1 font-medium">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-muted mb-2 px-1">Password</label>
          <input
            {...register('password')}
            type="password"
            className="w-full px-5 py-4 bg-white/80 border border-black/5 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary/40 outline-none transition-all text-text-base shadow-sm"
            placeholder="••••••••"
          />
          {errors.password && <p className="text-red-500 text-xs mt-2 px-1 font-medium">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 mt-4 bg-gradient-to-r from-primary to-primary-hover text-white rounded-full font-medium shadow-[0_8px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_25px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 text-lg tracking-wide"
        >
          {isSubmitting ? <Loader2 className="animate-spin" size={22} /> : 'Sign In'}
        </button>
      </form>

      <p className="text-center mt-10 text-sm text-text-muted font-medium">
        Don't have an account?{' '}
        <Link to="/register" className="text-primary hover:text-primary-hover hover:underline underline-offset-4 transition-colors">
          Create one
        </Link>
      </p>
    </div>
  );
};

export default Login;
