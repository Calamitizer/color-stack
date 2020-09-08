import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from '@server/api/person/person.schema';
import { QProps } from '@shared/api/person/person.qprops';
import PersonDto from '@server/api/person/person.dto';

@Injectable()
class PersonService {
  constructor(@InjectModel(Person.name) private model: Model<Person>) {}

  get = async ({ name, color }: QProps) =>
    this.model
      .find({
        ...(name === undefined ? {} : { name }),
        ...(color === undefined ? {} : { color }),
      })
      .exec();

  create = async (props: PersonDto) => {
    const created = new this.model(props);
    return created.save();
  };

  upsert = async ({ name, color, group }: PersonDto) => {
    const { n, nModified } = await this.model
      .updateOne({ name }, { color, group }, { upsert: true })
      .exec();
    console.log(`${n} matched, ${nModified} modified}`);
  };
}

export default PersonService;
