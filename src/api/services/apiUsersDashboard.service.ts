import { ApiUsersDashBoardService } from 'src/api/services';
import { ResponseDto } from 'src/api/dtos';
import { UsersDashboardModel } from 'src/api/model';


export class ApiUsersDashBoardTml implements ApiUsersDashBoardService {
    constructor() { }
    listUsers(): Promise<ResponseDto<UsersDashboardModel[]>> {
        throw new Error('Method not implemented.');
    }
}
