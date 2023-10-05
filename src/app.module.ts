import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ApiModule from './module/api.module';
@Module({
    imports: [ConfigModule.forRoot(), ApiModule],
})
export class AppModule {}
