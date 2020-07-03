import { Injectable } from '@nestjs/common';
import { ResourceRepository } from '../../core/reposirories/resource.repository';
import { InjectModel } from '@nestjs/mongoose';
import { DEVICE_MODEL_NAME, GATEWAY_MODEL_NAME } from '../../utils/model-names';
import { Model } from 'mongoose';
import { DeviceDto } from '../entities/models/device/device.dto';

@Injectable()
export class DeviceRepository extends ResourceRepository<DeviceDto> {
  constructor(@InjectModel(DEVICE_MODEL_NAME) private readonly deviceModel: Model<DeviceDto>) {
    super(deviceModel);
  }
}
