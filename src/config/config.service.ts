import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigsService {
    constructor() {
        const env = process.env.APP_ENV || 'development';
        const envFile = `.env.${env}`;
        dotenv.config({ path: envFile });
    }

    getAll() {
        return process.env;
    }

    get(key: string): string {
        return process.env[key] ?? '';
    }
}
