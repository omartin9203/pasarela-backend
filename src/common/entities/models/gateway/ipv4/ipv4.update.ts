import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Ipv4Update {
  @Field({nullable: true})
  value?: string;
  @Field({nullable: true})
  validated?: boolean;
}
