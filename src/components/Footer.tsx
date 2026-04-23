import Link from "next/link";
import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#1f1f1f] py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight inline-flex items-center gap-2">
              <Car className="text-[#22c55e] h-8 w-8" />
              <div>
                <span className="text-white">CarZone</span>
                <span className="text-[#22c55e]">PK</span>
              </div>
            </Link>
            <p className="mt-4 text-[#6b7280] max-w-sm">
              Pakistan&apos;s #1 Car Marketplace. Find thousands of verified cars across all cities. Buy and sell with confidence.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/browse" className="text-[#6b7280] hover:text-[#22c55e] transition-colors">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/post-ad" className="text-[#6b7280] hover:text-[#22c55e] transition-colors">
                  Post Ad
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-[#6b7280] hover:text-[#22c55e] transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-[#6b7280] hover:text-[#22c55e] transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-[#6b7280] hover:text-[#22c55e] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#22c55e] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] hover:text-[#22c55e] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#1f1f1f] text-center text-[#6b7280]">
          <p>&copy; {new Date().getFullYear()} CarZone PK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
