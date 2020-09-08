import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Group extends Document {
  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  name!: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
