import { ApiUsersDashBoardService } from 'src/api/services';
import { ApiResponseDetails, UsersDashboardDto } from 'src/api/dtos';
import { Inject } from '@nestjs/common';
import { UsersRepository } from 'src/api/repositories';
import { BASE_MESSAGES_TYPE, INJECTION_SYSTEMS } from 'src/enums';
import { UserDashboard } from 'src/entities';
import { ResponseErrorMapper, ResponseSuccessMapper } from 'src/api/model';
import { DashboardMessageType } from 'src/enums/dashboard/messages.enum';
import { UsersDashboardTransform } from 'src/api/transform';

export class ApiUsersDashBoardTml implements ApiUsersDashBoardService {
    constructor(
        @Inject(INJECTION_SYSTEMS.REPOSITORY.USERS_REPOSITORY)
        private userRepository: UsersRepository,

        @Inject(INJECTION_SYSTEMS.TRANSFORM.DASHBOARD_TRANSFORM)
        private transformUsers: UsersDashboardTransform
    ) {}

    async listUsers(): Promise<ApiResponseDetails<UserDashboard[]>> {
        try {
            const find = await this.userRepository.find();
            return ResponseSuccessMapper({
                data: find,
                msg: DashboardMessageType.USER.GET_LIST_USER_SUCCESS,
                status: BASE_MESSAGES_TYPE.SUCCESS,
            });
        } catch (error) {
            return ResponseErrorMapper((error as Error).message, BASE_MESSAGES_TYPE.ERROR);
        }
    }

    createUsers(usersDashboardDto: UsersDashboardDto): Promise<ApiResponseDetails<UserDashboard>> {
        const dataTransform = this.transformUsers.transformUsersDashboard(usersDashboardDto);
        // const userEntities = userPLRequests.map((request) => this.userMapper.convertToEntity(request));

        throw new Error('Method not implemented.');
    }
}
