export class UsersDashboardModel {
    user_id = '';
    email = '';
    user_name = '';
    given_name = '';
    family_name = '';
    nickname = '';
    last_ip = '';
    logins_count = 0;
    email_verified: boolean = false;
    created_at: Date = new Date();
    modify_at: Date = new Date();
    last_login: Date = new Date();
}
