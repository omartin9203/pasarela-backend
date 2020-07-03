import { Document } from 'mongoose';
import { ObjectType } from '@nestjs/graphql';
import { IResourceDto } from '../dto/resource.interface';

@ObjectType({ implements: IResourceDto })
export class Resource extends Document implements IResourceDto {
    readonly id: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
