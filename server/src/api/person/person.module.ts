import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonDoc, PersonSchema } from '@server/api/person/person.schema';
import PersonController from '@server/api/person/person.controller';
import PersonService from '@server/api/person/person.service';
import GroupModule from '@server/api/group/group.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PersonDoc.name, schema: PersonSchema }]),
    GroupModule,
  ],
  controllers: [PersonController],
  providers: [PersonService],
  exports: [PersonService],
})
class PersonModule {}

export default PersonModule;
