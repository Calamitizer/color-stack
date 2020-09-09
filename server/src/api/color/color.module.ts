import { Module } from '@nestjs/common';
import ColorController from '@server/api/color/color.controller';
import ColorService from '@server/api/color/color.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonDoc, PersonSchema } from '@server/api/person/person.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PersonDoc.name, schema: PersonSchema }]),
  ],
  controllers: [ColorController],
  providers: [ColorService],
})
class ColorModule {}

export default ColorModule;
