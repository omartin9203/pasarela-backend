import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class QueryFilterExistsDto {
  @Field({nullable: true})
  exists?: boolean;
}
