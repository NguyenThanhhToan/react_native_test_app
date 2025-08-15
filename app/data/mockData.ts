import { User } from '@/app/data/model/userModel';
import { UserRole } from '@/app/enum/userRole';

export const mockUsers: User[] = [
  { username: 'admin', password: '1', role: UserRole.Admin },
  { username: 'user1', password: '1', role: UserRole.User },
  { username: 'user2', password: '1', role: UserRole.User },
];
