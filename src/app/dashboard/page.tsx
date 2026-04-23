import Link from "next/link";
import { PlusCircle, FileText, Eye, Clock, Edit, Trash2, Zap } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-white">My Dashboard</h1>
        <Link 
          href="/post-ad" 
          className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <PlusCircle className="h-5 w-5" />
          Post New Ad
        </Link>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#1f1f1f] rounded-full flex items-center justify-center text-white">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-[#6b7280] text-sm font-medium">Total Ads</p>
            <p className="text-2xl font-bold text-white">3</p>
          </div>
        </div>
        
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#0f2e1a] rounded-full flex items-center justify-center text-[#22c55e]">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[#6b7280] text-sm font-medium">Active Ads</p>
            <p className="text-2xl font-bold text-white">2</p>
          </div>
        </div>
        
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center text-blue-500">
            <Eye className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[#6b7280] text-sm font-medium">Total Views</p>
            <p className="text-2xl font-bold text-white">1,240</p>
          </div>
        </div>
        
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-900/20 rounded-full flex items-center justify-center text-yellow-500">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-[#6b7280] text-sm font-medium">Pending</p>
            <p className="text-2xl font-bold text-white">1</p>
          </div>
        </div>
      </div>
      
      {/* Table */}
      <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-[#1f1f1f]">
          <h2 className="text-xl font-bold text-white">My Ads</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#0a0a0a] text-[#6b7280] text-sm font-medium">
              <tr>
                <th className="px-6 py-4 border-b border-[#1f1f1f]">Car Details</th>
                <th className="px-6 py-4 border-b border-[#1f1f1f]">Price</th>
                <th className="px-6 py-4 border-b border-[#1f1f1f]">Status</th>
                <th className="px-6 py-4 border-b border-[#1f1f1f]">Views</th>
                <th className="px-6 py-4 border-b border-[#1f1f1f]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f1f1f]">
              {/* Row 1 */}
              <tr className="hover:bg-[#151515] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-[#1f1f1f] rounded flex items-center justify-center">
                      <CarIcon className="h-6 w-6 text-[#6b7280]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Toyota Corolla GLi 2021</p>
                      <p className="text-[#6b7280] text-sm">Karachi • 45,000 km</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-white font-medium">PKR 4,500,000</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-500 border border-green-900/50">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-[#6b7280]">842</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button className="text-[#6b7280] hover:text-white transition-colors" title="Edit">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-[#6b7280] hover:text-red-500 transition-colors" title="Delete">
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button className="text-[#6b7280] hover:text-[#22c55e] transition-colors" title="Boost">
                      <Zap className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Row 2 */}
              <tr className="hover:bg-[#151515] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-[#1f1f1f] rounded flex items-center justify-center">
                      <CarIcon className="h-6 w-6 text-[#6b7280]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Honda Civic Oriel 2022</p>
                      <p className="text-[#6b7280] text-sm">Lahore • 22,000 km</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-white font-medium">PKR 6,800,000</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-500 border border-green-900/50">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-[#6b7280]">398</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button className="text-[#6b7280] hover:text-white transition-colors" title="Edit">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-[#6b7280] hover:text-red-500 transition-colors" title="Delete">
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button className="text-[#6b7280] hover:text-[#22c55e] transition-colors" title="Boost">
                      <Zap className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Row 3 */}
              <tr className="hover:bg-[#151515] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-12 bg-[#1f1f1f] rounded flex items-center justify-center">
                      <CarIcon className="h-6 w-6 text-[#6b7280]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Suzuki Alto VXR 2023</p>
                      <p className="text-[#6b7280] text-sm">Islamabad • 12,000 km</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-white font-medium">PKR 2,400,000</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900/30 text-yellow-500 border border-yellow-900/50">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-[#6b7280]">-</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button className="text-[#6b7280] hover:text-white transition-colors" title="Edit">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-[#6b7280] hover:text-red-500 transition-colors" title="Delete">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Icons needed that aren't imported above
function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function CarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
