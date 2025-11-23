import React from 'react';
import LiveCamSection from '../components/LiveCamSection';
import TrafficChart from '../components/TrafficChart';
import { ViewState } from '../types';
import { AlertTriangle, TrendingUp, Users } from 'lucide-react';

interface HomeViewProps {
  onViewChange: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onViewChange }) => {
  return (
    <div className="p-5 pb-24">
      
      {/* Quick Status Cards */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2 no-scrollbar">
        {/* Card 1: Status Darurat (Yellow) */}
        <button 
            className="min-w-[140px] bg-soehat-yellow p-4 rounded-xl shadow-sm flex flex-col justify-between h-28 shrink-0 text-left hover:brightness-95 active:scale-95 transition-all cursor-pointer"
            onClick={() => {}} // Placeholder for future detail view
        >
            <div className="bg-white/30 w-8 h-8 rounded-full flex items-center justify-center text-blue-900">
                <AlertTriangle size={16} />
            </div>
            <div>
                <p className="text-xs text-blue-900 font-semibold mb-1">Status Darurat</p>
                <p className="text-xl font-bold text-blue-900">Aman</p>
            </div>
        </button>
        
        {/* Card 2: Indeks Polusi (White) */}
        <button 
            className="min-w-[140px] bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-28 shrink-0 text-left hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
             onClick={() => {}}
        >
             <div className="bg-blue-50 w-8 h-8 rounded-full flex items-center justify-center text-soehat-blue">
                <TrendingUp size={16} />
            </div>
            <div>
                <p className="text-xs text-gray-500 font-medium mb-1">Indeks Polusi</p>
                <p className="text-xl font-bold text-green-600">Baik</p>
            </div>
        </button>

        {/* Card 3: Partisipasi (White) */}
        <button 
            className="min-w-[140px] bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-28 shrink-0 text-left hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
             onClick={() => onViewChange('FORUM')}
        >
             <div className="bg-red-50 w-8 h-8 rounded-full flex items-center justify-center text-red-500">
                <Users size={16} />
            </div>
            <div>
                <p className="text-xs text-gray-500 font-medium mb-1">Partisipasi</p>
                <p className="text-xl font-bold text-gray-800">1.2K</p>
            </div>
        </button>
      </div>

      <LiveCamSection />

      <TrafficChart />

      {/* Quick Actions List (Menu Pertama) */}
      <div className="space-y-3 mb-6">
        <h3 className="font-bold text-gray-800 px-1">Akses Cepat</h3>
        
        <button 
            onClick={() => onViewChange('REPORT')}
            className="w-full bg-soehat-red text-white p-4 rounded-xl shadow-md flex items-center justify-between group hover:brightness-110 active:scale-95 transition-all cursor-pointer"
        >
            <span className="font-bold">Lapor Pak!</span>
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30">
                <AlertTriangle size={20} />
            </div>
        </button>

        <button 
            onClick={() => onViewChange('FORUM')}
            className="w-full bg-soehat-blue text-white p-4 rounded-xl shadow-md flex items-center justify-between group hover:bg-blue-800 active:scale-95 transition-all cursor-pointer"
        >
            <span className="font-bold">Bareng Warga (Forum)</span>
             <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30">
                <Users size={20} />
            </div>
        </button>

         <button 
            onClick={() => onViewChange('POLLS')}
            className="w-full bg-white border-2 border-soehat-green text-soehat-green p-4 rounded-xl shadow-sm flex items-center justify-between hover:bg-green-50 active:scale-95 transition-all cursor-pointer"
        >
            <span className="font-bold">Jejak Pendapat</span>
             <div className="bg-green-100 p-2 rounded-full text-soehat-green">
                <TrendingUp size={20} />
            </div>
        </button>
      </div>

    </div>
  );
};

export default HomeView;