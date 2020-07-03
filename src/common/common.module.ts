import { Module } from '@nestjs/common';
import { GatewayRepository } from './reposirories/gateway.repository';
import { GatewayService } from './services/gateway.service';
import { GatewayResolver } from './resolvers/gateway.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { GatewayFeature } from './entities/schemas/gateway.schema';
import { CoreModule } from '../core/core.module';
import { ResourceRepository } from '../core/reposirories/resource.repository';
import { ResourceService } from '../core/services/resource.service';
import { DeviceRepository } from './reposirories/device.repository';
import { DeviceService } from './services/device.service';
import { DeviceResolver } from './resolvers/device.resolver';
import { DeviceFeature } from './entities/schemas/device.schema';

@Module({
  imports: [
    CoreModule,
    MongooseModule.forFeature([
      GatewayFeature,
      DeviceFeature,
    ]),
  ],
  providers: [
    GatewayRepository, GatewayService, GatewayResolver,
    DeviceRepository, DeviceService, DeviceResolver,
    ResourceRepository, ResourceService,
  ],
  exports: [
    MongooseModule.forFeature([
      GatewayFeature,
    ]),
    GatewayRepository, GatewayService, GatewayResolver,
  ],
})
export class CommonModule { }
