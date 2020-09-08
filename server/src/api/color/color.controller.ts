import { Controller, Get } from '@nestjs/common';
import colorEndpoint from '@shared/api/color/color.endpoint';
import ColorService from '@server/api/color/color.service';

const endpoint = colorEndpoint;

@Controller(endpoint.baseUri)
class ColorController {
  constructor(private readonly service: ColorService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }
}

export default ColorController;
