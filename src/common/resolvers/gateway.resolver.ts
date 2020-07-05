import { Args, ID, Int, Mutation, Parent, Query, ResolveField, ResolveProperty, Resolver } from '@nestjs/graphql';
import { GatewayDto } from '../entities/models/gateway/gateway.dto';
import { GatewayService } from '../services/gateway.service';
import { PaginatedGatewayResponse } from '../entities/models/gateway/paginate.gateway.dto';
import { GatewayInput } from '../entities/models/gateway/gateway.input';
import { GatewayUpdate } from '../entities/models/gateway/gateway.update';
import { GatewayFilterInput } from '../entities/models/gateway/gateway.filter.input';
import { FilterGatewayArgsInput } from '../entities/models/gateway/gateway.filter.args';
import { DeviceDto } from '../entities/models/device/device.dto';
import { DeviceService } from '../services/device.service';
import { Logger } from '@nestjs/common';

@Resolver(of => GatewayDto)
export class GatewayResolver {
  constructor(
    private readonly gatewayService: GatewayService,
    private readonly deviceService: DeviceService,
  ) {}

  @Query(() => GatewayDto, { nullable: true })
  async getGateway(@Args({ name: 'id', type: () => ID }) id: string) {
    return await this.gatewayService.findResource(id);
  }

  @Query(() => PaginatedGatewayResponse)
  async getGateways(
    @Args({ name: 'skip', type: () => Int, nullable: true }) skip: number,
    @Args({name: 'limit', type: () => Int, nullable: true }) limit: number,
  ) {
    return await this.gatewayService.getAll(skip, limit);
  }

  @Query(() => PaginatedGatewayResponse)
  async filterGateways(
    @Args() { filter, limit, skip }: FilterGatewayArgsInput,
  ) {
    return await this.gatewayService.getAll(skip, limit, GatewayFilterInput.getQuery(filter));
  }
  @Mutation(() => GatewayDto, {nullable: true})
  async createGateway(
    @Args('input') input: GatewayInput,
  ) {
    return await this.gatewayService.createResource(input);
  }
  @Mutation(() => GatewayDto, {nullable: true})
  async updateGateway(
    @Args({ name: 'id', type: () => ID }) id: string,
    @Args({name: 'input', type: () => GatewayUpdate }) input: GatewayUpdate) {
    const gatewayDto = await this.gatewayService.updateResource(id, GatewayUpdate.fixFields(input));
    return gatewayDto;
  }
  @Mutation(() => GatewayDto, {nullable: true})
  async deleteGateway( @Args({ name: 'id', type: () => ID }) id: string ) {
    return await this.gatewayService.deleteResource(id);
  }

  @ResolveField(returns => [DeviceDto])
  async devicesObjects(@Parent() gateway) {
    const { devices } = gateway;
    const result = new Array<DeviceDto>();
    try {
      for (const deviceId of devices) {
        result.push(await this.deviceService.findResource(deviceId));
      }
    } catch (e) {
      Logger.debug(e);
    }
    return result;
  }
}
