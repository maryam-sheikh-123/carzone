import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
          Have questions or need assistance? Our team is here to help. Reach out to us through the form or using the contact information below.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <div className="w-full lg:w-2/3 bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
                  placeholder="Ahmed Khan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
                  placeholder="ahmed@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#6b7280] mb-2">Subject</label>
              <input 
                type="text" 
                required
                className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors" 
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#6b7280] mb-2">Message</label>
              <textarea 
                required
                rows={6}
                className="w-full bg-[#0a0a0a] border border-[#1f1f1f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#22c55e] transition-colors resize-none" 
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 h-full">
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0f2e1a] rounded-full flex items-center justify-center flex-shrink-0 text-[#22c55e]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-[#6b7280]">support@carzone.pk</p>
                  <p className="text-[#6b7280]">info@carzone.pk</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0f2e1a] rounded-full flex items-center justify-center flex-shrink-0 text-[#22c55e]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-[#6b7280]">+92 300 1234567</p>
                  <p className="text-[#6b7280]">+92 21 34567890</p>
                  <p className="text-xs text-[#22c55e] mt-1">Mon-Sat 9am to 6pm</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0f2e1a] rounded-full flex items-center justify-center flex-shrink-0 text-[#22c55e]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Office</h3>
                  <p className="text-[#6b7280]">
                    123 Business Avenue<br />
                    Block 6, P.E.C.H.S<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[#1f1f1f]">
              <h3 className="text-white font-medium mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {/* Social placeholders */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#22c55e] hover:text-white text-[#6b7280] transition-colors cursor-pointer">
                    <span className="sr-only">Social Link {i}</span>
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
