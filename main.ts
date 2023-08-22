import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function main() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('Dashboard API')
        .setDescription('DashboardAPI description')
        .setVersion('1.0')
        .addTag('dashboard')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('documents', app, document);

    await app.listen(3000);
}

main();
