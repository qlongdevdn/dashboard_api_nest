import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersDashboardModel, ApiCustomResponse, ApiAuthClassModel, UsersDashboardDto } from 'src/api/model';
import { ApiUsersDashBoardService } from 'src/api/services';

import { userDump } from 'src/common/dump';
import { BASE_URL_ENUM, INJECTION_SYSTEMS } from 'src/enums';

@ApiTags(BASE_URL_ENUM.USERS)
@Controller(`api/${BASE_URL_ENUM.USERS}`)
export class UsersController {
    constructor(
        @Inject(INJECTION_SYSTEMS.API.API_USERS_DASHBOAD_SERVICE)
        private apiUsersDashBoardService: ApiUsersDashBoardService,
    ) {}

    @Get()
    @ApiCustomResponse(UsersDashboardModel)
    @ApiOperation({
        description: 'Get list matched user in dashboard',
        summary: 'Get list matched user',
    })
    getListUser() {
        // return this.apiUsersDashBoardService.listUsers();
        return true;
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
