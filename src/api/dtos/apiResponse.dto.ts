import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
    @ApiProperty()
    data!: T | null;

    @ApiProperty()
    msg!: string | null;
}

export class ApiResponseDetails<T> {
    @ApiProperty()
    data?: T | null | boolean;
    @ApiProperty()
    status?: string;
    @ApiProperty()
    msg?: string;
}
