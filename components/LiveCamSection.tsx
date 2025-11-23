import React, { useState } from 'react';
import { Video, PlayCircle, X, Maximize2 } from 'lucide-react';

const LiveCamSection: React.FC = () => {
  const [selectedCam, setSelectedCam] = useState<{name: string, url: string} | null>(null);

  const cams = [
    { 
        name: 'Simpang Patung Pesawat', 
        // Placeholder for CCTV feed
        url: 'https://placehold.co/600x340/111827/FFFFFF?text=CCTV+Patung+Pesawat' 
    },
    { 
        name: 'Jembatan Soehat', 
        // Placeholder for CCTV feed
        url: 'https://placehold.co/600x340/111827/FFFFFF?text=CCTV+Jembatan+Soehat' 
    }
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-soehat-blue font-bold text-lg flex items-center gap-2">
          <Video className="text-soehat-red" size={20} />
          Live Cam Soehat
        </h2>
        <span className="text-xs text-green-600 animate-pulse font-semibold">● LIVE NOW</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {cams.map((cam, index) => (
            <div 
                key={index}
                onClick={() => setSelectedCam(cam)}
                className="relative rounded-xl overflow-hidden shadow-md aspect-video bg-gray-900 group cursor-pointer border border-gray-100 hover:shadow-lg transition-all"
            >
              <img 
                src={cam.url} 
                alt={cam.name} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
                  <PlayCircle className="text-white opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-300 drop-shadow-lg" size={32} />
              </div>
              <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                  {cam.name}
              </div>
            </div>
        ))}
      </div>

      {/* Fullscreen Video Modal */}
      {selectedCam && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 animate-in fade-in duration-200 p-4">
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedCam(null); }}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
              >
                  <X size={32} />
              </button>

              <div className="w-full max-w-2xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <div className="aspect-video relative bg-black">
                       <img src={selectedCam.url} alt="Live" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 flex items-center justify-center">
                           {/* Simulate Loading/Buffering or just Play Icon */}
                           <div className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-0"></div>
                       </div>
                       
                       {/* Overlay Info */}
                       <div className="absolute top-4 left-4 flex items-center gap-3">
                            <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                LIVE
                            </div>
                            <h3 className="text-white font-bold text-shadow-lg">{selectedCam.name}</h3>
                       </div>

                       <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <div className="text-white/80 text-[10px]">
                                <p>Kecepatan: 24 KB/s</p>
                                <p>Resolusi: 1080p</p>
                            </div>
                            <Maximize2 className="text-white" size={20} />
                       </div>
                  </div>
                  <div className="p-4 bg-gray-800 text-white border-t border-gray-700">
                      <h3 className="font-bold">Pemantauan CCTV Real-time</h3>
                      <p className="text-xs text-gray-400 mt-1">
                          Tayangan langsung dari {selectedCam.name}. Pantau kondisi lalu lintas terkini untuk perjalanan yang lebih aman.
                      </p>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default LiveCamSection;