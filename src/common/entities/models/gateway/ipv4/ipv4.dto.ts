import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ipv4Dto {
  @Field()
  value: string;
  @Field()
  validated: boolean;
}
