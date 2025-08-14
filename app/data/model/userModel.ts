// app/data/model/user.ts
import { UserRole } from '@/app/enum/userRole';

export interface User {
  username: string;
  password: string;
  role: UserRole;
  email?: string;
  phone?: string;
}
