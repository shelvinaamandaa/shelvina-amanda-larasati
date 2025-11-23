import React, { useState } from 'react';
import { INITIAL_POLLS } from '../constants';
import { Star } from 'lucide-react';

const PollsView: React.FC = () => {
  const [polls, setPolls] = useState(INITIAL_POLLS);
  const [rating, setRating] = useState(0);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleVote = (pollId: string, optionId: string) => {
    setPolls(currentPolls => 
        currentPolls.map(poll => {
            if (poll.id !== pollId || poll.hasVoted) return poll;
            
            const updatedOptions = poll.options.map(opt => 
                opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
            );
            
            return {
                ...poll,
                options: updatedOptions,
                totalVotes: poll.totalVotes + 1,
                hasVoted: true
            };
        })
    );
  };

  return (
    <div className="p-5 pb-24 space-y-8">
      
      {/* Polls Section */}
      <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-soehat-blue">Jejak Pendapat</h2>
            <span className="text-xs bg-soehat-green text-white px-2 py-0.5 rounded-full">Aktif</span>
          </div>

          <div className="space-y-4">
            {polls.map(poll => (
                <div key={poll.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4">{poll.question}</h3>
                    
                    <div className="space-y-3">
                        {poll.options.map(option => {
                            const percentage = poll.totalVotes > 0 
                                ? Math.round((option.votes / poll.totalVotes) * 100) 
                                : 0;
                            
                            return (
                                <button
                                    key={option.id}
                                    disabled={poll.hasVoted}
                                    onClick={() => handleVote(poll.id, option.id)}
                                    className="w-full relative group"
                                >
                                    {/* Background Bar */}
                                    <div className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden">
                                        <div 
                                            className={`h-full transition-all duration-1000 ${poll.hasVoted ? 'bg-blue-100' : 'bg-gray-100'}`}
                                            style={{ width: poll.hasVoted ? `${percentage}%` : '0%' }}
                                        ></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative flex justify-between items-center p-3 z-10">
                                        <span className={`text-sm font-medium ${poll.hasVoted ? 'text-soehat-blue' : 'text-gray-700'}`}>
                                            {option.label}
                                        </span>
                                        {poll.hasVoted && (
                                            <span className="text-xs font-bold text-soehat-blue">{percentage}%</span>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                    <p className="text-right text-[10px] text-gray-400 mt-2">Total Suara: {poll.totalVotes}</p>
                </div>
            ))}
          </div>
      </section>

      {/* Service Rating Section */}
      <section className="bg-gradient-to-br from-soehat-blue to-blue-900 rounded-3xl p-6 text-white text-center shadow-lg">
        {!feedbackSent ? (
            <>
                <img src="https://picsum.photos/100/100?random=user" alt="User" className="w-16 h-16 rounded-full border-4 border-white mx-auto mb-3 shadow-md"/>
                <h3 className="text-lg font-bold mb-1">Berikan Nilai Pengalamanmu!</h3>
                <p className="text-xs text-blue-200 mb-4">Seberapa puas Anda dengan respon laporan terakhir?</p>
                
                <div className="flex justify-center gap-2 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                            key={star} 
                            onClick={() => setRating(star)}
                            className="transition transform hover:scale-110"
                        >
                            <Star 
                                size={32} 
                                fill={rating >= star ? "#FFFF00" : "none"} 
                                stroke={rating >= star ? "#FFFF00" : "currentColor"}
                                className={rating >= star ? "text-soehat-yellow" : "text-gray-400"}
                            />
                        </button>
                    ))}
                </div>

                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Tuliskan pesan di sini..." 
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-sm text-white placeholder-blue-200 outline-none focus:bg-white/20"
                    />
                </div>

                <button 
                    onClick={() => rating > 0 && setFeedbackSent(true)}
                    className="bg-soehat-yellow text-soehat-blue font-bold px-8 py-2 rounded-full shadow-md hover:bg-yellow-400 transition"
                >
                    Kirim Ulasan
                </button>
            </>
        ) : (
            <div className="py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star size={40} className="text-soehat-yellow" fill="#ffff00" />
                </div>
                <h3 className="text-xl font-bold text-soehat-yellow mb-2">Terima Kasih!</h3>
                <p className="text-sm text-blue-100">Masukan Anda membantu kami menjadi lebih baik.</p>
                <button 
                    onClick={() => { setFeedbackSent(false); setRating(0); }}
                    className="mt-6 text-xs underline text-blue-200 hover:text-white"
                >
                    Isi ulasan baru
                </button>
            </div>
        )}
      </section>

    </div>
  );
};

export default PollsView;