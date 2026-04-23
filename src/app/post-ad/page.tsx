"use client";

import { useState } from "react";
import { Check, UploadCloud, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PostAdPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-[#0f2e1a] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-12 w-12 text-[#22c55e]" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Ad Posted Successfully!</h1>
        <p className="text-[#6b7280] mb-10 text-lg">Your car has been listed and is now visible to thousands of buyers across Pakistan.</p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="px-6 py-3 bg-[#111111] border border-[#1f1f1f] text-white rounded-lg hover:border-[#22c55e] transition-colors">
            Go to Dashboard
          </Link>
          <Link href="/" className="px-6 py-3 bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Post Your Car Ad</h1>
        <p className="text-[#6b7280]">Reach thousands of buyers across Pakistan</p>
      </div>
      
      {/* Step Indicator */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center w-full max-w-2xl">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-[#22c55e] text-white' : 'bg-[#1f1f1f] text-[#6b7280]'}`}>
              {step > 1 ? <Check className="h-5 w-5" /> : '1'}
            </div>
            <span className={`text-sm mt-2 font-medium ${step >= 1 ? 'text-[#22c55e]' : 'text-[#6b7280]'}`}>Car Details</span>
          </div>
          
          <div className={`flex-grow h-1 mx-4 rounded ${step >= 2 ? 'bg-[#22c55e]' : 'bg-[#1f1f1f]'}`}></div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-[#22c55e] text-white' : 'bg-[#1f1f1f] text-[#6b7280]'}`}>
              {step > 2 ? <Check className="h-5 w-5" /> : '2'}
            </div>
            <span className={`text-sm mt-2 font-medium ${step >= 2 ? 'text-[#22c55e]' : 'text-[#6b7280]'}`}>Price & Location</span>
          </div>
          
          <div className={`flex-grow h-1 mx-4 rounded ${step >= 3 ? 'bg-[#22c55e]' : 'bg-[#1f1f1f]'}`}></div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-[#22c55e] text-white' : 'bg-[#1f1f1f] text-[#6b7280]'}`}>
              3
            </div>
            <span className={`text-sm mt-2 font-medium ${step >= 3 ? 'text-[#22c55e]' : 'text-[#6b7280]'}`}>Photos & Post</span>
          </div>
        </div>
      </div>
      
      {/* Form Area */}
      <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 sm:p-10 shadow-xl">
        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
          
          {/* STEP 1: Car Details */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-[#1f1f1f] pb-4">Step 1: Car Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Make *</label>
                  <select required className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]">
                    <option value="">Select Make</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="KIA">KIA</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Model *</label>
                  <input required type="text" placeholder="e.g. Corolla" className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Year *</label>
                  <select required className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]">
                    <option value="">Select Year</option>
                    {[...Array(26)].map((_, i) => (
                      <option key={i} value={2025 - i}>{2025 - i}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Variant / Trim</label>
                  <input type="text" placeholder="e.g. GLi Auto" className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Mileage (km) *</label>
                  <input required type="number" placeholder="e.g. 45000" className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Engine Capacity (cc) *</label>
                  <input required type="number" placeholder="e.g. 1800" className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Color</label>
                  <select className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]">
                    <option value="">Select Color</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Silver">Silver</option>
                    <option value="Grey">Grey</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1f1f1f]">
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-3">Condition *</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="condition" value="New" className="peer sr-only" />
                      <div className="text-center py-3 border border-[#1f1f1f] rounded-lg text-white peer-checked:border-[#22c55e] peer-checked:bg-[#0f2e1a] transition-all">New</div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="condition" value="Used" defaultChecked className="peer sr-only" />
                      <div className="text-center py-3 border border-[#1f1f1f] rounded-lg text-white peer-checked:border-[#22c55e] peer-checked:bg-[#0f2e1a] transition-all">Used</div>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-3">Transmission *</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="transmission" value="Automatic" defaultChecked className="peer sr-only" />
                      <div className="text-center py-3 border border-[#1f1f1f] rounded-lg text-white peer-checked:border-[#22c55e] peer-checked:bg-[#0f2e1a] transition-all">Auto</div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="transmission" value="Manual" className="peer sr-only" />
                      <div className="text-center py-3 border border-[#1f1f1f] rounded-lg text-white peer-checked:border-[#22c55e] peer-checked:bg-[#0f2e1a] transition-all">Manual</div>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end pt-6">
                <button type="submit" className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Next Step
                </button>
              </div>
            </div>
          )}
          
          {/* STEP 2: Price & Location */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-[#1f1f1f] pb-4">Step 2: Price & Location</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Price (PKR) *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-[#6b7280] font-medium">Rs.</span>
                    <input required type="number" placeholder="e.g. 4500000" className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:border-[#22c55e]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#6b7280] mb-2">City *</label>
                    <select required className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]">
                      <option value="">Select City</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Islamabad">Islamabad</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#6b7280] mb-2">Area / Locality</label>
                    <input type="text" placeholder="e.g. DHA Phase 5" className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e]" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#6b7280] mb-2">Your Phone Number *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-[#6b7280] font-medium">+92</span>
                    <input required type="tel" placeholder="300 1234567" className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg pl-14 pr-4 py-3 focus:outline-none focus:border-[#22c55e]" />
                  </div>
                  <p className="text-xs text-[#6b7280] mt-2">This number will be displayed on your ad for buyers to contact you.</p>
                </div>
              </div>
              
              <div className="flex justify-between pt-6 border-t border-[#1f1f1f] mt-8">
                <button type="button" onClick={prevStep} className="px-6 py-3 border border-[#1f1f1f] text-white rounded-lg hover:border-[#22c55e] transition-colors">
                  Back
                </button>
                <button type="submit" className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Next Step
                </button>
              </div>
            </div>
          )}
          
          {/* STEP 3: Photos & Description */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-[#1f1f1f] pb-4">Step 3: Photos & Description</h2>
              
              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Upload Photos * (Max 10)</label>
                <div className="border-2 border-dashed border-[#1f1f1f] hover:border-[#22c55e] rounded-xl p-8 text-center transition-colors bg-[#0a0a0a] cursor-pointer">
                  <UploadCloud className="h-12 w-12 text-[#6b7280] mx-auto mb-4" />
                  <p className="text-white font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm text-[#6b7280]">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
                  <button type="button" className="mt-4 px-4 py-2 bg-[#111111] border border-[#1f1f1f] text-white rounded hover:bg-[#1a1a1a] transition-colors text-sm">
                    Select Files
                  </button>
                </div>
              </div>
              
              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Description</label>
                <textarea 
                  rows={5} 
                  placeholder="Describe your car's condition, features, and reason for selling..." 
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] resize-none"
                ></textarea>
              </div>
              
              {/* Packages */}
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-4">Choose Ad Package</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="cursor-pointer">
                    <input type="radio" name="package" value="basic" defaultChecked className="peer sr-only" />
                    <div className="p-4 border border-[#1f1f1f] rounded-xl text-center peer-checked:border-[#22c55e] peer-checked:bg-[#0f2e1a] transition-all">
                      <div className="text-lg font-bold text-white mb-1">Basic</div>
                      <div className="text-[#22c55e] font-bold text-xl mb-2">Free</div>
                      <p className="text-sm text-[#6b7280]">Standard listing valid for 30 days.</p>
                    </div>
                  </label>
                  
                  <label className="cursor-pointer">
                    <input type="radio" name="package" value="featured" className="peer sr-only" />
                    <div className="p-4 border border-[#1f1f1f] rounded-xl text-center peer-checked:border-[#22c55e] peer-checked:bg-[#0f2e1a] relative overflow-hidden transition-all">
                      <div className="absolute top-0 right-0 bg-[#22c55e] text-white text-[10px] font-bold px-2 py-1 rounded-bl">POPULAR</div>
                      <div className="text-lg font-bold text-white mb-1">Featured</div>
                      <div className="text-[#22c55e] font-bold text-xl mb-2">Rs. 500</div>
                      <p className="text-sm text-[#6b7280]">Highlighted in search results for 7 days.</p>
                    </div>
                  </label>
                  
                  <label className="cursor-pointer">
                    <input type="radio" name="package" value="premium" className="peer sr-only" />
                    <div className="p-4 border border-[#1f1f1f] rounded-xl text-center peer-checked:border-[#22c55e] peer-checked:bg-[#0f2e1a] transition-all">
                      <div className="text-lg font-bold text-white mb-1">Premium</div>
                      <div className="text-[#22c55e] font-bold text-xl mb-2">Rs. 1000</div>
                      <p className="text-sm text-[#6b7280]">Top of homepage and search for 14 days.</p>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="flex justify-between pt-6 border-t border-[#1f1f1f] mt-8">
                <button type="button" onClick={prevStep} className="px-6 py-3 border border-[#1f1f1f] text-white rounded-lg hover:border-[#22c55e] transition-colors">
                  Back
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </span>
                  ) : "Submit Ad"}
                </button>
              </div>
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
}
