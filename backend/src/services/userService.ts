import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User'; // User 모델을 적절히 임포트하세요.
import { IUser, IUserAuthInfo } from '../interfaces/IUser'; // IUser 인터페이스를 적절히 임포트하세요.
import { CustomError } from '../utils/CustomError'; // 사용자 정의 에러 클래스를 적절히 임포트하세요.

class UserService {
  async register(userData: IUser): Promise<User> {
    // 이메일 중복 검사
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new CustomError('Email already in use', 400);
    }

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // 사용자 데이터 저장
    const user = new User({
      ...userData,
      password: hashedPassword,
    });

    await user.save();

    return user;
  }

  async login(email: string, password: string): Promise<IUserAuthInfo> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CustomError('User not found', 404);
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new CustomError('Invalid password', 401);
    }

    const token = this.generateToken(user.id);

    return { user, token };
  }

  private generateToken(userId: string): string {
    const secret = process.env.JWT_SECRET || 'default_secret';
    return jwt.sign({ id: userId }, secret, { expiresIn: '1h' });
  }

  // 추가적인 메서드들 (프로필 조회, 수정, 비밀번호 변경 등)
}

export default new UserService();
