export type ViewState = 'SIGNUP' | 'HOME' | 'MAP' | 'FORUM' | 'REPORT' | 'POLLS';

export interface User {
  id: string;
  name: string;
  role: 'CITIZEN' | 'COLLABORATOR' | 'ADMIN';
  avatar: string;
}

export interface Report {
  id: string;
  title: string;
  status: 'RECEIVED' | 'PROCESSING' | 'DONE';
  urgency: 'LOW' | 'MEDIUM' | 'HIGH';
  timestamp: string;
  location: string;
  description?: string;
}

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  userRole: 'CITIZEN' | 'COLLABORATOR';
  text: string;
  timestamp: string;
  isMe: boolean;
}

export interface Poll {
  id: string;
  question: string;
  options: {
    id: string;
    label: string;
    votes: number;
  }[];
  totalVotes: number;
  hasVoted?: boolean;
}

export interface StatData {
  time: string;
  density: number;
}