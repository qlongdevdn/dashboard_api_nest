import { Module } from '@nestjs/common';
import { UsersController } from 'src/api/controllers';
import { ApiUsersDashboardProvider, TransformUsersDashboardProvider, UsersRepositoryProvider } from 'src/api/providers';
import DatabaseModule from 'src/services/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [
        // services
        ApiUsersDashboardProvider,
        UsersRepositoryProvider,
        TransformUsersDashboardProvider,
    ],
    controllers: [UsersController],
    exports: [ApiUsersDashboardProvider],
})
export default class ApiModule {}
