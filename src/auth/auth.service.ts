import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);

        if (user && user.password === password) {
            const { password, ...data } = user;
            return data;
        }

        return null;
    }

    async login(user: any) {
        const payload = { id: user.id, username: user.username, name: user.name };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}