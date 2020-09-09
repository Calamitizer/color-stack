import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ColorResult from '@shared/api/color/color.result';
import { PersonDoc } from '@server/api/person/person.schema';

@Injectable()
class ColorService {
  constructor(@InjectModel(PersonDoc.name) private model: Model<PersonDoc>) {}

  getAll = async (): Promise<ColorResult> => {
    const requestTime = Date.now();

    const results: string[] = (
      await this.model.find().distinct('color').exec()
    ).sort();

    return {
      colors: results,
      elapsedMs: Date.now() - requestTime,
    };
  };
}

export default ColorService;
