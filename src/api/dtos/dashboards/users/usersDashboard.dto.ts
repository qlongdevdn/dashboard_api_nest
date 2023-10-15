import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, Min, IsBoolean, IsMobilePhone, IsEnum, IsDateString } from 'class-validator';
import { AccountLevel, AccountStatus, AccountType, Gender, Roles, Status } from 'src/enums';

export class UsersDashboardDto {
    @IsNotEmpty()
    @Min(8)
    @ApiProperty()
    user_name: string = '';

    @IsNotEmpty()
    @Min(8)
    @ApiProperty()
    password: string = '';

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string = '';

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    email_verified: boolean = false;

    @Min(8)
    @ApiProperty()
    full_name: string = '';

    @Min(8)
    @ApiProperty()
    short_name: string = '';

    @IsNotEmpty()
    @IsMobilePhone()
    @ApiProperty()
    phone: string = '';

    @ApiProperty()
    address: string = '';

    @IsDateString()
    @ApiProperty()
    dob: Date = new Date();

    @IsEnum(Roles)
    @ApiProperty()
    role = Roles;

    @IsNotEmpty()
    @IsEnum(Status)
    @ApiProperty()
    status = Status;

    @IsNotEmpty()
    @IsEnum(AccountStatus)
    @ApiProperty()
    account_status = AccountStatus;

    @IsNotEmpty()
    @IsEnum(AccountLevel)
    @ApiProperty()
    account_level = AccountLevel;

    @IsNotEmpty()
    @IsEnum(AccountType)
    @ApiProperty()
    account_type = AccountType;

    @IsNotEmpty()
    @IsEnum(Gender)
    @ApiProperty()
    gender = Gender;
}
