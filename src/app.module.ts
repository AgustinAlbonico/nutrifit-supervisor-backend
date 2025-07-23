import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { AppDataSource } from './infrastructure/config/typeorm/typeorm.config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    InfrastructureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
