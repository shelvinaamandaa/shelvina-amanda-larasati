import React, { useState } from 'react';
import { LayoutDashboard, Map, MessageCircle, FileText, Vote } from 'lucide-react';
import HomeView from './views/HomeView';
import MapView from './views/MapView';
import ForumView from './views/ForumView';
import ReportView from './views/ReportView';
import PollsView from './views/PollsView';
import SignupView from './views/SignupView';
import Header from './components/Header';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('SIGNUP');

  const renderView = () => {
    switch (currentView) {
      case 'SIGNUP':
        return <SignupView onViewChange={setCurrentView} />;
      case 'HOME':
        return <HomeView onViewChange={setCurrentView} />;
      case 'MAP':
        return <MapView />;
      case 'FORUM':
        return <ForumView />;
      case 'REPORT':
        return <ReportView />;
      case 'POLLS':
        return <PollsView />;
      default:
        return <HomeView onViewChange={setCurrentView} />;
    }
  };

  const showNav = currentView !== 'SIGNUP';

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-md bg-white h-screen flex flex-col shadow-2xl relative overflow-hidden">
        
        {showNav && <Header onViewChange={setCurrentView} />}

        {/* Main Content Area */}
        <main className={`flex-1 overflow-y-auto bg-gray-50 ${showNav ? 'pb-20' : ''} scroll-smooth`}>
          {renderView()}
        </main>

        {/* Bottom Navigation */}
        {showNav && (
          <nav className="absolute bottom-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
            <div className="flex justify-around items-center h-16">
              <button
                onClick={() => setCurrentView('HOME')}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  currentView === 'HOME' ? 'text-soehat-blue' : 'text-gray-400'
                }`}
              >
                <LayoutDashboard size={24} strokeWidth={currentView === 'HOME' ? 2.5 : 2} />
                <span className="text-[10px] font-medium">Beranda</span>
              </button>

              <button
                onClick={() => setCurrentView('MAP')}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  currentView === 'MAP' ? 'text-soehat-blue' : 'text-gray-400'
                }`}
              >
                <Map size={24} strokeWidth={currentView === 'MAP' ? 2.5 : 2} />
                <span className="text-[10px] font-medium">Peta</span>
              </button>

              {/* Central Main Action - Report */}
              <div className="relative -top-6">
                <button
                  onClick={() => setCurrentView('REPORT')}
                  className="bg-soehat-red text-white p-4 rounded-full shadow-lg border-4 border-gray-100 hover:scale-105 transition-transform active:scale-95"
                >
                  <FileText size={28} />
                </button>
              </div>

              <button
                onClick={() => setCurrentView('FORUM')}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  currentView === 'FORUM' ? 'text-soehat-blue' : 'text-gray-400'
                }`}
              >
                <MessageCircle size={24} strokeWidth={currentView === 'FORUM' ? 2.5 : 2} />
                <span className="text-[10px] font-medium">Forum</span>
              </button>

              <button
                onClick={() => setCurrentView('POLLS')}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  currentView === 'POLLS' ? 'text-soehat-blue' : 'text-gray-400'
                }`}
              >
                <Vote size={24} strokeWidth={currentView === 'POLLS' ? 2.5 : 2} />
                <span className="text-[10px] font-medium">Voting</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default App;