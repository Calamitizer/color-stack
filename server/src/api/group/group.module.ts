import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from '@server/api/group/group.schema';
import GroupController from '@server/api/group/group.controller';
import GroupService from '@server/api/group/group.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
  ],
  controllers: [GroupController],
  providers: [GroupService],
  exports: [GroupService],
})
class GroupModule {}

export default GroupModule;
