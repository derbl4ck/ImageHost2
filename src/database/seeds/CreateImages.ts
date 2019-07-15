import { Connection } from 'typeorm';
import { Factory, Seed, times } from 'typeorm-seeding';

import { Image } from '../../api/models/Image';
import { User } from '../../api/models/User';

export class CreateImages implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<any> {
        const em = connection.createEntityManager();
        await times(10, async (n) => {
            const image = await factory(Image)().seed();
            const user = await factory(User)().make();
            user.images = [image];
            return await em.save(user);
        });
    }

}
