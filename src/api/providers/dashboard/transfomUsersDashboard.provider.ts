import { UsersDashboardTransformImpl } from 'src/api/transform';
import { INJECTION_SYSTEMS } from 'src/enums';

export const TransformUsersDashboardProvider = {
    provide: INJECTION_SYSTEMS.TRANSFORM.DASHBOARD_TRANSFORM,
    useFactory: () => {
        return new UsersDashboardTransformImpl();
    },
    inject: [],
};
