import { SearchableFilterInput } from '../../../../core/dto/filter/search.filter';
import { fixSelectors } from '../../../../utils/fix-selector';
import { QueryFilterIdDto } from '../../../../core/dto/filter/query-filter-id.dto';
import { QueryFilterStringDto } from '../../../../core/dto/filter/query-filter-string.dto';
import { Field, InputType } from '@nestjs/graphql';
import { QueryFilterNumberDto } from '../../../../core/dto/filter/query-filter-number.dto';
import { QueryFilterDateDto } from '../../../../core/dto/filter/query-filter-date.dto';

@InputType()
export class DeviceFilterInput extends SearchableFilterInput {
  @Field(type => QueryFilterIdDto, {nullable: true})
  id?: QueryFilterIdDto;
  @Field(type => QueryFilterNumberDto, {nullable: true})
  uid?: QueryFilterNumberDto;
  @Field(type => QueryFilterStringDto, {nullable: true})
  brand?: QueryFilterStringDto;
  @Field(type => QueryFilterStringDto, {nullable: true})
  status?: QueryFilterStringDto;
  @Field(type => QueryFilterDateDto, {nullable: true})
  date?: QueryFilterDateDto;
  static getQuery(filter: DeviceFilterInput) {
    const query: any = DeviceFilterInput.getSearchQuery(filter.search, [ 'brand', 'status' ]);
    Object.getOwnPropertyNames(filter)
      .filter(x => x !== 'search' && Object.getOwnPropertyDescriptor(filter, x).value)
      .forEach(x => query[`${DeviceFilterInput.fixField(x)}`] = fixSelectors(filter[x]));
    return query;
  }
  static fixField(x: string) {
    switch (x) {
      case 'id':
        return '_id';
      default:
        return x;
    }
  }
}
