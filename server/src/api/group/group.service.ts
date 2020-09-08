import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from '@server/api/group/group.schema';
import { QProps } from '@shared/api/group/group.qprops';
import GroupDto from '@server/api/group/group.dto';

@Injectable()
class GroupService {
  constructor(@InjectModel(Group.name) private model: Model<Group>) {}

  get = async ({ name }: QProps) =>
    this.model
      .find({
        ...(name === undefined ? {} : { name }),
      })
      .exec();

  create = async (props: GroupDto) => {
    const created = new this.model(props);
    return created.save();
  };

  upsert = async ({ name }: GroupDto) =>
    this.model
      .findOneAndUpdate({ name }, {}, { upsert: true, new: true })
      .exec();
}

export default GroupService;
