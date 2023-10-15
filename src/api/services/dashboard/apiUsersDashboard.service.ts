import { ApiUsersDashBoardService } from 'src/api/services';
import { ResponseDto, UsersDashboardDto } from 'src/api/dtos';
import { UsersDashboardModel } from 'src/api/model';

export class ApiUsersDashBoardTml implements ApiUsersDashBoardService {
    constructor() {}
    
    listUsers(): Promise<ResponseDto<UsersDashboardModel[]>> {
        throw new Error('Method not implemented.');
    }

    createUsers(usersDashboardDto: UsersDashboardDto): Promise<ResponseDto<UsersDashboardModel>> {
    // const userEntities = userPLRequests.map((request) => this.userMapper.convertToEntity(request));

        throw new Error('Method not implemented.');
    }
}
