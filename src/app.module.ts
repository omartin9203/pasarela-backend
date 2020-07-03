import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONNECTION } from './utils/constants';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_PIPE } from '@nestjs/core';
import { CoreModule } from './core/core.module';
import { CommonModule } from './common/common.module';
import { ResourceRepository } from './core/reposirories/resource.repository';
import { ResourceService } from './core/services/resource.service';
import { GatewayRepository } from './common/reposirories/gateway.repository';
import { GatewayService } from './common/services/gateway.service';
import { GatewayResolver } from './common/resolvers/gateway.resolver';

const { URI, OPTIONS } = process.env.NODE_ENV === 'production' ? CONNECTION.ATLAS : CONNECTION.LOCAL;

@Module({
  imports: [
    MongooseModule.forRoot(URI, OPTIONS),
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: 'schema.gql',
      debug: true,
      introspection: true,
      playground: true,
      cors: false,
    }),
    CoreModule, CommonModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    // ResourceRepository, ResourceService,
    // GatewayRepository, GatewayService, GatewayResolver,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
