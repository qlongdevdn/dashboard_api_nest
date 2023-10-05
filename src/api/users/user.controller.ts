import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiUserClassModel, ApiCustomResponse, ApiAuthClassModel, UsersDto } from '../model';
import { userDump } from '../../common/dump';
import { BASE_URL_ENUM } from '../../enums';

@ApiTags(BASE_URL_ENUM.USERS)
@Controller(`api/${BASE_URL_ENUM.USERS}`)
export class UsersController {
    constructor() {} // private apiClassService: ApiClassService, // @Inject(INJECTION_TOKENS.API.API_CLASS_SERVICE)
    @Get()
    @ApiCustomResponse(ApiUserClassModel)
    @ApiOperation({ description: 'Get list matched user in dashboard', summary: 'Get list matched user' })
    getMatchedUser() {
        return {
            data: userDump,
        };
    }

    @Post('/add-new')
    @ApiCustomResponse(ApiAuthClassModel)
    @ApiOperation({ description: 'Create new user in our system', summary: 'Create new user' })
    createNewUser(@Body() usersDto: UsersDto) {
        console.log(usersDto);
        return {
            data: userDump,
        };
    }
}
