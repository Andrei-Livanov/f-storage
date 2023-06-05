import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    register(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    login(user: UserEntity): Promise<{
        token: string;
    }>;
}
