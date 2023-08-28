import { Module } from "@nestjs/common";
import { UsersController } from "../api";

@Module({
    controllers: [UsersController]
})
export default class ApiModule { }