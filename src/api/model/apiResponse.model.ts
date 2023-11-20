import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ApiResponseDetails, ResponseDto } from 'src/api/dtos';

export const ApiCustomResponse = <TModel extends Type<any>>(model: TModel, isArray = false) => {
    return applyDecorators(
        ApiExtraModels(ResponseDto),
        ApiExtraModels(model),
        ApiOkResponse({
            description: 'Successfully received model',
            schema: {
                properties: {
                    data: {
                        ...(isArray ? { type: 'array' } : {}),
                        $ref: getSchemaPath(model),
                    },
                },
            },
        })
    );
};

export function ResponseSuccessMapper<T>({
    data,
    status,
    next,
    msg,
    totalElements,
}: {
    data?: T;
    msg?: string;
    status: string;
    next?: string;
    totalElements?: number;
}) {
    return {
        ...(data && { data: data }),
        ...(msg && { msg: msg }),
        status: status,
        ...(next && { next: next }),
        ...(totalElements && { total_elements: totalElements }),
    } as ApiResponseDetails<T>;
}

export function ResponseErrorMapper(error: string, status: string) {
    return {
        data: null,
        status: status,
        msg: error,
    } as ApiResponseDetails<any>;
}
