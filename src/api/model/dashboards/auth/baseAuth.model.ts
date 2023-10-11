import { ApiProperty } from '@nestjs/swagger';

export class ApiAuthClassModel {
    @ApiProperty()
    access_token = '';
}

export class ApiBaseClassModel {
    @ApiProperty()
    request_at = new Date();
}
