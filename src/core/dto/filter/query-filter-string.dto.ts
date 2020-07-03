import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class QueryFilterStringDto {
  @Field({nullable: true})
  eq?: string;
  @Field(type => [String], {nullable: true})
  in?: string[];
  @Field({nullable: true})
  regex: string;
}
