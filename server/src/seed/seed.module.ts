import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import Seeder from '@server/seed/seeder';
import PersonModule from '@server/api/person/person.module';
import GroupModule from '@server/api/group/group.module';

@Module({
  imports: [CommandModule, PersonModule, GroupModule],
  providers: [Seeder],
  exports: [Seeder],
})
class SeedModule {}

export default SeedModule;
