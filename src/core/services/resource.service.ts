import { ResourceRepository } from '../reposirories/resource.repository';
import { Resource } from '../models/resource.model';
import { IPaginatedResponse } from '../interfaces/paginate.response.interface';
import { Injectable, Logger } from '@nestjs/common';

// @Injectable()
export class ResourceService<TResource extends Resource>  {
    constructor(private resourceRepository: ResourceRepository<TResource>) {
    }
    async getAll(skip?: number, limit?: number, filter?: object, sort?: any | string): Promise<IPaginatedResponse<TResource>> {
        const total = await this.resourceRepository.count(filter);
        return {
            items: await this.resourceRepository.find(filter, skip, limit, sort),
            total,
            hasMore: limit + skip < total,
        };
    }
    async findResource(id: string): Promise<TResource> {
        return await this.resourceRepository.getOne(id);
    }
    async createResource(resource: object): Promise<TResource> {
        return await this.resourceRepository.create(resource);
    }
    async updateResource(id: string, input: object): Promise<TResource> {
        return await this.resourceRepository.updateOne(id, input);
    }
    async deleteResource(id: string): Promise<TResource> {
        return await this.resourceRepository.deleteOne(id);
    }
    async findOne(filter: any): Promise<TResource> {
        return await this.resourceRepository.findOne(filter);
    }
}
