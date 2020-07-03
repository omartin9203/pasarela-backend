import { ArgsType, Field, Int } from '@nestjs/graphql';
import { DeviceFilterInput } from './device.filter.input';

@ArgsType()
export class FilterDeviceArgsInput {
  @Field(type => DeviceFilterInput, {nullable: true})
  filter?: DeviceFilterInput = {};
  @Field(() => Int, {nullable: true})
  skip?: number = 0;
  @Field(() => Int, {nullable: true})
  limit?: number = 10;
}
