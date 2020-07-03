import { ResourceRepository } from '../../core/reposirories/resource.repository';
import { GatewayDto } from '../entities/models/gateway/gateway.dto';
import { InjectModel } from '@nestjs/mongoose';
import { GATEWAY_MODEL_NAME } from '../../utils/model-names';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GatewayRepository extends ResourceRepository<GatewayDto> {
  constructor(@InjectModel(GATEWAY_MODEL_NAME) private readonly gatewayModel: Model<GatewayDto>) {
    super(gatewayModel);
  }
}
