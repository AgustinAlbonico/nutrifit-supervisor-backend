import { Module } from '@nestjs/common';

import { AuthControllerModule } from './profesionales/controllers/profesional.module';

@Module({
  imports: [AuthControllerModule],
})
export class ControllersModule {}
