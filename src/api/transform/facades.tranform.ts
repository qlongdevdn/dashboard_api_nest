import { UsersDashboardDto } from 'src/api/dtos';
import { UserDashboard } from 'src/entities';

export interface UsersDashboardTransform {
    transformUsersDashboard(usersDashboardDto: UsersDashboardDto): UserDashboard;
}
