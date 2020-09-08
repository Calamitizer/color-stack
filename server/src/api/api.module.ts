import { Module } from '@nestjs/common';
import PersonModule from '@server/api/person/person.module';
import GroupModule from '@server/api/group/group.module';
import ColorModule from '@server/api/color/color.module';

@Module({
  imports: [PersonModule, GroupModule, ColorModule],
})
class ApiModule {}

export default ApiModule;
