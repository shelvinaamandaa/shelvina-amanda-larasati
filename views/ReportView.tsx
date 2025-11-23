import React, { useState } from 'react';
import { Camera, MapPin, AlertCircle, CheckCircle2, Clock, Star, Shield, Truck, HardHat, Ambulance } from 'lucide-react';
import { INITIAL_REPORTS } from '../constants';

const ReportView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'FORM' | 'HISTORY' | 'RATINGS'>('FORM');
  const [history] = useState(INITIAL_REPORTS);

  // Mock data for Collaborator Ratings
  const ratings = [
    {
      id: 1,
      name: 'Dishub Kota Malang',
      role: 'Pengatur Lalu Lintas',
      rating: 4.7,
      reviews: 1240,
      icon: <Truck size={24} className="text-white" />,
      color: 'bg-blue-600',
      stats: { speed: 90, courtesy: 85, solution: 88 }
    },
    {
      id: 2,
      name: 'Satlantas Polresta',
      role: 'Penegak Hukum',
      rating: 4.5,
      reviews: 856,
      icon: <Shield size={24} className="text-white" />,
      color: 'bg-yellow-600',
      stats: { speed: 82, courtesy: 80, solution: 90 }
    },
    {
      id: 3,
      name: 'Dinas PU (Binamarga)',
      role: 'Infrastruktur Jalan',
      rating: 3.8,
      reviews: 430,
      icon: <HardHat size={24} className="text-white" />,
      color: 'bg-orange-600',
      stats: { speed: 60, courtesy: 75, solution: 95 }
    },
    {
      id: 4,
      name: 'RSUB & Ambulans',
      role: 'Gawat Darurat',
      rating: 4.9,
      reviews: 310,
      icon: <Ambulance size={24} className="text-white" />,
      color: 'bg-red-600',
      stats: { speed: 98, courtesy: 95, solution: 98 }
    }
  ];

  return (
    <div className="p-5 pb-24">
      {/* Toggle Tabs */}
      <div className="flex p-1 bg-gray-200 rounded-lg mb-6 overflow-x-auto no-scrollbar">
        <button 
            className={`flex-1 min-w-[90px] py-2 text-xs sm:text-sm font-bold rounded-md transition cursor-pointer whitespace-nowrap ${activeTab === 'FORM' ? 'bg-white text-soehat-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('FORM')}
        >
            Buat Laporan
        </button>
        <button 
            className={`flex-1 min-w-[90px] py-2 text-xs sm:text-sm font-bold rounded-md transition cursor-pointer whitespace-nowrap ${activeTab === 'HISTORY' ? 'bg-white text-soehat-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('HISTORY')}
        >
            Riwayat
        </button>
        <button 
            className={`flex-1 min-w-[100px] py-2 text-xs sm:text-sm font-bold rounded-md transition cursor-pointer whitespace-nowrap ${activeTab === 'RATINGS' ? 'bg-white text-soehat-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('RATINGS')}
        >
            Rating Petugas
        </button>
      </div>

      {activeTab === 'FORM' && (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
           <div className="text-center mb-6">
               <div className="w-16 h-16 bg-red-100 text-soehat-red rounded-full flex items-center justify-center mx-auto mb-3">
                   <AlertCircle size={32} />
               </div>
               <h2 className="text-xl font-bold text-gray-800">Lapor Pak!</h2>
               <p className="text-xs text-gray-500">Laporkan masalah infrastruktur atau keamanan.</p>
           </div>

           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                   <label className="block text-xs font-bold text-gray-700 mb-1">Kategori</label>
                   <select className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm outline-none focus:border-soehat-blue focus:ring-1 focus:ring-soehat-blue transition-all cursor-pointer">
                       <option>Kemacetan Lalu Lintas</option>
                       <option>Jalan Rusak</option>
                       <option>Kecelakaan</option>
                       <option>Fasilitas Umum</option>
                   </select>
               </div>

               <div>
                   <label className="block text-xs font-bold text-gray-700 mb-1">Lokasi Kejadian</label>
                   <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="Deteksi otomatis atau ketik..." 
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 pl-10 text-sm outline-none focus:border-soehat-blue focus:ring-1 focus:ring-soehat-blue transition-all"
                        />
                        <MapPin className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-soehat-blue transition-colors" size={16} />
                   </div>
               </div>

               <div>
                   <label className="block text-xs font-bold text-gray-700 mb-1">Bukti Foto</label>
                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-soehat-blue hover:text-soehat-blue cursor-pointer transition-all active:bg-gray-100">
                       <Camera size={24} className="mb-2" />
                       <span className="text-xs">Ketuk untuk ambil foto</span>
                   </div>
               </div>

               <div>
                   <label className="block text-xs font-bold text-gray-700 mb-1">Deskripsi Singkat</label>
                   <textarea 
                        rows={3}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm outline-none focus:border-soehat-blue focus:ring-1 focus:ring-soehat-blue transition-all resize-none"
                        placeholder="Jelaskan detail masalah..."
                   ></textarea>
               </div>

               <button className="w-full bg-soehat-blue text-white font-bold py-3 rounded-xl shadow-lg hover:bg-blue-800 transition-all transform active:scale-95 cursor-pointer">
                   Kirim Laporan
               </button>
           </form>
        </div>
      )}

      {activeTab === 'HISTORY' && (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {history.map((report) => (
                <div key={report.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                report.urgency === 'HIGH' ? 'bg-red-100 text-red-600' : 
                                report.urgency === 'MEDIUM' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                            }`}>
                                {report.urgency}
                            </span>
                            <span className="text-[10px] text-gray-400">{report.timestamp}</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-800">{report.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 truncate max-w-[200px]">{report.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        {report.status === 'DONE' && <CheckCircle2 className="text-green-500" size={20} />}
                        {report.status === 'PROCESSING' && <Clock className="text-orange-500" size={20} />}
                        {report.status === 'RECEIVED' && <AlertCircle className="text-gray-400" size={20} />}
                        
                        <span className={`text-[10px] font-medium ${
                             report.status === 'DONE' ? 'text-green-600' : 
                             report.status === 'PROCESSING' ? 'text-orange-600' : 'text-gray-500'
                        }`}>
                            {report.status === 'DONE' ? 'Selesai' : 
                             report.status === 'PROCESSING' ? 'Proses' : 'Diterima'}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      )}

      {activeTab === 'RATINGS' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-4">
                  <h3 className="text-sm font-bold text-soehat-blue">Kepuasan Pengguna</h3>
                  <p className="text-xs text-gray-600 mt-1">
                      Penilaian masyarakat terhadap kinerja kolaborator (Dishub, Polisi, dll) berdasarkan respons laporan bulan ini.
                  </p>
              </div>

              {ratings.map((agency) => (
                  <div key={agency.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                      <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${agency.color}`}>
                                  {agency.icon}
                              </div>
                              <div>
                                  <h4 className="font-bold text-gray-800 text-sm">{agency.name}</h4>
                                  <p className="text-xs text-gray-500">{agency.role}</p>
                              </div>
                          </div>
                          <div className="text-right">
                              <div className="flex items-center justify-end gap-1">
                                  <Star size={16} className="text-soehat-yellow fill-current" />
                                  <span className="font-bold text-lg text-gray-800">{agency.rating}</span>
                              </div>
                              <p className="text-[10px] text-gray-400">{agency.reviews} Ulasan</p>
                          </div>
                      </div>

                      {/* Stats Bars */}
                      <div className="space-y-2">
                          <div>
                              <div className="flex justify-between text-[10px] mb-1">
                                  <span className="text-gray-500">Kecepatan Respon</span>
                                  <span className="font-bold text-gray-700">{agency.stats.speed}%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-1.5">
                                  <div className="bg-green-500 h-1.5 rounded-full" style={{width: `${agency.stats.speed}%`}}></div>
                              </div>
                          </div>
                          <div>
                              <div className="flex justify-between text-[10px] mb-1">
                                  <span className="text-gray-500">Keramahan Petugas</span>
                                  <span className="font-bold text-gray-700">{agency.stats.courtesy}%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-1.5">
                                  <div className="bg-blue-500 h-1.5 rounded-full" style={{width: `${agency.stats.courtesy}%`}}></div>
                              </div>
                          </div>
                          <div>
                              <div className="flex justify-between text-[10px] mb-1">
                                  <span className="text-gray-500">Solusi Tuntas</span>
                                  <span className="font-bold text-gray-700">{agency.stats.solution}%</span>
                              </div>
                              <div className="w-full bg-gray-100 rounded-full h-1.5">
                                  <div className="bg-purple-500 h-1.5 rounded-full" style={{width: `${agency.stats.solution}%`}}></div>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      )}
    </div>
  );
};

export default ReportView;