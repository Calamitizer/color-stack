import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from '@server/api/person/person.schema';
import PersonController from '@server/api/person/person.controller';
import PersonService from '@server/api/person/person.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
  ],
  controllers: [PersonController],
  providers: [PersonService],
})
class PersonModule {}

export default PersonModule;
