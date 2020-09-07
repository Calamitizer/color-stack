import ApiEndpoint from '@shared/api/abstract.endpoint';
import { QProps, createQueryString } from '@shared/api/person/person.qprops';

class PersonEndpoint extends ApiEndpoint {
  private static readonly SINGULAR = 'person';
  private static readonly PLURAL = 'people';

  constructor() {
    super(PersonEndpoint.SINGULAR, PersonEndpoint.PLURAL);
  }

  getByQueryString = (qProps: QProps) =>
    `${this.baseUri}?${createQueryString(qProps)}`;
}

const personEndpoint = new PersonEndpoint();

export default personEndpoint;
