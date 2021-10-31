import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy)
{
    constructor() {
        //All validation and decoding is done here
        super({
            secretOrKey: 'SECRET',
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload: any) {
        return {
            id: payload.id,
            username: payload.username,
            name: payload.name
        }
    }
}