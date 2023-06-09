import { FileEntity } from '../../files/entities/file.entity';
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    fullName: string;
    files: FileEntity[];
}
