import { ResourceService } from '../../core/services/resource.service';
import { GatewayDto } from '../entities/models/gateway/gateway.dto';
import { GatewayRepository } from '../reposirories/gateway.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GatewayService extends ResourceService<GatewayDto> {
  constructor(readonly gatewayRepository: GatewayRepository) {
    super(gatewayRepository);
  }
}
