import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeviceDto } from '../entities/models/device/device.dto';
import { DeviceService } from '../services/device.service';
import { PaginatedDeviceResponse } from '../entities/models/device/paginate.device.dto';
import { FilterDeviceArgsInput } from '../entities/models/device/device.filter.args';
import { DeviceFilterInput } from '../entities/models/device/device.filter.input';
import { DeviceInput } from '../entities/models/device/device.input';
import { DeviceUpdate } from '../entities/models/device/device.update';

@Resolver(of => DeviceDto)
export class DeviceResolver {
  constructor(
    private readonly deviceService: DeviceService,
  ) {}

  @Query(() => DeviceDto, { nullable: true })
  async getDevice(@Args({ name: 'id', type: () => ID }) id: string) {
    return await this.deviceService.findResource(id);
  }

  @Query(() => PaginatedDeviceResponse)
  async getDevices(
    @Args({ name: 'skip', type: () => Int, nullable: true }) skip: number,
    @Args({name: 'limit', type: () => Int, nullable: true }) limit: number,
  ) {
    return await this.deviceService.getAll(skip, limit);
  }

  @Query(() => PaginatedDeviceResponse)
  async filterDevices(
    @Args() { filter, limit, skip }: FilterDeviceArgsInput,
  ) {
    return await this.deviceService.getAll(skip, limit, DeviceFilterInput.getQuery(filter));
  }
  @Mutation(() => DeviceDto, {nullable: true})
  async createDevice(
    @Args('data') data: DeviceInput,
  ) {
    return await this.deviceService.createResource(data);
  }
  @Mutation(() => DeviceDto, {nullable: true})
  async updateDevice(
    @Args({ name: 'id', type: () => ID }) id: string,
    @Args({name: 'input', type: () => DeviceUpdate }) input: DeviceUpdate) {
    return await this.deviceService.updateResource(id, input);
  }
  @Mutation(() => DeviceDto, {nullable: true})
  async deleteDevice( @Args({ name: 'id', type: () => ID }) id: string ) {
    return await this.deviceService.deleteResource(id);
  }
}
