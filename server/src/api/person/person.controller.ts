import { Controller, Query, Get } from '@nestjs/common';
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
}

export default PersonController;
