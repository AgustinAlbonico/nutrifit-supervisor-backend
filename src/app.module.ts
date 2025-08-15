import { Module } from '@nestjs/common';
import { ControllersModule } from './presentation/http/controllers.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    InfrastructureModule,
    ControllersModule,
    ConfigModule.forRoot({
      isGlobal: true, // Hace que esté disponible en toda la app
      envFilePath: ['.env'], // Podés cambiarlo por .env.dev, etc.
    }),
  ],
})
export class AppModule {}
