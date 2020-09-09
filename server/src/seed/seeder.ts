import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import PersonService from '@server/api/person/person.service';
import readFile from '@shared/util/read-file';
import GroupService from '@server/api/group/group.service';
import resolve from '@shared/util/resolve';

@Injectable()
class Seeder {
  constructor(
    private readonly personService: PersonService,
    private readonly groupService: GroupService
  ) {}

  @Command({ command: 'seed' })
  async seed() {
    const filepath = resolve('db-seed', 'input.json');
    const data = readFile(filepath);

    for (const groupName of Object.keys(data)) {
      const group = await this.groupService.create({ name: groupName });
      for (const [personName, color] of Object.entries(data[groupName])) {
        const person = await this.personService.create({
          name: personName,
          color: color as string,
          group,
        });
        console.log(person);
      }
    }
  }
}

export default Seeder;
