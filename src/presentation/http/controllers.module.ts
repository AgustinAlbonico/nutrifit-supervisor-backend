import { Module } from '@nestjs/common';

import { AuthControllerModule } from './controllers/profesional.module';

@Module({
  imports: [AuthControllerModule],
})
export class ControllersModule {}
