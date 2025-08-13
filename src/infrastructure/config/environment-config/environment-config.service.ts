import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/config/database.config';
import { EnvironmentConfigurationError } from './environment-config.error';
import { AppConfig } from 'src/domain/config/app.config';

enum VariablesEntorno {
  PORT = 'PORT',
  APP_NAME = 'APP_NAME',
  NODE_ENV = 'NODE_ENV',
  DATABASE_HOST = 'DATABASE_HOST',
  DATABASE_PORT = 'DATABASE_PORT',
  DATABASE_NAME = 'DATABASE_NAME',
  DATABASE_USER = 'DATABASE_USER',
  DATABASE_PASSWORD = 'DATABASE_PASSWORD',
}

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig, AppConfig {
  constructor(private readonly configService: ConfigService) {}

  private getEnvironmentVariable<T>(key: string): T {
    try {
      return this.configService.getOrThrow<T>(key);
    } catch (error) {
      console.log(error);
      throw new EnvironmentConfigurationError(key);
    }
  }

  //Variables globales
  getPort(): number {
    return this.getEnvironmentVariable<number>(VariablesEntorno.PORT);
  }

  getAppName(): string {
    return this.getEnvironmentVariable<string>(VariablesEntorno.APP_NAME);
  }

  getNodeEnv(): 'production' | 'test' | 'dev' {
    return this.getEnvironmentVariable<'production' | 'test' | 'dev'>(
      VariablesEntorno.NODE_ENV,
    );
  }

  //Variables de entorno DB
  getDatabaseHost(): string {
    return this.getEnvironmentVariable<string>(VariablesEntorno.DATABASE_HOST);
  }

  getDatabasePort(): number {
    return this.getEnvironmentVariable<number>(VariablesEntorno.DATABASE_PORT);
  }

  getDatabaseUser(): string {
    return this.getEnvironmentVariable<string>(VariablesEntorno.DATABASE_USER);
  }

  getDatabasePassword(): string {
    return this.getEnvironmentVariable<string>(
      VariablesEntorno.DATABASE_PASSWORD,
    );
  }

  getDatabaseName(): string {
    return this.getEnvironmentVariable<string>(VariablesEntorno.DATABASE_NAME);
  }
}
