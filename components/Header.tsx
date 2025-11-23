import React, { useState } from 'react';
import { User, Bell, X, Settings, LogOut, Info, CheckCircle, AlertTriangle, MessageCircle, FileText, Download } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  onViewChange?: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ onViewChange }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);

  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const toggleNotifications = () => {
      setShowNotifications(!showNotifications);
      if (!showNotifications) setShowProfile(false);
  };

  const toggleProfile = () => {
      setShowProfile(!showProfile);
      if (!showProfile) setShowNotifications(false);
  };

  return (
    <>
    <header className="bg-soehat-blue text-white p-5 rounded-b-[2rem] shadow-lg z-20 relative">
      <div className="flex justify-between items-center mb-4 relative z-30">
        <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-soehat-blue font-bold text-xl border-2 border-soehat-yellow">
                C
            </div>
            <div>
                <h1 className="font-bold text-lg leading-none text-soehat-yellow">CoMove</h1>
                <span className="text-sm font-light tracking-widest">Soehat</span>
            </div>
        </div>
        <div className="flex space-x-2 relative">
            {/* Quick Action: Lapor */}
            <button 
                onClick={() => onViewChange && onViewChange('REPORT')}
                className="p-2 bg-soehat-red text-white rounded-full hover:bg-red-600 transition shadow-sm"
                title="Lapor Cepat"
            >
                <FileText size={18} />
            </button>

            {/* Quick Action: Chat */}
             <button 
                onClick={() => onViewChange && onViewChange('FORUM')}
                className="p-2 bg-white text-soehat-blue rounded-full hover:bg-blue-50 transition shadow-sm"
                title="Chat Forum"
            >
                <MessageCircle size={18} />
            </button>

            {/* Notification Button */}
            <button 
                onClick={toggleNotifications}
                className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition relative"
            >
                <Bell size={18} />
                <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-blue-800"></span>
            </button>

            {/* Profile Button */}
            <button 
                onClick={toggleProfile}
                className="p-2 bg-soehat-yellow text-soehat-blue rounded-full hover:bg-yellow-400 transition"
            >
                <User size={18} />
            </button>

             {/* Notifications Dropdown */}
             {showNotifications && (
                 <div className="absolute top-12 right-0 w-72 bg-white rounded-xl shadow-xl text-gray-800 overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                     <div className="bg-gray-50 p-3 border-b border-gray-100 flex justify-between items-center">
                         <h3 className="font-bold text-sm">Notifikasi</h3>
                         <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-gray-600"><X size={14}/></button>
                     </div>
                     <div className="max-h-64 overflow-y-auto">
                         <div className="p-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition">
                             <div className="flex gap-2">
                                 <div className="mt-1 text-green-500"><CheckCircle size={14} /></div>
                                 <div>
                                     <p className="text-xs font-bold">Laporan Selesai</p>
                                     <p className="text-[10px] text-gray-500 mt-0.5">Laporan lubang jalan di Jl. Soekarno Hatta telah ditangani.</p>
                                     <p className="text-[10px] text-gray-400 mt-1">10 menit yang lalu</p>
                                 </div>
                             </div>
                         </div>
                         <div className="p-3 border-b border-gray-100 hover:bg-blue-50 cursor-pointer transition">
                             <div className="flex gap-2">
                                 <div className="mt-1 text-orange-500"><AlertTriangle size={14} /></div>
                                 <div>
                                     <p className="text-xs font-bold">Peringatan Macet</p>
                                     <p className="text-[10px] text-gray-500 mt-0.5">Kepadatan tinggi terdeteksi di Simpang Patung Pesawat.</p>
                                     <p className="text-[10px] text-gray-400 mt-1">1 jam yang lalu</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             )}

            {/* Profile Dropdown */}
            {showProfile && (
                <div className="absolute top-12 right-0 w-64 bg-white rounded-xl shadow-xl text-gray-800 overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="p-4 flex flex-col items-center border-b border-gray-100 bg-gray-50">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-soehat-blue font-bold text-2xl border-2 border-soehat-yellow mb-2 shadow-sm">
                            C
                        </div>
                        <h3 className="font-bold text-gray-800">Warga Soehat</h3>
                        <p className="text-xs text-gray-500">warga@soehat.com</p>
                    </div>
                    <div className="p-2 space-y-1">
                         <button 
                            onClick={() => { setShowInstallModal(true); setShowProfile(false); }}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-soehat-blue bg-blue-50 hover:bg-blue-100 rounded-lg transition font-medium"
                        >
                            <Download size={16} /> Install App
                        </button>
                        <div className="h-px bg-gray-100 my-1"></div>
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition">
                            <User size={16} /> Profil Saya
                        </button>
                         <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition">
                            <Settings size={16} /> Pengaturan
                        </button>
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition">
                            <Info size={16} /> Bantuan
                        </button>
                        <div className="h-px bg-gray-100 my-1"></div>
                        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition font-medium">
                            <LogOut size={16} /> Keluar
                        </button>
                    </div>
                </div>
            )}

        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between border border-white/20 relative z-10">
        <div>
            <p className="text-xs text-gray-200">Halo, Apa Kabar?</p>
            <p className="font-semibold text-sm">Warga Soehat</p>
        </div>
        <div className="text-right">
             <p className="text-[10px] text-gray-300">Hari ini</p>
             <p className="text-xs font-medium text-soehat-yellow">{currentDate}</p>
        </div>
      </div>
      
      {/* Overlay to close dropdowns when clicking outside (simple implementation) */}
      {(showNotifications || showProfile) && (
          <div 
            className="fixed inset-0 z-10 bg-transparent" 
            onClick={() => { setShowNotifications(false); setShowProfile(false); }} 
          />
      )}
    </header>

    {/* Install App Modal */}
    {showInstallModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative shadow-2xl">
                <button 
                    onClick={() => setShowInstallModal(false)} 
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 p-1 rounded-full"
                >
                    <X size={20} />
                </button>
                <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 text-soehat-blue border-2 border-soehat-yellow rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <Download size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Install CoMove Soehat</h3>
                    <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                        Aplikasi ini berbasis web (PWA). Simpan ke layar utama HP Anda untuk akses lebih cepat.
                    </p>
                    
                    <div className="text-left space-y-3 text-sm">
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-1.5 py-0.5 rounded">iOS</span>
                                <p className="font-bold text-gray-800 text-xs">Safari (iPhone/iPad)</p>
                            </div>
                            <p className="text-xs text-gray-500">Ketuk tombol <span className="font-bold text-soehat-blue">Share</span> di browser, lalu pilih <span className="font-bold text-soehat-blue">Add to Home Screen</span>.</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Android</span>
                                <p className="font-bold text-gray-800 text-xs">Chrome</p>
                            </div>
                            <p className="text-xs text-gray-500">Ketuk menu <span className="font-bold text-soehat-blue">Tiga Titik</span> di pojok kanan atas, lalu pilih <span className="font-bold text-soehat-blue">Install App</span> atau <span className="font-bold text-soehat-blue">Add to Home Screen</span>.</p>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => setShowInstallModal(false)} 
                        className="mt-6 w-full bg-soehat-blue text-white font-bold py-3 rounded-xl shadow-lg hover:bg-blue-800 transition transform active:scale-95"
                    >
                        Siap, Mengerti!
                    </button>
                </div>
            </div>
        </div>
    )}
    </>
  );
};

export default Header;