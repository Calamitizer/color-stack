import { MongooseModule } from '@nestjs/mongoose';
import URI from '@shared/config/db-uri';

const DatabaseModule = MongooseModule.forRoot(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default DatabaseModule;
