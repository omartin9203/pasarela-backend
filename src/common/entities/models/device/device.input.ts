import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeviceInput {
  @Field()
  uid: number;
  @Field()
  brand: string;
  @Field(t => String)
  status: 'active' | 'inactive';
}
