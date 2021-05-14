enum UserType {
    ADMIN,
    COMPANY,
    CUSTOMER
}

class UserModel{
    public id: string;
    public email: string;
    public password: string;
    public token: string;
    public userType: UserType
}

export default UserModel;