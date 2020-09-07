import { Module } from '@nestjs/common';
import RoutingModule from '@server/routing/routing.module';

@Module({
  imports: [RoutingModule],
})
class MainModule {}

export default MainModule;
