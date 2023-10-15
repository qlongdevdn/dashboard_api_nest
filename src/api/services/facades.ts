import { ResponseDto, UsersDashboardDto, UsersDashboardModel } from 'src/api/model';

export interface ApiUsersDashBoardService {
    listUsers(): Promise<ResponseDto<UsersDashboardModel[]>>;
    createUsers(usersDashboardDto: UsersDashboardDto): Promise<ResponseDto<UsersDashboardModel>>;
}
