import { UsersDashboardDto } from 'src/api/dtos';
import { UsersDashboardTransform } from 'src/api/transform';
import { UserDashboard } from 'src/entities';

export class UsersDashboardTransformImpl implements UsersDashboardTransform {
    transformUsersDashboard(usersDashboardDto: UsersDashboardDto): UserDashboard {
        const user = { ...usersDashboardDto } as unknown as UserDashboard;
        console.log(user);
        return user;
    }
}
