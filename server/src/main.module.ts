import { Module } from '@nestjs/common';
import ApiModule from '@server/api/api.module';
import DatabaseModule from '@server/database/database.module';
import RoutingModule from '@server/routing/routing.module';

@Module({
  imports: [ApiModule, DatabaseModule, RoutingModule],
})
class MainModule {}

export default MainModule;
