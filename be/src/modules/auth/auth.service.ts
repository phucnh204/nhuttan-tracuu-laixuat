import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { JwtUserPayload } from './type';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,

    private readonly jwtService: JwtService,
  ) {}

  // async login(user: JwtUserPayload) {
  //   const payload = { username: user.username, sub: user.id, role: user.role };

  //   const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
  //   const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

  //   await this.userRepository.update(user.id, { refreshToken: hashedRefreshToken });

  //   const dbUser = await this.userRepository.findOne({ where: { id: user.id } });

  //   const safeUser = dbUser && {
  //     id: dbUser.id,
  //     username: dbUser.username,
  //     email: dbUser.email,
  //     role: dbUser.role,
  //   };

  //   return {
  //     access_token: this.jwtService.sign(payload),
  //     refresh_token: refreshToken,
  //     user: safeUser,
  //   };
  // }

  async login(user: JwtUserPayload) {
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role,
    };

    const access_token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '7h',
    });

    const refresh_token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '7d',
    });

    const hashedRefreshToken = await bcrypt.hash(refresh_token, 10);

    await this.userRepository.update(user.id, {
      refreshToken: hashedRefreshToken,
    });

    const dbUser = await this.userRepository.findOne({
      where: { id: user.id },
    });

    const safeUser = dbUser && {
      id: dbUser.id,
      username: dbUser.username,
      email: dbUser.email,
      role: dbUser.role,
    };

    return { access_token, refresh_token, user: safeUser };
  }
}
