import { ApiProperty } from "@nestjs/swagger";

export class UsersDashboardModel {
    @ApiProperty()
    user_id = '';
    @ApiProperty()
    email = '';
    @ApiProperty()
    user_name = '';
    @ApiProperty()
    given_name = '';
    @ApiProperty()
    family_name = '';
    @ApiProperty()
    nickname = '';
    @ApiProperty()
    last_ip = '';
    @ApiProperty()
    logins_count = 0;
    @ApiProperty()
    email_verified: boolean = false;
    @ApiProperty()
    created_at: Date = new Date();
    @ApiProperty()
    modify_at: Date = new Date();
    @ApiProperty()
    last_login: Date = new Date();
}
