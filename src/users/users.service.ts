import { Injectable } from '@nestjs/common';


export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {

    private readonly users: User[] = [
        {
            id: 1,
            name: "Rohit Sharma",
            username: "rdsharma",
            password: "doublecentury"
        },
        {
            id: 2,
            name: "Jasprit Bumrah",
            username: "jbumrah",
            password: "yorkerking"
        }
    ];


    async findOne(username: string) {
        return this.users.find(user => user.username === username);
    }

}
