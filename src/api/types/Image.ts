import { Field, ID, ObjectType } from 'type-graphql';

import { User } from './User';

@ObjectType({
    description: 'Image object.',
})
export class Image {

    @Field(type => ID)
    public id: string;

    @Field({
        description: 'The filename of the image.',
    })
    public file_name: string;

    @Field(type => User, {
        nullable: true,
    })
    public owner: User;

}
