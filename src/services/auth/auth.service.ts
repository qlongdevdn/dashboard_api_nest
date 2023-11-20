import { JwtModule } from '@nestjs/jwt';
import fs from 'fs';
import { ConfigsService } from 'src/config/config.service';

const configService = new ConfigsService();
const APP_PATH_JWT_FILE = configService.get('APP_PATH_JWT_FILE');
const readFile = fs.readFileSync(APP_PATH_JWT_FILE);

export const JWTConfig = JwtModule.register({
    global: true,
    secret: readFile,
    signOptions: { expiresIn: '60s' },
});
