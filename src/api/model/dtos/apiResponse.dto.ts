import { Type, applyDecorators } from "@nestjs/common";
import { ApiExtraModels, ApiOkResponse, getSchemaPath, ApiProperty } from "@nestjs/swagger";

export class ResponseDto<Object> {
    @ApiProperty()
    data!: Object | null;
}

export const ApiCustomResponse = <TModel extends Type<any>>(model: TModel, isArray = false) => {
    return applyDecorators(
        ApiExtraModels(ResponseDto),
        ApiExtraModels(model),
        ApiOkResponse({
            description: "Successfully received model",
            schema: {
                properties: {
                    data: {
                        ...(isArray ? { type: "array" } : {}),
                        $ref: getSchemaPath(model),
                    },
                },
            },
        }),
    );
};
