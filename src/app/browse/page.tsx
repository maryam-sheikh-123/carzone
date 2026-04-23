import Link from "next/link";
import { Filter, ChevronDown } from "lucide-react";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/cars";

export default function BrowsePage() {
  const displayCars = cars.slice(0, 9);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">Browse Cars</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4">
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 sticky top-24">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Filter className="h-5 w-5 text-[#22c55e]" />
                Filters
              </h2>
              <button className="text-sm text-[#6b7280] hover:text-[#22c55e] transition-colors">
                Clear All
              </button>
            </div>
            
            <div className="space-y-6">
              {/* City Filter */}
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">City</label>
                <div className="relative">
                  <select className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-[#22c55e]">
                    <option value="">Any City</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Quetta">Quetta</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 h-4 w-4 text-[#6b7280] pointer-events-none" />
                </div>
              </div>
              
              {/* Make Filter */}
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Make</label>
                <div className="relative">
                  <select className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-[#22c55e]">
                    <option value="">Any Make</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Honda">Honda</option>
                    <option value="KIA">KIA</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="BMW">BMW</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 h-4 w-4 text-[#6b7280] pointer-events-none" />
                </div>
              </div>
              
              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Year</label>
                <div className="grid grid-cols-2 gap-2">
                  <select className="bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-3 py-3 focus:outline-none focus:border-[#22c55e]">
                    <option value="">From</option>
                    {[...Array(25)].map((_, i) => (
                      <option key={i} value={2025 - i}>{2025 - i}</option>
                    ))}
                  </select>
                  <select className="bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-3 py-3 focus:outline-none focus:border-[#22c55e]">
                    <option value="">To</option>
                    {[...Array(25)].map((_, i) => (
                      <option key={i} value={2025 - i}>{2025 - i}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Price Range (PKR)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" placeholder="Min" className="bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-3 py-3 w-full focus:outline-none focus:border-[#22c55e]" />
                  <input type="number" placeholder="Max" className="bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-3 py-3 w-full focus:outline-none focus:border-[#22c55e]" />
                </div>
              </div>
              
              {/* Condition Filter */}
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Condition</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="condition" className="form-radio text-[#22c55e] bg-[#0a0a0a] border-[#1f1f1f] focus:ring-[#22c55e]" defaultChecked />
                    <span>Any</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="condition" className="form-radio text-[#22c55e] bg-[#0a0a0a] border-[#1f1f1f] focus:ring-[#22c55e]" />
                    <span>New</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="condition" className="form-radio text-[#22c55e] bg-[#0a0a0a] border-[#1f1f1f] focus:ring-[#22c55e]" />
                    <span>Used</span>
                  </label>
                </div>
              </div>
              
              <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-3 rounded-lg font-medium transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-[#111111] p-4 rounded-xl border border-[#1f1f1f]">
            <p className="text-[#6b7280] mb-4 sm:mb-0">Showing <span className="text-white font-bold">{displayCars.length}</span> results</p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-sm text-[#6b7280]">Sort by:</span>
              <div className="relative flex-grow sm:flex-grow-0">
                <select className="w-full sm:w-48 bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-2 appearance-none focus:outline-none focus:border-[#22c55e]">
                  <option value="recent">Recently Added</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="year-new">Year: Newest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-[#6b7280] pointer-events-none" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {displayCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="px-4 py-2 border border-[#1f1f1f] rounded-lg text-[#6b7280] hover:text-white hover:border-[#22c55e] disabled:opacity-50 transition-colors" disabled>
                Previous
              </button>
              <button className="w-10 h-10 bg-[#22c55e] text-white rounded-lg font-medium flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 border border-[#1f1f1f] text-white rounded-lg font-medium hover:border-[#22c55e] flex items-center justify-center transition-colors">
                2
              </button>
              <button className="w-10 h-10 border border-[#1f1f1f] text-white rounded-lg font-medium hover:border-[#22c55e] flex items-center justify-center transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-[#1f1f1f] rounded-lg text-white hover:border-[#22c55e] transition-colors">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
