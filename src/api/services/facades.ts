import { ResponseDto, UsersDashboardModel } from 'src/api/model';

export interface ApiUsersDashBoardService {
    listUsers(): Promise<ResponseDto<UsersDashboardModel[]>>;
}
