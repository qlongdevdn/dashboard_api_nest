import { Module } from '@nestjs/common';
import { DatabaseProvider } from 'src/services';

@Module({
    providers: [DatabaseProvider],
    exports: [DatabaseProvider],
})
export default class DatabaseModule {}
