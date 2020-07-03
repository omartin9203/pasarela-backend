import PaginatedResponse from '../../../../core/dto/paginate.response.dto';
import { GatewayDto } from './gateway.dto';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PaginatedGatewayResponse extends PaginatedResponse(GatewayDto) {
}
