import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentConfigService } from './infrastructure/config/environment-config/environment-config.service';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { VersioningType } from '@nestjs/common';
import { AppLoggerService } from './infrastructure/common/logger/app-logger.service';
import { LoggingInterceptor } from './infrastructure/common/logger/app-logger.interceptor';
import { AppErrorFilter } from './infrastructure/common/filter/exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const mainConfig = app.get(EnvironmentConfigService);
  const logger = app.get(AppLoggerService);

  //Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //Filter
  app.useGlobalFilters(new AppErrorFilter());

  //Interceptors
  app.useGlobalInterceptors(new LoggingInterceptor(logger));

  //Express middleware
  app.use(helmet()); //Libreria de seguridad para la api

  //Features de nestjs
  app.enableCors();
  // app.enableVersioning({
  //   type: VersioningType.URI,
  //   defaultVersion: '1',
  // });
  app.enableShutdownHooks();

  if (mainConfig.getNodeEnv() !== 'production') {
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

    SwaggerModule.setup('openapi', app, document);
  }

  await app.listen(mainConfig.getPort() ?? 3000);
}

bootstrap();
