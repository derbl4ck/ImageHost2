import { EntityRepository, Repository } from 'typeorm';

import { Image } from '../models/Image';

@EntityRepository(Image)
export class ImageRepository extends Repository<Image> {

    /**
     * Find by user_id is used for our data-loader to get all needed images in one query.
     */
    public findByUserIds(ids: string[]): Promise<Image[]> {
        return this.createQueryBuilder()
            .select()
            .where(`image.user_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
            .getMany();
    }

}
