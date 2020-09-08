import { Module } from '@nestjs/common';
import StaticModule from '@server/routing/static.module';
import IndexController from '@server/routing/index.controller';
import FallbackController from '@server/routing/fallback.controller';

@Module({
  imports: [StaticModule],
  controllers: [IndexController, FallbackController],
})
class RoutingModule {}

export default RoutingModule;
