import { Model } from 'mongoose';
import { Resource } from '../models/resource.model';
import { Injectable } from '@nestjs/common';

// @Injectable()
export class ResourceRepository<TResource extends Resource> {
  constructor(
    private readonly resourceModel: Model<TResource>,
  ) {
  }
  unzip(x?: any): TResource | undefined {
    return x ? { ...x, id: x._id.toString() } : x;
  }
  async getAll(skip: number = 0, limit: number = 10): Promise<TResource[]> {
    let resources = await this.resourceModel.find().skip(skip).limit(limit).lean();
    resources = resources ? resources : [];
    return resources.map(x => this.unzip(x));
  }
  async create( input: any ): Promise<TResource> {
    let resource = new this.resourceModel({...input});
    resource = await resource.save();
    return resource;
  }
  async getOne(id: string) {
    const resource = await this.resourceModel.findById(id).lean();
    return resource ? this.unzip(resource) : undefined;
  }
  async updateOne( Id: string, input: any ): Promise<TResource | undefined> {
    const resource = await this.resourceModel.findByIdAndUpdate(Id, { ...input, updatedAt: Date.now() }, {new: true}).lean();
    return resource ? this.unzip(resource) : undefined;
  }
  async deleteOne(Id: string): Promise<TResource | undefined> {
    const result = await this.resourceModel.findByIdAndRemove(Id).lean();
    return result ? this.unzip(result) : undefined;
  }
  async count(filter = {}, byOr: boolean = false): Promise<number> {
    return filter !== {} ? await this.resourceModel.countDocuments(filter) : await this.resourceModel.estimatedDocumentCount();
  }
  async findOne(filter = {}): Promise<TResource | undefined> {
    const resource = await this.resourceModel.findOne(filter).lean();
    return resource ? this.unzip(resource) : undefined;
  }
  async find(filter = {}, skip: number = 0, limit: number = 10, sort: any | string = null): Promise<TResource[]> {
    const resources = await this.resourceModel.find(filter).sort(sort).skip(skip).limit(limit).lean();
    return resources ? resources.map(x => this.unzip(x)) : [];
  }
}
