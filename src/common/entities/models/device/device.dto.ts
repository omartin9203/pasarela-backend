import { Resource } from '../../../../core/models/resource.model';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeviceDto extends Resource {
  @Field()
  uid: number;
  @Field()
  brand: string;
  @Field(t => String)
  status: 'active' | 'inactive';
  @Field()
  date: Date;
}
