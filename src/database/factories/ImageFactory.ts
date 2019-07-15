import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import * as uuid from 'uuid';

import { Image } from '../../api/models/Image';

define(Image, (faker: typeof Faker) => {
    const image = new Image();
    image.id = uuid.v1();
    image.file_name = faker.system.fileName('png');
    return image;
});
