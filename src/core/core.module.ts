import { Module } from '@nestjs/common';
import { ResourceRepository } from './reposirories/resource.repository';
import { ResourceService } from './services/resource.service';

@Module({
  imports: [],
  providers: [ResourceService, ResourceRepository],
  exports: [ResourceService, ResourceRepository],
})
export class CoreModule { }
