import { Injectable } from '@nestjs/common';
import PersonService from '@server/api/person/person.service';
import { Command } from 'nestjs-command';
import data from '@server/seed/data';
import GroupService from '@server/api/group/group.service';

@Injectable()
class Seeder {
  constructor(
    private readonly personService: PersonService,
    private readonly groupService: GroupService
  ) {}

  @Command({ command: 'seed' })
  async seed() {
    // const allPeople = Object.assign({}, ...Object.values(data));
    // const x = data.Group1;

    // await Promise.all(
    //   Object.entries(x).map(async ([name, color]) => {
    //     const { _id } = await this.personService.create({
    //       name,
    //       color,
    //     });
    //     console.log(`Created ${name} (${color})`);
    //     console.log(`type: ${typeof _id}`);
    //     console.log(_id);
    //   })
    // );

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

    // Object.values(data).forEach((group) => {
    //   Object.entries(group).forEach(async ([name, color]) => {
    //     console.log(`Creating ${name} (${color})`);
    //     await this.service.create({
    //       name,
    //       color,
    //     });
    //     console.log(`Created ${name} (${color})`);
    //   });
    // });

    // console.log('start');
    // const newPerson = await this.service.upsert({
    //   name: 'Clarity',
    //   color: 'Amaranthine',
    // });
    // console.log(newPerson);
  }
}

export default Seeder;
