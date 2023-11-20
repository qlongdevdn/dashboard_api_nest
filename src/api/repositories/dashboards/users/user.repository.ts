import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/api/repositories/facades.repository';
import { UserDashboard } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImpl extends Repository<UserDashboard> implements UsersRepository {
    constructor(dataSource: DataSource) {
        super(UserDashboard, dataSource.createEntityManager());
    }
    async deleteByIds(userIds: string[]): Promise<boolean> {
        try {
            await this.delete(userIds);
            return true;
        } catch (e) {
            return false;
        }
    }
}
