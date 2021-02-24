import { Login, Session } from "../data_objects";

export interface Auth {
    login?: Login;
    session?: Session;
    token?: string;
}