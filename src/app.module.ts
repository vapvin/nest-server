import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {join} from 'path';
import { RestaurnatsModule } from './restaurnats/restaurnats.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    ),
    RestaurantsModule},
    RestaurnatsModule},
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
