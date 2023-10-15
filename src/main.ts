import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BASE_URL_ENUM } from './enums';
import { ConfigsService } from './config/config.service';
import { printEnvironment } from './common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const configService = new ConfigsService();
const configAll = configService.getAll();
const APP_PORT = configService.get('APP_PORT');
const APP_ENV = configService.get('APP_ENV');

async function main() {
    const app = await NestFactory.create(AppModule, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            maxAge: 3600,
        } as CorsOptions,
    });

    const config = new DocumentBuilder()
        .setTitle('Dashboard API')
        .setDescription('DashboardAPI description')
        .setVersion('1.0')
        .addTag(BASE_URL_ENUM.USERS)
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(APP_ENV, app, document, {
        customSiteTitle: 'Dashboard API',
    });

    await app.listen(APP_PORT);
}

main()
    .then(() => {
        printEnvironment(configAll);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
