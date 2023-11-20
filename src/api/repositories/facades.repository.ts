import { UserDashboard } from 'src/entities';

export interface UsersRepository {
    find(): Promise<UserDashboard[]>;
    deleteByIds(userIds: string[]): Promise<boolean>;
}
