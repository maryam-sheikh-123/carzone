import Link from "next/link";
import { Car } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0f2e1a] mb-4">
            <Car className="h-8 w-8 text-[#22c55e]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-[#6b7280]">Join Pakistan&apos;s #1 car marketplace</p>
        </div>
        
        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#6b7280] mb-2">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
              placeholder="e.g. Ahmed Khan"
            />
          </div>
          
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
            <label className="block text-sm font-medium text-[#6b7280] mb-2">Phone Number</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-[#6b7280] font-medium">+92</span>
              <input 
                type="tel" 
                required
                className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg pl-14 pr-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
                placeholder="300 1234567"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-[#6b7280] mb-2">Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#6b7280] mb-2">Confirm Password</label>
              <input 
                type="password" 
                required
                className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5">
              <input 
                id="terms" 
                type="checkbox" 
                required
                className="w-4 h-4 rounded border-[#1f1f1f] bg-[#0a0a0a] text-[#22c55e] focus:ring-[#22c55e] focus:ring-offset-[#111111]"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="text-[#6b7280]">
                I agree to the{' '}
                <Link href="#" className="text-[#22c55e] hover:text-[#16a34a] transition-colors">Terms & Conditions</Link>
                {' '}and{' '}
                <Link href="#" className="text-[#22c55e] hover:text-[#16a34a] transition-colors">Privacy Policy</Link>
              </label>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-3 rounded-lg font-medium transition-colors mt-4 shadow-lg shadow-[#22c55e]/20"
          >
            Create Account
          </button>
        </form>
        
        {/* Footer */}
        <p className="text-center text-[#6b7280] mt-8">
          Already have an account?{' '}
          <Link href="/login" className="text-[#22c55e] hover:text-[#16a34a] font-medium transition-colors">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
