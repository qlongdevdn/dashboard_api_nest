import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
class ConfigService {
    constructor() {
        const env = process.env.APP_ENV || 'development';
        const envFile = `.env.${env}`;
        dotenv.config({ path: envFile });
    }

    get(key: string): string {
        return process.env[key];
    }
}

const configService = new ConfigService();
module.exports = configService;