import connection from '../models/connection';
import { User, IUser } from '../interfaces';
import UserModel from '../models/userModel';

class UserService {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }
  
  create = async (user: IUser): Promise<User> => {
    const data = this.model.create(user);
    return data;
  };
}

export default UserService;
