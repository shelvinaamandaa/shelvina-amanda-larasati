import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TRAFFIC_DATA } from '../constants';
import { BarChart3 } from 'lucide-react';

const TrafficChart: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <BarChart3 size={18} className="text-soehat-blue" />
            Statistik Kepadatan
        </h3>
        <select className="text-xs bg-gray-100 border-none rounded px-2 py-1 text-gray-600 outline-none">
            <option>Hari Ini</option>
            <option>Minggu Ini</option>
        </select>
      </div>
      
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={TRAFFIC_DATA} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
                dataKey="time" 
                tick={{fontSize: 10}} 
                axisLine={false} 
                tickLine={false} 
                dy={10}
            />
            <YAxis 
                tick={{fontSize: 10}} 
                axisLine={false} 
                tickLine={false}
            />
            <Tooltip 
                cursor={{fill: '#f3f4f6'}}
                contentStyle={{ borderRadius: '8px', fontSize: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="density" fill="#000080" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex justify-center items-center gap-4 text-[10px] text-gray-500">
        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-soehat-blue rounded-full"></div> Volume Kendaraan</div>
      </div>
    </div>
  );
};

export default TrafficChart;