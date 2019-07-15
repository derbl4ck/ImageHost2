import { Field, ID, ObjectType } from 'type-graphql';

import { Image } from './Image';

@ObjectType({
    description: 'User object.',
})
export class User {

    @Field(type => ID)
    public id: string;

    @Field({
        description: 'The first name of the user.',
    })
    public name: string;

    @Field({
        description: 'The username of the user.',
    })
    public username: string;

    @Field(type => [Image], {
        description: 'A list of images which belong to the user.',
    })
    public images: Image[];

}
