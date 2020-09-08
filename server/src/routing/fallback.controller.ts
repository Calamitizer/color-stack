import { Controller, Get, NotFoundException } from '@nestjs/common';
import RouteConfig from '@shared/config/route.config';

@Controller()
class FallbackController {
  @Get(`${RouteConfig.API_ROOT}/*`)
  apiNotFound() {
    throw new NotFoundException(this.getApiNotFoundMessage());
  }

  private getApiNotFoundMessage = () =>
    'The provided URI is not recognized by this API; consult the API specification.';
}

export default FallbackController;
