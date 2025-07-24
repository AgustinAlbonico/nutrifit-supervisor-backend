import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';
import { RepositoriesModule } from './persistence/typeorm/repositories/repositories.module';

@Module({
  imports: [EnvironmentConfigModule, TypeOrmConfigModule, RepositoriesModule],
  exports: [EnvironmentConfigModule, TypeOrmConfigModule, RepositoriesModule],
})
export class InfrastructureModule {}
