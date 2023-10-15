export class ApiBaseClassModel {
    request_at = new Date();
}

export class ApiAuthClassModel extends ApiBaseClassModel {
    access_token = '';
}
