import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class QueryFilterIdDto {
  @Field({nullable: true})
  eq?: string;
  @Field(type => [String], {nullable: true})
  in?: string[];
}
