import { Module } from '@nestjs/common';
import { UsersController } from 'src/api/controllers';
import { ApiUsersDashboardProvider } from 'src/api/providers';

@Module({
    providers: [
        // services
        ApiUsersDashboardProvider
    ],
    controllers: [
        UsersController
    ],
    exports: [
        ApiUsersDashboardProvider
    ]
})
export default class ApiModule { }
