import { SearchableFilterInput } from '../../../../core/dto/filter/search.filter';
import { fixSelectors } from '../../../../utils/fix-selector';
import { QueryFilterIdDto } from '../../../../core/dto/filter/query-filter-id.dto';
import { QueryFilterStringDto } from '../../../../core/dto/filter/query-filter-string.dto';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GatewayFilterInput extends SearchableFilterInput {
  @Field(type => QueryFilterIdDto, {nullable: true})
  id?: QueryFilterIdDto;
  @Field(type => QueryFilterStringDto, {nullable: true})
  ipv4?: QueryFilterStringDto;
  static getQuery(filter: GatewayFilterInput) {
    const query: any = GatewayFilterInput.getSearchQuery(filter.search, [ 'serialNumber', 'name', 'phone', 'email']);
    Object.getOwnPropertyNames(filter)
      .filter(x => x !== 'search' && Object.getOwnPropertyDescriptor(filter, x).value)
      .forEach(x => query[`${GatewayFilterInput.fixField(x)}`] = fixSelectors(filter[x]));
    return query;
  }
  static fixField(x: string) {
    switch (x) {
      case 'id':
        return '_id';
      case 'ipv4':
        return 'ipv4.value';
      default:
        return x;
    }
  }
}
