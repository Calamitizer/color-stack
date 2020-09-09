import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QProps } from '@shared/api/person/person.qprops';
import PersonResult from '@shared/api/person/person.result';
import { PersonDoc } from '@server/api/person/person.schema';
import PersonDto from '@server/api/person/person.dto';
import Person from '@shared/model/person';
import GroupService from '@server/api/group/group.service';

@Injectable()
class PersonService {
  constructor(
    @InjectModel(PersonDoc.name) private model: Model<PersonDoc>,
    private groupService: GroupService
  ) {}

  get = async ({ name, color }: QProps): Promise<PersonResult> => {
    const requestTime = Date.now();

    const results = await this.model
      .find({
        ...(name === undefined ? {} : { name }),
        ...(color === undefined ? {} : { color }),
      })
      .exec();

    return {
      people: results.map(PersonDoc.process),
      elapsedMs: Date.now() - requestTime,
    };
  };

  create = async (props: PersonDto) => {
    const created = new this.model(props);

    return created.save();
  };

  upsert = async ({ name, color, group: groupName }: Person) => {
    const group = await this.groupService.upsert({ name: groupName });

    return this.model
      .findOneAndUpdate({ name }, { color, group }, { upsert: true, new: true })
      .exec();
  };
}

export default PersonService;
