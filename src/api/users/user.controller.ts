import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiUserClassModel, ApiCustomResponse, ApiAuthClassModel, UsersDto } from "../model"
import { BASE_URL_ENUM } from "src/enums";
import { userDump } from "../../common/dump";


@ApiTags(BASE_URL_ENUM.USERS)
@Controller(`data/${BASE_URL_ENUM.USERS}`)
export class UsersController {

    constructor(
        // @Inject(INJECTION_TOKENS.API.API_CLASS_SERVICE)
        // private apiClassService: ApiClassService,
    ) { }
    @Get()
    @ApiCustomResponse(ApiUserClassModel)
    @ApiOperation({ description: "Get list matched user in dashboard" })
    getMatchedUser() {
        return {
            data: userDump
        }
    }

    @Post("/add-new")
    @ApiCustomResponse(ApiAuthClassModel)
    @ApiOperation({ description: "Create new user in our system" })
    createNewUser(@Body() usersDto: UsersDto) {
        return {
            data: userDump
        }
    }
}