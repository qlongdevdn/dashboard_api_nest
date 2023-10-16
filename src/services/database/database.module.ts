import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsService } from 'src/config/config.service';

const configService = new ConfigsService();
var UrlConnection = '';
if (configService.get('APP_ENV') === 'development') {
    UrlConnection = `mongodb://${configService.get('MONGO_USER')}:${configService.get(
        'MONGO_PASSWORD'
    )}@${configService.get('MONGO_HOST')}:${Number(configService.get('MONGO_PORT'))}/${configService.get(
        'MONGO_DB'
    )}?authSource=admin`;
} else {
    UrlConnection = `mongodb+srv://${configService.get('MONGO_HOST')}:${Number(
        configService.get('MONGO_PORT')
    )}/${configService.get('MONGO_DB')}?authSource=admin`;
}
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: () => ({
                type: 'mongodb',
                url: UrlConnection,
                useNewUrlParser: true,
                entities: ['src/entities/**/*.entity.{ts,js}'],
                logging: true,
                synchronize: true,
                autoLoadEntities: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
