import { Controller, Query, Get } from '@nestjs/common';
import groupEndpoint from '@shared/api/group/group.endpoint';
import GroupService from '@server/api/group/group.service';
import { QParam, QProps } from '@shared/api/group/group.qprops';

const endpoint = groupEndpoint;

@Controller(endpoint.baseUri)
class GroupController {
  constructor(private readonly service: GroupService) {}

  @Get()
  async get(
    // @Query(QParam.ID) id: QProps[QParam.ID],
    @Query(QParam.NAME) name: QProps[QParam.NAME]
  ) {
    return this.service.get({
      // id,
      name,
    });
  }
}

export default GroupController;
