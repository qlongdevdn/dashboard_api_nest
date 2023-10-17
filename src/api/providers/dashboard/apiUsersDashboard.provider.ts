import { UsersRepository } from 'src/api/repositories';
import { ApiUsersDashBoardTml } from 'src/api/services';
import { INJECTION_SYSTEMS } from 'src/enums';

export const ApiUsersDashboardProvider = {
    provide: INJECTION_SYSTEMS.API.API_USERS_DASHBOAD_SERVICE,
    useFactory: (userRepository: UsersRepository) => {
        return new ApiUsersDashBoardTml(userRepository);
    },
    inject: [INJECTION_SYSTEMS.REPOSITORY.USERS_REPOSITORY],
};
