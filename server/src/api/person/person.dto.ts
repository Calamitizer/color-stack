import { Group } from '@server/api/group/group.schema';

interface PersonDto {
  name: string;
  color: string;
  group: Group;
}

export default PersonDto;
