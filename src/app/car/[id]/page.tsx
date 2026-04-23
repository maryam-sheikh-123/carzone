"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle, AlertTriangle, Car as CarIcon, MapPin, Calendar, Settings, Fuel } from "lucide-react";
import { cars } from "@/lib/cars";
import CarCard from "@/components/CarCard";
import { notFound } from "next/navigation";

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const [showPhone, setShowPhone] = useState(false);
  
  // In a real app we'd fetch this based on the ID, but for now we'll just find it
  // Unwrapping params is necessary in Next.js 14+ for safety but we'll assume it's there
  const car = cars.find(c => c.id === params.id) || cars[0];
  
  if (!car) {
    notFound();
  }

  const similarCars = cars.filter(c => c.id !== car.id).slice(0, 3);
  
  const formattedPrice = new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(car.price);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-[#6b7280] mb-6">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/browse" className="hover:text-white transition-colors">Browse</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-white font-medium">{car.make} {car.model} {car.year}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - 60% */}
        <div className="w-full lg:w-[60%]">
          {/* Main Image */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl h-[400px] flex items-center justify-center mb-4 relative overflow-hidden group">
            <CarIcon className="h-32 w-32 text-[#6b7280] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white text-lg font-medium">Image placeholder for {car.title}</span>
            </div>
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
            {[1, 2, 3, 4].map(num => (
              <div key={num} className="bg-[#111111] border border-[#1f1f1f] rounded-lg h-24 min-w-[120px] flex items-center justify-center cursor-pointer hover:border-[#22c55e] transition-colors">
                <CarIcon className="h-8 w-8 text-[#6b7280] opacity-50" />
              </div>
            ))}
          </div>
          
          {/* Car Details Table */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-6">Car Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
              <div>
                <p className="text-[#6b7280] text-sm mb-1">Make</p>
                <p className="text-white font-medium">{car.make}</p>
              </div>
              <div>
                <p className="text-[#6b7280] text-sm mb-1">Model</p>
                <p className="text-white font-medium">{car.model}</p>
              </div>
              <div>
                <p className="text-[#6b7280] text-sm mb-1 flex items-center gap-1"><Calendar className="h-3 w-3" /> Year</p>
                <p className="text-white font-medium">{car.year}</p>
              </div>
              <div>
                <p className="text-[#6b7280] text-sm mb-1">Mileage</p>
                <p className="text-white font-medium">{car.mileage.toLocaleString()} km</p>
              </div>
              <div>
                <p className="text-[#6b7280] text-sm mb-1">Color</p>
                <p className="text-white font-medium">{car.color}</p>
              </div>
              <div>
                <p className="text-[#6b7280] text-sm mb-1 flex items-center gap-1"><Settings className="h-3 w-3" /> Transmission</p>
                <p className="text-white font-medium">{car.transmission}</p>
              </div>
              <div>
                <p className="text-[#6b7280] text-sm mb-1 flex items-center gap-1"><Fuel className="h-3 w-3" /> Engine</p>
                <p className="text-white font-medium">1800 cc</p>
              </div>
              <div>
                <p className="text-[#6b7280] text-sm mb-1">Condition</p>
                <p className="text-white font-medium">{car.condition}</p>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Description</h2>
            <div className="text-[#6b7280] space-y-4">
              <p>Excellent condition {car.make} {car.model} {car.year} available for sale. First owner, carefully driven and maintained by authorized dealership.</p>
              <p>Bumper to bumper original paint. No touchups. Engine, suspension, and AC are in perfect working condition. Token tax paid up to date.</p>
              <p>Price is slightly negotiable for serious buyers. Please contact during working hours.</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - 40% */}
        <div className="w-full lg:w-[40%]">
          {/* Price & Title Box */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl font-bold text-white">{car.title}</h1>
              {car.featured && (
                <span className="bg-[#22c55e] text-white text-xs font-bold px-2 py-1 rounded">Featured</span>
              )}
            </div>
            
            <p className="text-[#22c55e] text-4xl font-bold mb-6">{formattedPrice}</p>
            
            <div className="flex items-center text-[#6b7280] border-t border-[#1f1f1f] pt-4">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{car.city}, Pakistan</span>
            </div>
          </div>
          
          {/* Seller Box */}
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 mb-6">
            <h2 className="text-lg font-bold text-white mb-4 border-b border-[#1f1f1f] pb-4">Seller Information</h2>
            
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-[#1f1f1f] rounded-full flex items-center justify-center text-xl font-bold text-[#22c55e] mr-4">
                {car.sellerName.charAt(0)}
              </div>
              <div>
                <p className="text-white font-bold text-lg">{car.sellerName}</p>
                <p className="text-[#6b7280] text-sm">Member since: 2022</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <button 
                onClick={() => setShowPhone(!showPhone)}
                className="w-full bg-[#1f1f1f] hover:bg-[#2a2a2a] text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors border border-[#333333]"
              >
                <Phone className="h-5 w-5 text-[#22c55e]" />
                {showPhone ? car.phone : "Show Phone Number"}
              </button>
              
              <Link href={`https://wa.me/92${car.phone.replace(/[^0-9]/g, '').substring(1)}`} target="_blank">
                <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors mt-3">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </button>
              </Link>
            </div>
          </div>
          
          {/* Safety Tips */}
          <div className="bg-[#0f1f16] border border-[#1a3825] rounded-xl p-6">
            <h2 className="text-lg font-bold text-[#22c55e] mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Safety Tips for Buyers
            </h2>
            <ul className="text-[#6b7280] space-y-2 text-sm list-disc pl-5">
              <li>Meet the seller in a safe, public place</li>
              <li>Check the car's documents carefully</li>
              <li>Have the car inspected by a trusted mechanic</li>
              <li>Don't pay in advance before receiving the car</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Similar Cars */}
      <div className="mt-16 pt-10 border-t border-[#1f1f1f]">
        <h2 className="text-2xl font-bold text-white mb-8">Similar Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similarCars.map(c => (
            <CarCard key={c.id} car={c} />
          ))}
        </div>
      </div>
    </div>
  );
}
