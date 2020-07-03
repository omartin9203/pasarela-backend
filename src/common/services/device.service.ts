import { Injectable } from '@nestjs/common';
import { ResourceService } from '../../core/services/resource.service';
import { DeviceDto } from '../entities/models/device/device.dto';
import { DeviceRepository } from '../reposirories/device.repository';

@Injectable()
export class DeviceService extends ResourceService<DeviceDto> {
  constructor(readonly deviceRepository: DeviceRepository) {
    super(deviceRepository);
  }
}
