import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GroupSchema, Group } from '@server/api/group/group.schema';

@Schema()
export class Person extends Document {
  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
  })
  name!: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  })
  color!: string;

  @Prop({
    type: GroupSchema,
    required: true,
    select: false,
  })
  group!: Group;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
