import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SociosModule } from './socios/socios.module';

@Module({
  imports: [AuthModule, SociosModule],
  exports: [AuthModule, SociosModule],
})
export class ApplicationModule {}
