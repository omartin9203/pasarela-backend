
import { Ipv4Input } from './ipv4/ipv4.input';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GatewayInput {
  @Field()
  serialNumber: string;
  @Field()
  name: string;
  @Field(t => Ipv4Input)
  ipv4: Ipv4Input;
  @Field(t => [String])
  devices: string[];
}
