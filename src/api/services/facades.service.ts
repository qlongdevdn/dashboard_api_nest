import { ApiResponseDetails, UsersDashboardDto } from 'src/api/dtos';
import { UserDashboard } from 'src/entities';

export interface ApiUsersDashBoardService {
    listUsers(): Promise<ApiResponseDetails<UserDashboard[]>>;
    createUsers(usersDashboardDto: UsersDashboardDto): Promise<ApiResponseDetails<UserDashboard>>;
}
