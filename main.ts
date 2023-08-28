import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { BASE_URL_ENUM } from 'src/enums';
const ConfigService = require('./src/config/config.service')
async function main() {

    const app = await NestFactory.create(AppModule);
    const APP_PORT = ConfigService.get('APP_PORT');
    const APP_ENV = ConfigService.get('APP_ENV');

    const config = new DocumentBuilder()
        .setTitle('Dashboard API')
        .setDescription('DashboardAPI description')
        .setVersion('1.0')
        .addTag(BASE_URL_ENUM.USERS)
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(APP_ENV, app, document, {
        customSiteTitle: "Dashboard API",
    });

    await app.listen(APP_PORT);
}

main();