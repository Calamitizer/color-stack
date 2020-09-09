import { Controller, Query, Get, Post, Body } from '@nestjs/common';
import Person from '@shared/model/person';
import endpoint from '@shared/api/person/person.endpoint';
import PersonService from '@server/api/person/person.service';
import { QParam, QProps } from '@shared/api/person/person.qprops';

@Controller(endpoint.baseUri)
class PersonController {
  constructor(private readonly service: PersonService) {}

  @Get()
  async get(
    // @Query(QParam.ID) id: QProps[QParam.ID],
    @Query(QParam.NAME) name: QProps[QParam.NAME],
    @Query(QParam.COLOR) color: QProps[QParam.COLOR]
  ) {
    return this.service.get({
      // id,
      name,
      color,
    });
  }

  @Post()
  async upsert(@Body() props: Person) {
    return this.service.upsert(props);
  }
}

export default PersonController;
