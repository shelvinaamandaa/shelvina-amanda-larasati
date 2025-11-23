import React, { useState } from 'react';
import { MOCK_CHATS } from '../constants';
import { ChatMessage } from '../types';
import { Send, Image as ImageIcon, MoreVertical, ShieldCheck } from 'lucide-react';

const ForumView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_CHATS);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    const msg: ChatMessage = {
      id: Date.now().toString(),
      userId: 'me',
      userName: 'Warga Soehat',
      userRole: 'CITIZEN',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };
    
    setMessages([...messages, msg]);
    setNewMessage('');
    
    // Simulate auto-response for interaction demo
    setTimeout(() => {
        const reply: ChatMessage = {
            id: (Date.now() + 1).toString(),
            userId: 'bot',
            userName: 'Admin Dishub',
            userRole: 'COLLABORATOR',
            text: 'Terima kasih atas laporannya, akan segera kami teruskan ke tim lapangan.',
            timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            isMe: false
        }
        setMessages(prev => [...prev, reply]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Forum Header */}
      <div className="bg-white p-4 shadow-sm border-b sticky top-0 z-20 flex justify-between items-center">
        <div>
            <h2 className="font-bold text-soehat-blue text-lg">Forum Warga x Kolaborator</h2>
            <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Dishub Online
            </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[80%] ${msg.isMe ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
               {/* Avatar */}
               <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                   msg.userRole === 'COLLABORATOR' ? 'bg-soehat-blue text-white' : 'bg-gray-200 text-gray-600'
               }`}>
                  {msg.userRole === 'COLLABORATOR' ? <ShieldCheck size={14} /> : msg.userName.charAt(0)}
               </div>

               {/* Bubble */}
               <div className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                   <span className="text-[10px] text-gray-500 mb-1 px-1">
                        {msg.userName} • {msg.userRole === 'COLLABORATOR' ? 'Petugas' : 'Warga'}
                   </span>
                   <div className={`p-3 rounded-2xl shadow-sm text-sm ${
                       msg.isMe 
                       ? 'bg-soehat-red text-white rounded-tr-none' 
                       : msg.userRole === 'COLLABORATOR' 
                            ? 'bg-soehat-blue text-white rounded-tl-none' 
                            : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                   }`}>
                       {msg.text}
                   </div>
                   <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.timestamp}</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-gray-200 pb-20 sticky bottom-0 z-20">
        <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">
                <ImageIcon size={20} />
            </button>
            <input 
                type="text" 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tulis pesan di sini..."
                className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-soehat-blue outline-none"
            />
            <button 
                onClick={handleSend}
                className="p-2 bg-soehat-blue text-white rounded-full hover:bg-blue-800 transition shadow-md"
            >
                <Send size={18} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default ForumView;