import { Resource } from '../../../../core/models/resource.model';
import { Ipv4Dto } from './ipv4/ipv4.dto';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GatewayDto extends Resource {
  @Field()
  serialNumber: string;
  @Field()
  name: string;
  @Field(t => Ipv4Dto)
  ipv4: Ipv4Dto;
  @Field(t => [String])
  devices: string[];
}
