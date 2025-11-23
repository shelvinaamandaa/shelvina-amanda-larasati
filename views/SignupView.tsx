import React, { useState } from 'react';
import { ViewState } from '../types';
import { MapPin, User } from 'lucide-react';

interface SignupViewProps {
  onViewChange: (view: ViewState) => void;
}

const SignupView: React.FC<SignupViewProps> = ({ onViewChange }) => {
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(false);

  const handleSignup = () => {
    if (!fullName.trim()) {
      setError(true);
      return;
    }
    onViewChange('HOME');
  };

  return (
    <div className="h-full bg-soehat-blue flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-soehat-yellow/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="flex flex-col items-center mb-10 relative z-10">
        <div className="w-24 h-24 bg-soehat-green rounded-full flex items-center justify-center mb-4 shadow-xl border-4 border-white relative">
            <div className="absolute -top-1 -right-1 bg-soehat-yellow p-1.5 rounded-full border-2 border-white">
                 <MapPin size={16} className="text-soehat-blue" />
            </div>
            <span className="text-6xl font-bold text-soehat-blue">C</span>
        </div>
        <h1 className="text-4xl font-bold text-soehat-yellow mb-1 tracking-tight">CoMove</h1>
        <p className="text-white text-lg tracking-[0.2em] font-light">Soehat</p>
      </div>

      <div className="w-full space-y-4 z-10">
        <div className="bg-white/10 backdrop-blur-md p-1 rounded-2xl border border-white/20 mb-6">
            <p className="text-center text-blue-100 text-sm py-4 px-6 leading-relaxed">
                Kolaborasi Digital untuk Jalanan yang Lancar dan Aman
            </p>
        </div>

        <div className="space-y-2">
            <label className="text-white text-sm font-medium ml-1">Nama Lengkap</label>
            <div className="relative">
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value);
                        if (error) setError(false);
                    }}
                    placeholder="Masukkan nama lengkap..."
                    className={`w-full bg-white/10 border ${error ? 'border-red-400' : 'border-white/30'} rounded-xl px-4 py-3 pl-11 text-white placeholder-blue-200 outline-none focus:border-soehat-yellow focus:ring-1 focus:ring-soehat-yellow transition-all`}
                />
                <User className="absolute left-3 top-3.5 text-blue-200" size={20} />
            </div>
             {error && <p className="text-red-300 text-xs ml-1">Nama wajib diisi</p>}
        </div>

        <button 
            onClick={handleSignup}
            className="w-full bg-soehat-yellow text-soehat-blue font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-yellow-300 transition-transform transform active:scale-95 flex items-center justify-center gap-2 mt-4"
        >
            Sign Up / Masuk
        </button>
        
        <p className="text-center text-blue-200 text-xs mt-4">
            Bekerjasama dengan Dinas Perhubungan & Warga
        </p>
      </div>
    </div>
  );
};

export default SignupView;