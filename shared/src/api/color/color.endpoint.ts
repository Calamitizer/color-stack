import ApiEndpoint from '@shared/api/abstract.endpoint';

class ColorEndpoint extends ApiEndpoint {
  private static readonly SINGULAR = 'color';

  constructor() {
    super(ColorEndpoint.SINGULAR);
  }
}

const colorEndpoint = new ColorEndpoint();

export default colorEndpoint;
