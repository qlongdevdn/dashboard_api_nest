import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersDashboardModel, ApiCustomResponse, ApiAuthClassModel, UsersDashboardDto } from 'src/api/model';
import { userDump } from 'src/common/dump';
import { BASE_URL_ENUM } from 'src/enums';

@ApiTags(BASE_URL_ENUM.USERS)
@Controller(`api/${BASE_URL_ENUM.USERS}`)
export class UsersController {
    constructor() {} // private apiClassService: ApiClassService, // @Inject(INJECTION_TOKENS.API.API_CLASS_SERVICE)

    @Get()
    @ApiCustomResponse(UsersDashboardModel)
    @ApiOperation({
        description: 'Get list matched user in dashboard',
        summary: 'Get list matched user',
    })
    getListUser() {
        return {
            data: userDump,
        };
    }

    @Post('/add-new')
    @ApiCustomResponse(ApiAuthClassModel)
    @ApiOperation({
        description: 'Create new user in our system',
        summary: 'Create new user',
    })
    createNewUser(
        @Body()
        usersDashboardDto: UsersDashboardDto
    ) {
        console.log(usersDashboardDto);
        return {
            data: userDump,
        };
    }
}
