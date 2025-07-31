import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './config/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';
import { RepositoriesModule } from './persistence/typeorm/repositories/repositories.module';
import { AppLoggerModule } from './common/logger/app-logger.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    TypeOrmConfigModule,
    RepositoriesModule,
    AppLoggerModule,
  ],
  exports: [
    EnvironmentConfigModule,
    TypeOrmConfigModule,
    RepositoriesModule,
    AppLoggerModule,
  ],
})
export class InfrastructureModule {}
