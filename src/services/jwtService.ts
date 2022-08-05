import jwt from 'jsonwebtoken';
import { User } from '../interfaces/index';

const password = '123456oi';

const createToken = (user: User) => {
  const token = jwt.sign({ user }, password);
  return token;
};

export default createToken;