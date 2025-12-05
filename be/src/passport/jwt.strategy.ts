import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Request } from 'express';

export interface JwtUserPayload {
  username: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  sub: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        // Đọc từ cookie trước
        (request: Request) => {
          return request?.cookies?.access_token;
        },
        // Fallback sang Authorization header
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  validate(payload: JwtUserPayload) {
    this.logger.debug(`JWT payload received: ${JSON.stringify(payload)}`);
    return {
      userId: payload.sub,
      username: payload.username,
      name: payload.name,
      email: payload.email,
      avatar: payload.avatar,
      role: payload.role,
    };
  }
}
