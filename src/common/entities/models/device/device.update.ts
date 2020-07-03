import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeviceUpdate {
  @Field({nullable: true})
  uid?: number;
  @Field({nullable: true})
  brand?: string;
  @Field(t => String, {nullable: true})
  status?: 'active' | 'inactive';
}
