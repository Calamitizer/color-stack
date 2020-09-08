import { ServeStaticModule } from '@nestjs/serve-static';
import DirectoryConfig from '@shared/config/directory.config';
import RouteConfig from '@shared/config/route.config';

const StaticModule = ServeStaticModule.forRoot({
  rootPath: DirectoryConfig.DIST,
  serveRoot: RouteConfig.ASSET_ROOT,
  serveStaticOptions: { index: false },
});

export default StaticModule;
