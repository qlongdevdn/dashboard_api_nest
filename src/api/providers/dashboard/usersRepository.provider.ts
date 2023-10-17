import { UserRepositoryImpl } from 'src/api/repositories';
import { INJECTION_SYSTEMS } from 'src/enums';
import { DataSource } from 'typeorm';

export const UsersRepositoryProvider = {
    provide: INJECTION_SYSTEMS.REPOSITORY.USERS_REPOSITORY,
    useFactory: (dataSource: DataSource) => {
        return new UserRepositoryImpl(dataSource);
    },
    inject: [INJECTION_SYSTEMS.DASHBOARD.DASHBOARD_MODULE],
};
