import PaginatedResponse from '../../../../core/dto/paginate.response.dto';
import { ObjectType } from '@nestjs/graphql';
import { DeviceDto } from './device.dto';

@ObjectType()
export class PaginatedDeviceResponse extends PaginatedResponse(DeviceDto) {
}
