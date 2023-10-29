import { UsersRepository } from 'src/api/repositories';
import { ApiUsersDashBoardTml } from 'src/api/services';
import { UsersDashboardTransform } from 'src/api/transform';
import { INJECTION_SYSTEMS } from 'src/enums';

export const ApiUsersDashboardProvider = {
    provide: INJECTION_SYSTEMS.API.API_USERS_DASHBOAD_SERVICE,
    useFactory: (userRepository: UsersRepository, transformUsers: UsersDashboardTransform) => {
        return new ApiUsersDashBoardTml(userRepository, transformUsers);
    },
    inject: [INJECTION_SYSTEMS.REPOSITORY.USERS_REPOSITORY, INJECTION_SYSTEMS.TRANSFORM.DASHBOARD_TRANSFORM],
};
