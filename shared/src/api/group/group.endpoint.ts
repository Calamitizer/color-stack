import ApiEndpoint from '@shared/api/abstract.endpoint';
import { QProps, createQueryString } from '@shared/api/group/group.qprops';

class GroupEndpoint extends ApiEndpoint {
  private static readonly SINGULAR = 'group';

  constructor() {
    super(GroupEndpoint.SINGULAR);
  }

  getByQueryString = (qProps: QProps) =>
    `${this.baseUri}?${createQueryString(qProps)}`;
}

const groupEndpoint = new GroupEndpoint();

export default groupEndpoint;
