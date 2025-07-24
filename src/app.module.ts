import { Module } from '@nestjs/common';
import { ControllersModule } from './presentation/http/controllers.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { AuthControllerModule } from './presentation/http/profesionales/controllers/profesional.module';

@Module({
  imports: [InfrastructureModule, ControllersModule, AuthControllerModule],
})
export class AppModule {}
