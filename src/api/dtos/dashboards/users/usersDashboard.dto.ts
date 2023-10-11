import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Min } from 'class-validator';

export class UsersDashboardDto {
    @IsNotEmpty()
    @ApiProperty()
    @Min(8)
    user_name = '';

    @IsNotEmpty()
    @ApiProperty()
    @Min(8)
    password = '';

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email = '';
}
