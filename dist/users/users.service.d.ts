import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private repository;
    constructor(repository: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    create(dto: CreateUserDto): Promise<CreateUserDto & UserEntity>;
}
