import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class QueryFilterBooleanDto {
  @Field({nullable: true})
  eq?: boolean;
}
