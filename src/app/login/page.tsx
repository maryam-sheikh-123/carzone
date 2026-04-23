import Link from "next/link";
import { Car } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0f2e1a] mb-4">
            <Car className="h-8 w-8 text-[#22c55e]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-[#6b7280]">Login to manage your ads and messages</p>
        </div>
        
        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#6b7280] mb-2">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-[#6b7280]">Password</label>
              <Link href="#" className="text-sm text-[#22c55e] hover:text-[#16a34a] transition-colors">
                Forgot Password?
              </Link>
            </div>
            <input 
              type="password" 
              required
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-3 rounded-lg font-medium transition-colors mt-2 shadow-lg shadow-[#22c55e]/20"
          >
            Login
          </button>
        </form>
        
        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-[#1f1f1f]"></div>
          <span className="px-4 text-sm text-[#6b7280]">OR</span>
          <div className="flex-grow h-px bg-[#1f1f1f]"></div>
        </div>
        
        {/* Phone OTP Login */}
        <button className="w-full bg-transparent border border-[#1f1f1f] hover:border-[#22c55e] hover:text-[#22c55e] text-white py-3 rounded-lg font-medium transition-colors mb-6">
          Login with Phone OTP
        </button>
        
        {/* Footer */}
        <p className="text-center text-[#6b7280]">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-[#22c55e] hover:text-[#16a34a] font-medium transition-colors">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
