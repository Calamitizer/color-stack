import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from '@server/api/person/person.schema';

@Injectable()
class ColorService {
  constructor(@InjectModel(Person.name) private model: Model<Person>) {}

  getAll = async () =>
    (await this.model.find().distinct('color').exec()).sort();
}

export default ColorService;
