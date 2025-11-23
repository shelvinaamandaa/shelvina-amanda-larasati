import { Report, ChatMessage, Poll, StatData } from './types';

export const INITIAL_REPORTS: Report[] = [
  {
    id: '1',
    title: 'Lampu Merah Mati di Simpang Patung Pesawat',
    status: 'PROCESSING',
    urgency: 'HIGH',
    timestamp: '10:30 WIB',
    location: 'Simpang Patung Pesawat',
    description: 'Menyebabkan kemacetan panjang di Jl. Soekarno Hatta.'
  },
  {
    id: '2',
    title: 'Parkir Liar Depan Taman Krida',
    status: 'RECEIVED',
    urgency: 'MEDIUM',
    timestamp: '09:15 WIB',
    location: 'Jl. Soekarno Hatta',
    description: 'Mohon ditertibkan, memakan bahu jalan.'
  },
  {
    id: '3',
    title: 'Lubang Jalan',
    status: 'DONE',
    urgency: 'LOW',
    timestamp: 'Kemarin',
    location: 'Jl. Soekarno Hatta',
    description: 'Sudah ditambal dekat Politeknik.'
  }
];

export const MOCK_CHATS: ChatMessage[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Budi Santoso',
    userRole: 'CITIZEN',
    text: 'Selamat pagi, untuk area Soekarno Hatta bawah apakah macet?',
    timestamp: '08:00',
    isMe: true
  },
  {
    id: '2',
    userId: 'collab1',
    userName: 'Petugas Dishub',
    userRole: 'COLLABORATOR',
    text: 'Selamat pagi Pak Budi. Pantauan kami di Soehat ramai lancar, ada kepadatan sedikit di putaran u-turn.',
    timestamp: '08:05',
    isMe: false
  },
  {
    id: '3',
    userId: 'user2',
    userName: 'Siti Aminah',
    userRole: 'CITIZEN',
    text: 'Terima kasih infonya pak!',
    timestamp: '08:10',
    isMe: false
  }
];

export const INITIAL_POLLS: Poll[] = [
  {
    id: 'p1',
    question: 'Bagaimana kualitas penanganan lalu lintas minggu ini?',
    totalVotes: 1240,
    options: [
      { id: 'opt1', label: 'Sangat Baik', votes: 450 },
      { id: 'opt2', label: 'Cukup', votes: 600 },
      { id: 'opt3', label: 'Kurang', votes: 190 },
    ]
  },
  {
    id: 'p2',
    question: 'Setujukah Anda dengan rencana Car Free Night Sabtu ini?',
    totalVotes: 850,
    options: [
      { id: 'optA', label: 'Setuju', votes: 700 },
      { id: 'optB', label: 'Tidak Setuju', votes: 150 },
    ]
  }
];

export const TRAFFIC_DATA: StatData[] = [
  { time: '06:00', density: 20 },
  { time: '08:00', density: 85 },
  { time: '10:00', density: 60 },
  { time: '12:00', density: 75 },
  { time: '14:00', density: 50 },
  { time: '16:00', density: 90 },
  { time: '18:00', density: 95 },
  { time: '20:00', density: 40 },
];