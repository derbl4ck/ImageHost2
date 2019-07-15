import { IsNotEmpty } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { User } from './User';

@Entity()
export class Image {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public file_name: string;

    @Column({
        name: 'user_id',
        nullable: true,
    })
    public userId: string;

    @Column()
    public updatedAt: string;

    @ManyToOne(type => User, user => user.images)
    @JoinColumn({ name: 'user_id' })
    public user: User;

    public toString(): string {
        return `${this.file_name}`;
    }

}
