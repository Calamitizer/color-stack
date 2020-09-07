import { Module } from '@nestjs/common';
import PersonModule from '@server/api/person/person.module';

@Module({
  imports: [PersonModule],
})
class ApiModule {}

export default ApiModule;
