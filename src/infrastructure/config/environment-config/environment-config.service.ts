import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/config/database.config';
import { EnvironmentConfigurationError } from './environment-config.error';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {}

  private getEnvironmentVariable<T>(key: string): T {
    try {
      return this.configService.getOrThrow<T>(key);
    } catch (error) {
      console.log(error);
      throw new EnvironmentConfigurationError(key);
    }
  }

  getDatabaseHost(): string {
    return this.getEnvironmentVariable<string>('DATABASE_HOST');
  }

  getDatabasePort(): number {
    return this.getEnvironmentVariable<number>('DATABASE_PORT');
  }

  getDatabaseUser(): string {
    return this.getEnvironmentVariable<string>('DATABASE_USER');
  }

  getDatabasePassword(): string {
    return this.getEnvironmentVariable<string>('DATABASE_PASSWORD');
  }

  getDatabaseName(): string {
    return this.getEnvironmentVariable<string>('DATABASE_NAME');
  }
}
