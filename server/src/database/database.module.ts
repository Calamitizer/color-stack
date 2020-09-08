import { MongooseModule } from '@nestjs/mongoose';
import URI from '@server/database/uri';

const DatabaseModule = MongooseModule.forRoot(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default DatabaseModule;
