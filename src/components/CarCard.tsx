import Link from "next/link";
import { Car as CarIcon, MapPin, Gauge } from "lucide-react";
import { Car } from "@/lib/cars";

export default function CarCard({ car }: { car: Car }) {
  // Format price
  const formattedPrice = new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    maximumFractionDigits: 0,
  }).format(car.price);

  return (
    <Link href={`/car/${car.id}`} className="block group h-full">
      <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#22c55e]/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] flex flex-col h-full">
        
        {/* Image Placeholder */}
        <div className="h-48 bg-[#1f1f1f] relative flex items-center justify-center">
          <CarIcon className="h-16 w-16 text-[#6b7280] opacity-50" />
          
          {car.featured && (
            <div className="absolute top-3 left-3 bg-[#22c55e] text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
              Featured
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-white group-hover:text-[#22c55e] transition-colors line-clamp-1">
              {car.title}
            </h3>
            
            <p className="text-[#22c55e] font-bold text-xl mt-2">
              {formattedPrice}
            </p>
            
            <div className="flex items-center text-[#6b7280] text-sm mt-4 space-x-3">
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{car.city}</span>
              </div>
              <span>|</span>
              <div className="flex items-center">
                <Gauge className="h-3 w-3 mr-1" />
                <span>{car.mileage.toLocaleString()} km</span>
              </div>
            </div>
            
            <div className="text-[#6b7280] text-sm mt-2">
              {car.transmission}
            </div>
          </div>
          
          <div className="mt-5 pt-4 border-t border-[#1f1f1f]">
            <button className="w-full py-2 px-4 bg-[#1f1f1f] group-hover:bg-[#22c55e] text-white rounded-md transition-colors font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
