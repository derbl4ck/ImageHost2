import { Field, InputType } from 'type-graphql';

import { Image } from '../Image';

@InputType()
export class ImageInput implements Partial<Image> {

    @Field()
    public file_name: string;
}
