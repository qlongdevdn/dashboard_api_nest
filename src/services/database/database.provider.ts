import { INJECTION_SYSTEMS } from 'src/enums';
import { MongoDBConnectionService } from 'src/services';

export const DatabaseProvider = {
    provide: INJECTION_SYSTEMS.DASHBOARD.DASHBOARD_MODULE,
    useFactory: async () => {
        try {
            if (!MongoDBConnectionService.isInitialized) {
                await MongoDBConnectionService.initialize();
            }
        } catch (error) {
            console.log('Error when init DB: ', error);
            return error;
        }
        return MongoDBConnectionService;
    },
    inject: [],
};
