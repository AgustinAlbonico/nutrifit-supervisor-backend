import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentConfigService } from './infrastructure/config/environment-config/environment-config.service';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const mainConfig = app.get(EnvironmentConfigService);

  //Express middleware
  app.use(helmet()); //Libreria de seguridad para la api

  //Features de nestjs
  app.enableCors();
  app.enableVersioning();
  app.enableShutdownHooks();

  //Config para Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle(`${mainConfig.getAppName()} API`)
    .setDescription('Descripcion de la api de NutriFit Supervisor')
    .setExternalDoc('Postman Collection', '/openapi-json')
    .setVersion('1.0')
    .addBearerAuth(undefined, 'access-token')
    .addBearerAuth(undefined, 'refresh-token')
    .addSecurityRequirements('access-token')
    .build();

  const document = () => SwaggerModule.createDocument(app, swaggerConfig);

  if (mainConfig.getNodeEnv() !== 'production') {
    SwaggerModule.setup('openapi', app, document);
  }

  await app.listen(mainConfig.getPort() ?? 3000);
}

bootstrap();
