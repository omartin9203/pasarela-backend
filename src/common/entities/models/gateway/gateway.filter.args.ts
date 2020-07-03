import { GatewayFilterInput } from './gateway.filter.input';
import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class FilterGatewayArgsInput {
  @Field(type => GatewayFilterInput, {nullable: true})
  filter?: GatewayFilterInput = {};
  @Field(() => Int, {nullable: true})
  skip?: number = 0;
  @Field(() => Int, {nullable: true})
  limit?: number = 10;
}
