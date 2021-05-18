export enum UserType {
    ADMIN = "ADMIN",
    COMPANY = "COMPANY",
    CUSTOMER = "CUSTOMER"
}

export class UserModel{
    public id: string;
    public email: string;
    public password: string;
    public token: string;
    public userType: UserType
}