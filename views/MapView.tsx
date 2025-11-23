import React, { useState } from 'react';
import { MapPin, Navigation, Info, Layers, X, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { INITIAL_REPORTS } from '../constants';
import { Report } from '../types';

const MapView: React.FC = () => {
  const [showAlternative, setShowAlternative] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  // Mock positions for the reports on the abstract map
  const reportPositions = [
    { top: '25%', left: '65%' }, // Report 1: Simpang Patung Pesawat
    { top: '55%', left: '35%' }, // Report 2: Depan Taman Krida
    { top: '75%', left: '60%' }, // Report 3: Politeknik
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'HIGH': return 'text-red-600';
      case 'MEDIUM': return 'text-orange-500';
      default: return 'text-blue-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'DONE': return <CheckCircle2 size={16} className="text-green-500" />;
      case 'PROCESSING': return <Clock size={16} className="text-orange-500" />;
      default: return <AlertCircle size={16} className="text-gray-400" />;
    }
  };

  return (
    <div className="relative h-full flex flex-col">
       {/* Map Search Overlay */}
      <div className="absolute top-4 left-4 right-4 z-10 flex flex-col gap-2">
         <div className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-3">
            <MapPin className="text-soehat-red" size={20} />
            <div className="flex-1">
                <p className="text-[10px] text-gray-400">Lokasi Anda</p>
                <p className="font-bold text-sm text-gray-800">Jl. Soekarno Hatta No. 12, Malang</p>
            </div>
         </div>
         <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
             <span className="bg-white border border-soehat-blue text-soehat-blue px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm cursor-pointer active:bg-blue-50">Restoran</span>
             <span className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm cursor-pointer active:bg-gray-50">Hotel</span>
             <span className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm cursor-pointer active:bg-gray-50">SPBU</span>
             <span className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-sm cursor-pointer active:bg-gray-50">Halte</span>
         </div>
      </div>

      {/* Map Background Container */}
      <div className="flex-1 bg-gray-200 relative overflow-hidden" onClick={() => setSelectedReport(null)}>
        {/* Abstract Route Lines Overlay */}
        {/* Main Route */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80">
            <path 
                d="M 180 0 L 180 350 L 350 350" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="20" 
                strokeLinecap="round"
                className="drop-shadow-sm opacity-50"
            />
             <path 
                d="M 180 0 L 180 350 L 350 350" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="14" 
                strokeLinecap="round"
            />
            {/* Alternative Route */}
            {showAlternative && (
                <>
                <path 
                    d="M 180 50 Q 100 150 100 350" 
                    fill="none" 
                    stroke="#22c55e" 
                    strokeWidth="16" 
                    strokeLinecap="round" 
                    className="opacity-40"
                />
                 <path 
                    d="M 180 50 Q 100 150 100 350" 
                    fill="none" 
                    stroke="#22c55e" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    strokeDasharray="10,5"
                    className="animate-pulse"
                />
                </>
            )}
        </svg>

        {/* Traffic Indicators */}
        <div className="absolute top-[40%] left-[45%] transform -translate-x-1/2">
            <div className="w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        {/* User Location Pin */}
        <div className="absolute top-[45%] left-[45%] transform -translate-x-1/2 -translate-y-full z-10 pointer-events-none">
             <div className="relative">
                 <div className="text-soehat-blue drop-shadow-2xl">
                    <MapPin size={48} fill="#000080" className="stroke-white stroke-2" />
                 </div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-sm"></div>
             </div>
        </div>

        {/* Report Pins */}
        {INITIAL_REPORTS.map((report, index) => {
            const pos = reportPositions[index] || { top: '50%', left: '50%' };
            return (
                <div 
                    key={report.id}
                    className="absolute transform -translate-x-1/2 -translate-y-full z-20 cursor-pointer group transition-transform hover:scale-110 active:scale-95"
                    style={{ top: pos.top, left: pos.left }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedReport(report);
                    }}
                >
                    <div className={`relative ${getUrgencyColor(report.urgency)} drop-shadow-lg`}>
                        <MapPin size={40} fill="currentColor" className="stroke-white stroke-2" />
                        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-white font-bold text-[10px]">!</div>
                    </div>
                </div>
            );
        })}

        {/* Alternative Route Toggle */}
        <button 
            onClick={(e) => { e.stopPropagation(); setShowAlternative(!showAlternative); }}
            className={`absolute top-32 right-4 p-3 rounded-full shadow-lg z-10 transition-colors ${showAlternative ? 'bg-soehat-green text-white' : 'bg-white text-gray-600'}`}
        >
            <Layers size={20} />
        </button>

        {/* Floating Traffic Info (Hidden when report is selected) */}
        {!selectedReport && (
            <div className="absolute bottom-6 left-4 right-4 bg-white p-4 rounded-xl shadow-xl border-l-4 border-soehat-red z-10 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-gray-800">Kepadatan Tinggi</h4>
                        <p className="text-xs text-gray-500 mt-1">Terdeteksi kemacetan 500m di depan (Jembatan Soehat).</p>
                        {showAlternative && <p className="text-xs text-soehat-green font-bold mt-1">Jalur alternatif tersedia via Jl. Cengkeh.</p>}
                    </div>
                    <div 
                        onClick={(e) => { e.stopPropagation(); setShowAlternative(!showAlternative); }}
                        className={`p-2 rounded-full cursor-pointer transition ${showAlternative ? 'bg-soehat-green text-white' : 'bg-gray-100 text-soehat-blue'}`}
                    >
                        <Navigation size={20} />
                    </div>
                </div>
            </div>
        )}

        {/* Selected Report Detail Overlay */}
        {selectedReport && (
             <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-30 animate-in slide-in-from-bottom-10 duration-300">
                <div className="p-5 pb-8">
                    {/* Handle Bar */}
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex gap-2 items-center">
                            <span className={`px-2 py-1 rounded text-[10px] font-bold ${
                                selectedReport.urgency === 'HIGH' ? 'bg-red-100 text-red-600' : 
                                selectedReport.urgency === 'MEDIUM' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                            }`}>
                                {selectedReport.urgency === 'HIGH' ? 'DARURAT' : selectedReport.urgency === 'MEDIUM' ? 'WASPADA' : 'INFO'}
                            </span>
                             <span className="text-[10px] text-gray-400 flex items-center gap-1">
                                <Clock size={10} /> {selectedReport.timestamp}
                             </span>
                        </div>
                        <button 
                            onClick={() => setSelectedReport(null)}
                            className="bg-gray-100 p-1 rounded-full text-gray-500 hover:bg-gray-200"
                        >
                            <X size={16} />
                        </button>
                    </div>

                    <h3 className="font-bold text-lg text-gray-800 leading-tight mb-2 pr-4">{selectedReport.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                        <MapPin size={14} className="text-soehat-red" />
                        {selectedReport.location}
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mb-4">
                        <p className="text-sm text-gray-700">{selectedReport.description}</p>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                         <div className="flex items-center gap-2">
                             <div className="bg-white border border-gray-100 shadow-sm p-1.5 rounded-full">
                                {getStatusIcon(selectedReport.status)}
                             </div>
                             <div>
                                 <p className="text-[10px] text-gray-400">Status Laporan</p>
                                 <p className={`text-xs font-bold ${
                                      selectedReport.status === 'DONE' ? 'text-green-600' : 
                                      selectedReport.status === 'PROCESSING' ? 'text-orange-600' : 'text-gray-500'
                                 }`}>
                                     {selectedReport.status === 'DONE' ? 'Sudah Ditangani' : 
                                      selectedReport.status === 'PROCESSING' ? 'Sedang Diproses' : 'Laporan Diterima'}
                                 </p>
                             </div>
                         </div>
                         <button className="bg-soehat-blue text-white text-xs font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition">
                             Lihat Foto
                         </button>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default MapView;