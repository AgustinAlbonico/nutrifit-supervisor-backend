import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { AppDataSource } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource), InfrastructureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
