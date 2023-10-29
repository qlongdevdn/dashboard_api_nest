import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength, IsBoolean, IsMobilePhone, IsEnum, IsDateString } from 'class-validator';
import { AccountLevel, AccountStatus, AccountType, Gender, Roles, Status } from 'src/enums';

export class UsersDashboardDto {
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty()
    user_name: string = '';

    @IsNotEmpty()
    @MinLength(6)
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

    @MinLength(8)
    @ApiProperty()
    full_name: string = '';

    @IsNotEmpty()
    @MinLength(3)
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

    @IsNotEmpty()
    @IsEnum(Roles)
    @ApiProperty()
    role = Roles;

    @IsEnum(Status)
    @ApiProperty()
    status: Status = Status.OFFLINE;

    @IsEnum(AccountStatus)
    @ApiProperty()
    account_status: AccountStatus = AccountStatus.NOT_ACTIVE;

    @IsEnum(AccountLevel)
    @ApiProperty()
    account_level: AccountLevel = AccountLevel.LEVEL_0;

    @IsEnum(AccountType)
    @ApiProperty()
    account_type: AccountType = AccountType.MANUAL;

    @IsEnum(Gender)
    @ApiProperty()
    gender: Gender = Gender.MALE;
}
