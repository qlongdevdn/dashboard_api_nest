import { Module } from '@nestjs/common';
import { UsersController } from './controllers';

@Module({
    controllers: [UsersController],
})
export default class ApiModule {}
