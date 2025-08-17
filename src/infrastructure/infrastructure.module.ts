import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';

@Module({
  imports: [EnvironmentConfigModule, TypeOrmConfigModule],
  //exports: [EnvironmentConfigModule, TypeOrmConfigModule],
})
export class InfrastructureModule {}
