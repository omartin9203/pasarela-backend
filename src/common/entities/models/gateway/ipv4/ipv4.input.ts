import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Ipv4Input {
  @Field()
  value: string;
  @Field({nullable: true})
  validated?: boolean;
}
