import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ApiModule from './api/api.module';
import { DatabaseModule } from 'src/services';
@Module({
    imports: [
        ConfigModule.forRoot(), 
        ApiModule,
        DatabaseModule
    ],
})
export class AppModule {}
