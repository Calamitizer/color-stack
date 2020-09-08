import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import RouteConfig from '@shared/config/route.config';
import DirectoryConfig from '@shared/config/directory.config';

@Controller()
class IndexController {
  @Get(RouteConfig.INDEX_URI)
  serve(@Res() response: Response) {
    response.sendFile(DirectoryConfig.INDEX_PATH);
  }
}

export default IndexController;
