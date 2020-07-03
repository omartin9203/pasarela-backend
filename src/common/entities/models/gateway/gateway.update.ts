import { Ipv4Update } from './ipv4/ipv4.update';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GatewayUpdate {
  @Field({nullable: true})
  serialNumber?: string;
  @Field({nullable: true})
  name?: string;
  @Field(t => Ipv4Update, {nullable: true})
  ipv4?: Ipv4Update;
  @Field(t => [String], {nullable: true})
  devices?: string[];
  static fixFields(input: GatewayUpdate) {
    const changes: any = {};
    if (input.ipv4) {
       Object.keys(input.ipv4).forEach(x => {
         changes[`ipv4.${x}`] = input.ipv4[x];
       });
    }
    Object.keys(input).filter(x => x !== 'ipv4').forEach(x => changes[x] = input[x]);
    return changes;
  }
}
