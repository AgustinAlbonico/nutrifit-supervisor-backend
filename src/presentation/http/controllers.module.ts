import { Module } from '@nestjs/common';

import { AuthControllerModule } from './profesionales/controller/profesional.module';

@Module({
  imports: [AuthControllerModule],
})
export class ControllersModule {}
