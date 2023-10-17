import { join } from 'path';
import { ConfigsService } from 'src/config/config.service';
import { DataSource } from 'typeorm';

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
export const MongoDBConnectionService = new DataSource({
    type: 'mongodb',
    url: UrlConnection,
    useNewUrlParser: true,
    entities: [join(__dirname,'../../' ,'**', '*.entity.{ts,js}')],
    logging: true,
    synchronize: true,
});
