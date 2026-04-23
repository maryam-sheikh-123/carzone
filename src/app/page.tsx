import Link from "next/link";
import { Search, ShieldCheck, PhoneCall, DollarSign } from "lucide-react";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";

export default function Home() {
  const featuredCars = cars.filter(car => car.featured).slice(0, 6);
  const brands = ["Toyota", "Suzuki", "Honda", "KIA", "Hyundai", "BMW", "Mercedes", "Audi"];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a] opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e] opacity-5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Car in Pakistan
          </h1>
          <p className="text-lg md:text-xl text-[#6b7280] mb-10 max-w-2xl mx-auto">
            Thousands of verified cars across all cities. Buy and sell with confidence on CarZone PK.
          </p>
          
          {/* Search Bar */}
          <div className="bg-[#111111] p-2 rounded-xl border border-[#1f1f1f] max-w-4xl mx-auto flex flex-col md:flex-row gap-2 shadow-2xl">
            <select className="bg-[#0a0a0a] text-white border border-[#1f1f1f] rounded-lg px-4 py-3 md:w-1/4 focus:outline-none focus:border-[#22c55e]">
              <option value="">All Cities</option>
              <option value="karachi">Karachi</option>
              <option value="lahore">Lahore</option>
              <option value="islamabad">Islamabad</option>
            </select>
            <input 
              type="text" 
              placeholder="Car Make or Model" 
              className="bg-[#0a0a0a] text-white border border-[#1f1f1f] rounded-lg px-4 py-3 md:flex-grow focus:outline-none focus:border-[#22c55e]"
            />
            <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[#1f1f1f] bg-[#111111] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#1f1f1f]">
            <div>
              <div className="text-3xl font-bold text-white mb-1">12,000+</div>
              <div className="text-[#6b7280] text-sm">Cars Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-[#6b7280] text-sm">Verified Dealers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-[#6b7280] text-sm">Cities Covered</div>
            </div>
            <div className="border-l-0 md:border-l">
              <div className="text-3xl font-bold text-[#22c55e] mb-1">100%</div>
              <div className="text-[#6b7280] text-sm">Free to Browse</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Featured Cars</h2>
              <p className="text-[#6b7280]">Top picks from our verified sellers</p>
            </div>
            <Link href="/browse" className="text-[#22c55e] hover:text-[#16a34a] font-medium hidden sm:block transition-colors">
              View All &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/browse" className="text-[#22c55e] hover:text-[#16a34a] font-medium transition-colors">
              View All Cars &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by Make */}
      <section className="py-20 bg-[#111111] border-y border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Browse by Make</h2>
          
          <div className="flex overflow-x-auto pb-6 gap-4 scrollbar-hide justify-start md:justify-center">
            {brands.map(brand => (
              <button 
                key={brand}
                className="whitespace-nowrap px-8 py-4 bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl text-white font-medium hover:border-[#22c55e] hover:text-[#22c55e] transition-all hover:shadow-[0_0_10px_rgba(34,197,94,0.1)]"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-16">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative group">
              <div className="w-20 h-20 bg-[#111111] border border-[#1f1f1f] rounded-full flex items-center justify-center mx-auto mb-6 text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-white transition-all duration-300">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Step 1: Post Your Ad</h3>
              <p className="text-[#6b7280]">Enter your car details, upload photos, and set your price in minutes.</p>
            </div>
            
            <div className="relative group">
              <div className="w-20 h-20 bg-[#111111] border border-[#1f1f1f] rounded-full flex items-center justify-center mx-auto mb-6 text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-white transition-all duration-300">
                <PhoneCall className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Step 2: Get Direct Calls</h3>
              <p className="text-[#6b7280]">Receive calls and messages directly from interested buyers across Pakistan.</p>
            </div>
            
            <div className="relative group">
              <div className="w-20 h-20 bg-[#111111] border border-[#1f1f1f] rounded-full flex items-center justify-center mx-auto mb-6 text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-white transition-all duration-300">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Step 3: Sell Your Car</h3>
              <p className="text-[#6b7280]">Negotiate the best price and close the deal securely with the buyer.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
