import { Module } from '@nestjs/common';
import ApiModule from '@server/api/api.module';
import DatabaseModule from '@server/database/database.module';
import RoutingModule from '@server/routing/routing.module';
import SeedModule from '@server/seed/seed.module';

@Module({
  imports: [ApiModule, RoutingModule, DatabaseModule, SeedModule],
})
class MainModule {}

export default MainModule;
