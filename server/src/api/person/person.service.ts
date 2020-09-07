import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QProps } from '@shared/api/person/person.qprops';
import { Person } from '@server/api/person/person.schema';

@Injectable()
class PersonService {
  constructor(@InjectModel(Person.name) private model: Model<Person>) {}

  get = async (_: QProps) => this.model.find().exec();
}

export default PersonService;
