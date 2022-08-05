import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';
import JwtService from '../services/jwtService';

class UserController {
  constructor(private userService = new UserService()) { }
  
  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    if (userCreated) {
      const token = JwtService(userCreated);
      return res.status(StatusCodes.CREATED).json({ token });
    }
    return res.status(StatusCodes.CREATED).json(userCreated);
  };
}
  
export default UserController;