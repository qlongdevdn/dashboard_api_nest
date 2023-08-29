import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, Min, Max } from 'class-validator';

export class UsersDto {
    @IsNotEmpty()
    @ApiProperty()
    @Min(8)
    user_name: String

    @IsNotEmpty()
    @ApiProperty()
    @Min(8)
    password: String

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: String
}