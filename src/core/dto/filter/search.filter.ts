import { getRegexFromString } from '../../../utils/fix-selector';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchableFilterInput {
  @Field({nullable: true})
  search?: string;
  static getSearchQuery(search: string, fields: string[] = []) {
    if (!search) { return {}; }
    const regex = getRegexFromString(search);
    const result = {
      $or: [],
    };
    fields.forEach(x => result.$or.push({
      [x]: {
        $regex: regex,
      },
    }));
    return result;
  }
}
